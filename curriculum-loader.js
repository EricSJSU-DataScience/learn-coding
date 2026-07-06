/* =======================================================================
   CODE CAMP — CURRICULUM LOADER  (v2: one folder per unit)
   =======================================================================
   Loads the course from curriculum/manifest.json + curriculum/<unit-folder>/*.md
   and hands index.html back the same CURRICULUM array shape it always used.
   This is the ONLY file you should need to touch if you're changing HOW
   content is loaded — to actually add lessons/exercises/quizzes, just add
   .md files under a unit's folder and list them in curriculum/manifest.json.

   See SETUP_GUIDE.md for the full authoring guide and copy-paste templates.

   FOLDER LAYOUT
     curriculum/manifest.json
     curriculum/<unit-folder>/<lesson-file>.md   <- one file per lesson,
                                                     exercises embedded inline
     curriculum/<unit-folder>/<quiz-file>.md     <- optional, MCQ/fill-blank
                                                     questions for the unit

   manifest.json shape:
     {
       "units": [
         {
           "id": "unit-1",
           "title": "Unit 1: ...",
           "folder": "unit-1",
           "lessons": ["writing-code", "memory-variables", ...],
           "quiz": "quiz"            <- optional, filename (no .md) in folder
         }
       ]
     }

   LESSON FILE FORMAT — everything for one lesson, exercises included:

     ---
     id: some-lesson-id             <- required, never change once shipped
     title: Lesson title
     blurb: One-line summary.
     ---

     ## Concept
     Markdown explanation. **bold**, `code`, - bullets all work.

     ## Example
     ```python
     print("a short, readable example")
     ```

     ## Notes
     - a quick tip
     - another quick tip

     ## Exercise: some-unique-exercise-id
     title: Exercise name
     stdin: "optional\ninput\n"        <- optional, only if uses input()

     What to do. Use `backtick code` for inline code — this text becomes
     the exercise description.

     ### Starter
     ```python
     # starter code the student sees
     ```

     ### Hint
     A helpful nudge, not the full answer.

     ### Check
     ```python
     out = _stdout.strip()
     if out == "expected":
         result = "PASS"
     else:
         result = f"Expected 'expected' but got '{out}'"
     ```

   A lesson can have more than one "## Exercise: ..." block — just add
   another one below the first, each with its own unique id.

   QUIZ FILE FORMAT — frontmatter + one fenced ```json array of questions:

     ---
     id: unit-1-quiz
     title: Module 1 Quiz
     ---

     ```json
     [
       {
         "id": "unit-1-quiz-1",
         "type": "mcq",
         "prompt": "What function prints text to the screen?",
         "options": ["print()", "input()", "return()"],
         "answer": "print()",
         "explanation": "`print()` outputs text to the screen."
       },
       {
         "id": "unit-1-quiz-2",
         "type": "fill_blank",
         "prompt": "Complete: ___(\"Hello\") prints Hello.",
         "answer": "print",
         "explanation": "The print() function outputs text."
       }
     ]
     ```
   ======================================================================= */

async function fetchText(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path} (${res.status})`);
  return res.text();
}

/* ---- tiny frontmatter parser -----------------------------------------
   Not a full YAML parser — just enough for our metadata:
     key: plain value
     key: "quoted value, supports \n \" \\ escapes"
   ----------------------------------------------------------------------*/
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const [, fmText, body] = m;
  const meta = {};
  for (const line of fmText.split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    meta[kv[1]] = parseScalar(kv[2]);
  }
  return { meta, body };
}

function parseScalar(rest) {
  const quoted = rest.match(/^"(.*)"$/) || rest.match(/^'(.*)'$/);
  return quoted
    ? quoted[1].replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\\\/g, "\\")
    : rest.trim();
}

/* ---- split a lesson body into ## sections, pulling out "## Exercise: id"
   blocks separately from the regular Concept/Example/Notes sections ---- */
function splitLessonBody(body) {
  const sections = {};
  const exerciseBlocks = []; // [{ id, body }]
  let current = null;
  let exerciseId = null;
  let buf = [];
  const flush = () => {
    if (exerciseId) exerciseBlocks.push({ id: exerciseId, body: buf.join("\n").trim() });
    else if (current) sections[current] = buf.join("\n").trim();
    buf = [];
  };
  for (const line of body.split(/\r?\n/)) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h) {
      flush();
      const heading = h[1].trim();
      const exMatch = heading.match(/^Exercise:\s*(.+)$/i);
      if (exMatch) { exerciseId = exMatch[1].trim(); current = null; }
      else { exerciseId = null; current = heading; }
    } else {
      buf.push(line);
    }
  }
  flush();
  return { sections, exerciseBlocks };
}

/* ---- parse one "## Exercise: id" block: leading key:value metadata
   lines, then the description, then ### sub-sections ---- */
function parseExerciseBlock(id, blockBody) {
  const lines = blockBody.split(/\r?\n/);
  const meta = {};
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "" && Object.keys(meta).length === 0) { i++; continue; }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (kv) { meta[kv[1]] = parseScalar(kv[2]); i++; }
    else break;
  }
  const rest = lines.slice(i).join("\n");

  const subsections = { Description: "" };
  let current = "Description";
  let buf = [];
  const flush = () => { subsections[current] = buf.join("\n").trim(); buf = []; };
  for (const line of rest.split(/\r?\n/)) {
    const h = line.match(/^###\s+(.+?)\s*$/);
    if (h) { flush(); current = h[1].trim(); }
    else buf.push(line);
  }
  flush();

  return {
    id: meta.id || id,
    title: meta.title || id,
    stdin: meta.stdin || undefined,
    desc: renderMd(subsections["Description"]),
    starter: extractCode(subsections["Starter"]),
    hint: renderMd(subsections["Hint"]),
    check: extractCode(subsections["Check"])
  };
}

/* ---- pull the code out of a section's first fenced code block ---- */
function extractCode(sectionText) {
  if (!sectionText) return "";
  const m = sectionText.match(/```[a-zA-Z]*\r?\n([\s\S]*?)```/);
  if (!m) return sectionText.trim() + "\n";
  return m[1].replace(/\r?\n$/, "") + "\n";
}

function renderMd(text) {
  if (!text) return "";
  return (typeof marked !== "undefined" && marked.parse) ? marked.parse(text) : text;
}

async function loadLesson(folder, lessonFile) {
  const raw = await fetchText(`curriculum/${folder}/${lessonFile}.md`);
  const { meta, body } = parseFrontmatter(raw);
  const { sections, exerciseBlocks } = splitLessonBody(body);
  const exercises = exerciseBlocks.map(b => parseExerciseBlock(b.id, b.body));
  return {
    id: meta.id || lessonFile,
    title: meta.title || lessonFile,
    blurb: meta.blurb || "",
    concept: renderMd(sections["Concept"]),
    example: extractCode(sections["Example"]),
    notes: renderMd(sections["Notes"]),
    exercises
  };
}

async function loadQuiz(folder, quizFile) {
  const raw = await fetchText(`curriculum/${folder}/${quizFile}.md`);
  const { meta, body } = parseFrontmatter(raw);
  const m = body.match(/```json\r?\n([\s\S]*?)```/);
  const questions = m ? JSON.parse(m[1]) : [];
  const quizId = meta.id || quizFile;
  return {
    id: quizId,
    title: meta.title || "Quiz",
    blurb: meta.blurb || "Test what you learned in this unit.",
    type: "quiz",
    concept: "",
    example: "",
    notes: "",
    exercises: questions.map((q, idx) => ({
      id: q.id || `${quizId}-q${idx + 1}`,
      title: q.title || `Question ${idx + 1}`,
      type: q.type || "mcq",
      desc: renderMd(q.prompt || ""),
      options: Array.isArray(q.options) ? q.options : [],
      answer: q.answer,
      explanation: renderMd(q.explanation || "")
    }))
  };
}

async function loadUnit(unitDef) {
  const lessons = await Promise.all((unitDef.lessons || []).map(f => loadLesson(unitDef.folder, f)));
  if (unitDef.quiz) {
    lessons.push(await loadQuiz(unitDef.folder, unitDef.quiz));
  }
  return { id: unitDef.id, title: unitDef.title, lessons };
}

async function loadCurriculum() {
  const manifest = JSON.parse(await fetchText("curriculum/manifest.json"));
  return Promise.all(manifest.units.map(loadUnit));
}
