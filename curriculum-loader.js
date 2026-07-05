/* =======================================================================
   CODE CAMP — CURRICULUM LOADER
   =======================================================================
   Loads the course from curriculum/manifest.json + curriculum/lessons/*.md
   + curriculum/exercises/*.md, and hands index.html back the same
   CURRICULUM array shape it always used to get from lessons.js. This is
   the ONLY file you should need to touch if you're changing HOW content
   is loaded — to actually add lessons/exercises, just drop new .md files
   under curriculum/ and list them in curriculum/manifest.json.

   See SETUP_GUIDE.md for the full authoring guide and copy-paste
   templates for a new lesson/exercise/unit.

   FILE FORMAT (both lessons and exercises use this same shape):

     ---
     id: some-id                  <- required, never change once shipped
     title: Shown to the student
     blurb: One-line summary.     <- lessons only
     exercises:                   <- lessons only: ids of its exercises, in order
       - some-exercise-id
       - another-exercise-id
     stdin: "prefilled\ninput\n"  <- exercises only, optional, quoted string
     ---

     ## Concept / ## Description   (markdown -> rendered as HTML)
     ## Example / ## Starter / ## Check   (a single ```python fenced block)
     ## Notes / ## Hint             (markdown -> rendered as HTML)

   Lessons use Concept/Example/Notes. Exercises use Description/Starter/
   Hint/Check. Section order doesn't matter; unknown sections are ignored.
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
     key:
       - list item
       - list item
   ----------------------------------------------------------------------*/
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const [, fmText, body] = m;
  const meta = {};
  const lines = fmText.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) { i++; continue; }
    const key = kv[1];
    const rest = kv[2];
    if (rest === "") {
      const list = [];
      let j = i + 1;
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        list.push(lines[j].replace(/^\s*-\s+/, "").trim());
        j++;
      }
      meta[key] = list;
      i = j;
      continue;
    }
    const quoted = rest.match(/^"(.*)"$/) || rest.match(/^'(.*)'$/);
    meta[key] = quoted
      ? quoted[1].replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\\\/g, "\\")
      : rest.trim();
    i++;
  }
  return { meta, body };
}

/* ---- split the markdown body into ## sections ---- */
function parseSections(body) {
  const sections = {};
  let current = null;
  let buf = [];
  const flush = () => { if (current) sections[current] = buf.join("\n").trim(); buf = []; };
  for (const line of body.split(/\r?\n/)) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h) { flush(); current = h[1].trim(); }
    else if (current) buf.push(line);
  }
  flush();
  return sections;
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

async function loadExercise(exerciseId) {
  const raw = await fetchText(`curriculum/exercises/${exerciseId}.md`);
  const { meta, body } = parseFrontmatter(raw);
  const sections = parseSections(body);
  return {
    id: meta.id || exerciseId,
    title: meta.title || exerciseId,
    desc: renderMd(sections["Description"]),
    starter: extractCode(sections["Starter"]),
    stdin: meta.stdin || undefined,
    hint: renderMd(sections["Hint"]),
    check: extractCode(sections["Check"])
  };
}

async function loadLesson(lessonId) {
  const raw = await fetchText(`curriculum/lessons/${lessonId}.md`);
  const { meta, body } = parseFrontmatter(raw);
  const sections = parseSections(body);
  const exerciseIds = Array.isArray(meta.exercises) ? meta.exercises : [];
  const exercises = await Promise.all(exerciseIds.map(loadExercise));
  return {
    id: meta.id || lessonId,
    title: meta.title || lessonId,
    blurb: meta.blurb || "",
    concept: renderMd(sections["Concept"]),
    example: extractCode(sections["Example"]),
    notes: renderMd(sections["Notes"]),
    exercises
  };
}

async function loadCurriculum() {
  const manifest = JSON.parse(await fetchText("curriculum/manifest.json"));
  return Promise.all(manifest.units.map(async unitDef => ({
    id: unitDef.id,
    title: unitDef.title,
    lessons: await Promise.all(unitDef.lessons.map(loadLesson))
  })));
}
