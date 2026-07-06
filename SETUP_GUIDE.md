# Code Camp — Setup & Teaching Plan

A Python learning site for your 13-year-old, built to grow over months, not just get through 12 lessons once. Runs entirely in the browser, hosts free on GitHub Pages, and auto-grades code like LeetCode.

---

## What you're getting

Three things work together:

- **`index.html`** — the "engine." Sidebar, progress bar, code editor, Run/Check buttons, hints, quiz questions, Pyodide setup. You should basically never need to edit this.
- **`curriculum-loader.js`** — reads the `curriculum/` folder below at page load and hands the engine the data it needs. You shouldn't need to edit this either.
- **`curriculum/`** — the "content." One folder per unit; this is what you'll come back to whenever you want to add more:
  - `curriculum/manifest.json` — lists the units, in order, and which folder + lesson files belong to each.
  - `curriculum/<unit-folder>/<lesson>.md` — one file per lesson. The lesson's exercises live **inside the same file** — no separate exercises folder to keep in sync.
  - `curriculum/<unit-folder>/quiz.md` — optional, a multiple-choice/fill-in-the-blank quiz for that unit.

Splitting it this way is what makes the course extensible — adding a new lesson next month means dropping one `.md` file into a unit's folder and adding its name to a list, not editing a giant JS file or touching `index.html`.

(`index_v1.html` is the original single-file prototype, and `lessons.js` is the old all-in-one curriculum file — both kept around for reference only. Neither is loaded by the live site anymore. `CURRICULUM_PLAN.md` has the full course outline this content is being built from.)

Features:

- **Units → Lessons → Exercises**, with more than one exercise allowed per lesson (great for extra practice reps on a tricky concept)
- A **live code editor** (write Python right in the browser)
- A **Run button** — executes the code and shows output
- A **Check answer button** — auto-verifies correctness and marks the exercise complete
- **Quiz questions** (multiple-choice or fill-in-the-blank) at the end of a unit — graded instantly in the browser, no Pyodide needed
- A **progress bar** and grouped sidebar that track finished exercises and quiz questions
- **Hints** on every exercise
- **Progress that survives closing the browser** — see "Saved progress," below

It uses **Pyodide** (real CPython compiled to WebAssembly), so Python runs in the browser with **no server, no backend, no cost**. That's exactly why it fits GitHub Pages, which only hosts static files.

---

## How to put it on GitHub Pages (10 minutes)

1. **Create a GitHub account** at github.com if you don't have one (free).
2. **Create a new repository** — click the **+** (top right) → *New repository*. Name it something like `python-camp`. Set it to **Public**. Click *Create repository*.
3. **Upload the files** — on the repo page click *Add file* → *Upload files*. Drag in `index.html`, `curriculum-loader.js`, and the whole `curriculum/` folder (keep its internal structure — `manifest.json` plus one subfolder per unit, e.g. `unit-1/`), all in the same top-level folder. Click *Commit changes*.
4. **Turn on Pages** — go to the repo's *Settings* tab → *Pages* (left sidebar). Under *Branch*, pick **main** and **/(root)**, then *Save*.
5. **Wait ~1 minute**, then refresh. GitHub shows your live URL, like:
   `https://YOUR-USERNAME.github.io/python-camp/`
6. Send that link to your kid. Done — they can learn at their own pace, on any device, and pick up right where they left off.

> First load takes a few seconds while Python boots (you'll see "Booting Python…" turn to "Python ready"). After that it's instant.

> Whenever you add lessons later, re-upload just the new/changed files under `curriculum/` (Add file → Upload files → let it overwrite) and commit. No need to touch `index.html` or `curriculum-loader.js`.

---

## Saved progress

Progress is saved in the browser's local storage on whatever device your kid is using — no login, no account, no server. That means:

- Closing the tab, closing the browser, or restarting the computer **does not** lose progress. Reopening the site picks up on the exact exercise they left off on.
- Completed exercises stay checked off, and **unfinished code is auto-saved too** — if they're halfway through an exercise and close the browser, their draft is still there next time.
- Progress is tied to that one browser on that one device. If they switch from a laptop to a tablet, it starts fresh there (there's no account syncing between devices).
- A **"Reset progress"** button in the header clears everything on that device, if you ever want a clean slate.

---

## The current curriculum

The full course outline (12 units, ~58 lessons, ~37 practice exercises, 12 quizzes, plus a final capstone project) lives in **`CURRICULUM_PLAN.md`** — that's the plan to check when deciding what to build next or reviewing pacing.

Content is being built out unit by unit against that plan. Right now, **Unit 1: Getting Started with Python** is fully implemented:

| Lesson | What they learn | Exercise |
|---|---|---|
| Writing Code | `print()`, strings, comments | Print a greeting |
| Memory & Variables | variables, `=`, naming rules | Build a mini profile |
| Text Data | strings, quotes, concatenation | Game Messages |
| Numerical Data | `int` / `float`, arithmetic operators | Shopping Prices |
| Working with Variables | combining variables in one program | The Semester Grade |
| *(Quiz)* | recap of the whole unit | 6 multiple-choice / fill-in-the-blank questions |

Each lesson builds on the last. Exercises are graded by hidden test logic — the kid only sees "Correct!" or a friendly hint about what's off. Quiz questions are graded instantly in the browser.

---

## How to teach it (suggested rhythm)

- **You teach live in Colab first** (as you planned) — walk through one concept together.
- **They practice solo on the site** — same concept, but self-paced with instant feedback.
- **One or two lessons per sitting.** Don't rush; let the green checkmarks be the reward.
- **When they get stuck**, the Hint button gives a nudge without giving the answer.
- **Do the quiz after finishing all of a unit's lessons** — it's a good checkpoint before moving on to the next unit.

---

## Adding more lessons, exercises, and quizzes

Content lives as markdown files under `curriculum/<unit-folder>/` — no need to touch JavaScript at all. Each unit is one folder; each lesson is one file **with its exercises embedded inside it**; each unit can optionally have one `quiz.md`. `curriculum/manifest.json` says which units/folders/files exist and in what order.

### Adding a new exercise to an existing lesson

Open that lesson's `.md` file under its unit folder (e.g. `curriculum/unit-1/writing-code.md`) and add another `## Exercise: ...` block anywhere after the Concept/Example/Notes sections — a lesson can have as many as you like:

````markdown
## Exercise: your-new-exercise-id
title: Exercise name
stdin: "optional\ninput\nlines\n"   <- only if the exercise uses input()

What to do. Use `backtick code` for inline code — this text becomes the description.

### Starter

```python
# starter code the student sees
```

### Hint

A helpful nudge, not the full answer.

### Check

```python
out = _stdout.strip()          # the student's printed output
if out == "expected answer":
    result = "PASS"
else:
    result = f"Expected 'X' but got '{out}'"
```
````

The `Check` block is plain Python, run after the student's code. It has access to:
- `_stdout` — everything the student's program printed
- any variables/functions the student defined

Set `result = "PASS"` to mark it correct, or `result = "some message"` to show as a hint.

### Adding a whole new lesson

Create a new file in the unit's folder, e.g. `curriculum/unit-1/your-lesson-id.md`:

````markdown
---
id: your-lesson-id
title: Lesson title
blurb: One-line summary.
---

## Concept

Explain the concept here. You can use `code`, **bold**, and:

- bullet
- points

## Example

```python
print("a short, readable code example")
```

## Notes

- A quick tip.
- Another quick tip.

## Exercise: your-lesson-id-1
title: Exercise name

What to do.

### Starter

```python
# starter code
```

### Hint

A nudge.

### Check

```python
out = _stdout.strip()
if out == "expected":
    result = "PASS"
else:
    result = f"Expected 'expected' but got '{out}'"
```
````

Then add `"your-lesson-id"` to that unit's `lessons` list in `curriculum/manifest.json`.

### Adding or editing a quiz

Create `quiz.md` in the unit's folder — frontmatter plus a single fenced ` ```json ` array of questions:

````markdown
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
````

`type` is `"mcq"` (shows clickable option buttons) or `"fill_blank"` (shows a text box). Grading is case-insensitive and happens instantly in the browser — no Pyodide involved. Then set `"quiz": "quiz"` on that unit in `curriculum/manifest.json` (omit the field entirely for units with no quiz yet).

### Adding a whole new unit

Add a new entry to `curriculum/manifest.json` and create the matching folder:

```json
{ "id": "unit-6", "title": "Unit 6: Your New Topic", "folder": "unit-6", "lessons": ["your-lesson-id"], "quiz": "quiz" }
```

### Rules that matter

- **Never change or reuse an `id`** (lesson, exercise, or quiz question) once it's been shipped — that id is the key progress is saved under. Changing it makes a finished item look brand new.
- **It's always safe to append** — new exercise blocks, new lesson files, new units in `manifest.json`. Existing progress is untouched.
- Giving a lesson more than one exercise is the easiest way to add more practice reps without inventing a whole new lesson — just add another `## Exercise: ...` block.
- Concept/Notes/exercise-description sections are plain markdown (rendered to HTML automatically) — write `**bold**`, `` `code` ``, and `- bullet` lists naturally.
- Example/Starter/Check sections must each be a single fenced ` ```python ` code block — that's the part read literally as code.

Copy an existing lesson `.md` file (or `quiz.md`) as your starting point — that's the easiest way to get the format right.

### Testing locally before uploading

Browsers block a page from fetching local files with `fetch()` when opened directly (`file://...`), which is how `curriculum-loader.js` reads everything under `curriculum/`. To preview changes before pushing to GitHub, run a tiny local server from the project folder and open the URL it prints:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`. GitHub Pages itself always serves over `https://`, so this only matters for local testing.

---

## Good to know

- **Totally free forever** — GitHub Pages and Pyodide cost nothing.
- **`input()` exercises** use pre-filled answers (the `stdin` field) so the autograder can test them without a real prompt.
- **`index.html`, `curriculum-loader.js`, and the `curriculum/` folder must be uploaded together**, in the same top-level folder — `index.html` loads `curriculum-loader.js`, which fetches everything under `curriculum/` at page load.
- **Quiz answers are graded with a simple case-insensitive string match** — good enough for MCQ options and short fill-in-the-blank answers, but don't use it for anything where multiple phrasings could be correct.
