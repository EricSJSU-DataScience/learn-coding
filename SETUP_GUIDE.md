# Code Camp — Setup & Teaching Plan

A Python learning site for your 13-year-old, built to grow over months, not just get through 12 lessons once. Runs entirely in the browser, hosts free on GitHub Pages, and auto-grades code like LeetCode.

---

## What you're getting

Three things work together:

- **`index.html`** — the "engine." Sidebar, progress bar, code editor, Run/Check buttons, hints, Pyodide setup. You should basically never need to edit this.
- **`curriculum-loader.js`** — reads the `curriculum/` folder below at page load and hands the engine the data it needs. You shouldn't need to edit this either.
- **`curriculum/`** — the "content." Every unit, lesson, and exercise lives here as its own plain markdown file. This is what you'll come back to whenever you want to add more:
  - `curriculum/manifest.json` — lists the units and which lesson files belong to each, in order.
  - `curriculum/lessons/*.md` — one file per lesson (concept, example, notes).
  - `curriculum/exercises/*.md` — one file per exercise (description, starter code, hint, checker).

Splitting it this way is what makes the course extensible — adding a new exercise next month means dropping a new `.md` file into `curriculum/` and adding one line to a list, not editing a giant JS file or touching `index.html`.

(`index_v1.html` is the original single-file prototype, and `lessons.js` is the old all-in-one curriculum file — both kept around for reference only. Neither is loaded by the live site anymore.)

Features:

- **Units → Lessons → Exercises**, with more than one exercise allowed per lesson (great for extra practice reps on a tricky concept)
- A **live code editor** (write Python right in the browser)
- A **Run button** — executes the code and shows output
- A **Check answer button** — auto-verifies correctness and marks the exercise complete
- A **progress bar** and grouped sidebar that track finished exercises
- **Hints** on every exercise
- **Progress that survives closing the browser** — see "Saved progress," below

It uses **Pyodide** (real CPython compiled to WebAssembly), so Python runs in the browser with **no server, no backend, no cost**. That's exactly why it fits GitHub Pages, which only hosts static files.

---

## How to put it on GitHub Pages (10 minutes)

1. **Create a GitHub account** at github.com if you don't have one (free).
2. **Create a new repository** — click the **+** (top right) → *New repository*. Name it something like `python-camp`. Set it to **Public**. Click *Create repository*.
3. **Upload the files** — on the repo page click *Add file* → *Upload files*. Drag in `index.html`, `curriculum-loader.js`, and the whole `curriculum/` folder (keep its internal structure — `manifest.json`, `lessons/`, `exercises/`), all in the same top-level folder. Click *Commit changes*.
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

| Unit | Lesson | What they learn | Exercises |
|---|---|---|---|
| 1: Fundamentals | Say Hello to Python | `print()`, strings, comments | Print a greeting + bonus: two lines |
| 1: Fundamentals | Variables & Data Types | `str` / `int` / `float`, `=` | Build a mini profile |
| 1: Fundamentals | Input & Type Conversion | `input()`, `int()`, `float()` | Personalized greeting |
| 1: Fundamentals | Operators & Math | `+ - * / % // **` | Rectangle area |
| 2: Control Flow | Making Decisions with `if` | `if` / `elif` / `else`, comparisons | Even or odd |
| 2: Control Flow | Loops Part 1 | `for`, `range()` | Count to five |
| 2: Control Flow | Loops Part 2 | `while`, `break`, `continue` | Countdown |
| 3: Collections | Lists | indexing, `.append()`, `len()` | Sum the numbers |
| 3: Collections | Strings | slicing, `.upper()`, methods | Shout it |
| 4: Functions & Dictionaries | Functions | `def`, parameters, `return` | Double it |
| 4: Functions & Dictionaries | Dictionaries | key → value lookups | Grade lookup |
| 5: Final Project | Final Project | combining everything | Guess-the-number checker |

13 exercises total today. This is meant to keep growing — see below.

Each lesson builds on the last. Exercises are graded by hidden test logic — the kid only sees "Correct!" or a friendly hint about what's off.

---

## How to teach it (suggested rhythm)

- **You teach live in Colab first** (as you planned) — walk through one concept together.
- **They practice solo on the site** — same concept, but self-paced with instant feedback.
- **One or two lessons per sitting.** Don't rush; let the green checkmarks be the reward.
- **When they get stuck**, the Hint button gives a nudge without giving the answer.
- **After the Final Project lesson**, have them build the *full* guessing game in Colab (looping until they win) — the site's final lesson teaches the core logic, Colab is where they extend it.

---

## Adding more lessons and exercises

Content lives as individual markdown files under `curriculum/` — no need to touch JavaScript at all. Each exercise is its own `.md` file, each lesson is its own `.md` file, and `curriculum/manifest.json` says which units/lessons exist and in what order.

### Adding a new exercise to an existing lesson

1. Create `curriculum/exercises/your-new-id.md`:

   ````markdown
   ---
   id: your-new-id
   title: Exercise name
   stdin: "optional\ninput\nlines\n"   <- only if the exercise uses input()
   ---

   ## Description

   What to do. Use `backtick code` for inline code.

   ## Starter

   ```python
   # starter code the student sees
   ```

   ## Hint

   A helpful nudge, not the full answer.

   ## Check

   ```python
   out = _stdout.strip()          # the student's printed output
   if out == "expected answer":
       result = "PASS"
   else:
       result = f"Expected 'X' but got '{out}'"
   ```
   ````

2. Open the lesson's `.md` file under `curriculum/lessons/` and add `your-new-id` to its `exercises:` list in the frontmatter.

The `Check` block is plain Python, run after the student's code. It has access to:
- `_stdout` — everything the student's program printed
- any variables/functions the student defined

Set `result = "PASS"` to mark it correct, or `result = "some message"` to show as a hint.

### Adding a whole new lesson

1. Create `curriculum/lessons/your-lesson-id.md`:

   ````markdown
   ---
   id: your-lesson-id
   title: Lesson title
   blurb: One-line summary.
   exercises:
     - your-new-id
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
   ````

2. Add its exercise file(s) as above.
3. Add `your-lesson-id` to the right unit's `lessons` list in `curriculum/manifest.json`.

### Adding a whole new unit

Add a new entry to `curriculum/manifest.json`:

```json
{ "id": "unit-6", "title": "Unit 6: Your New Topic", "lessons": ["your-lesson-id"] }
```

### Rules that matter

- **Never change or reuse an `id`** (lesson or exercise) once it's been shipped — that id is the key progress is saved under. Changing it makes a finished exercise look brand new.
- **It's always safe to append** — new exercise files, new lesson files, new units in `manifest.json`. Existing progress is untouched.
- Giving a lesson more than one exercise (like the bonus second exercise on "Say Hello to Python") is the easiest way to add more practice reps without inventing a whole new lesson — just add another id to that lesson's `exercises:` list.
- Concept/Notes/Description/Hint sections are plain markdown (rendered to HTML automatically) — write `**bold**`, `` `code` ``, and `- bullet` lists naturally.
- Example/Starter/Check sections must be a single fenced ` ```python ` code block — that's the part read literally as code.

Copy an existing lesson or exercise `.md` file as your starting point — that's the easiest way to get the format right.

### Testing locally before uploading

Browsers block a page from fetching local files with `fetch()` when opened directly (`file://...`), which is how `curriculum-loader.js` reads everything under `curriculum/`. To preview changes before pushing to GitHub, run a tiny local server from the project folder and open the URL it prints:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`. GitHub Pages itself always serves over `https://`, so this only matters for local testing.

---

## Good to know

- **Totally free forever** — GitHub Pages and Pyodide cost nothing.
- **`input()` exercises** use pre-filled answers (the `stdin` field) so the autograder can test them without a real prompt. This is explained to the student in the "Input & Type Conversion" lesson.
- **`index.html`, `curriculum-loader.js`, and the `curriculum/` folder must be uploaded together**, in the same top-level folder — `index.html` loads `curriculum-loader.js`, which fetches everything under `curriculum/` at page load.
