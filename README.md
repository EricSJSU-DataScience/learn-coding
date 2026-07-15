# Code Camp — Learn Python

**🔗 Live site: https://ericsjsu-datascience.github.io/learn-coding/**

*(If that link 404s, GitHub Pages hasn't been turned on yet for this repo — go to Settings → Pages, set Branch to `main` / `/(root)`, save, and wait ~1 minute.)*

---

A free, self-paced Python course for a 13-year-old, built to run entirely in the browser and grow over many months. No login, no server, no cost — write code, hit Run, hit Check, and progress is remembered automatically the next time the site is opened.

## What's here

- **13 units, 60 lessons' worth of markdown content, 12 unit quizzes, and a final capstone project** — the full curriculum outlined in [`CURRICULUM_PLAN.md`](CURRICULUM_PLAN.md) is written and live, from `print()` all the way through object-oriented programming.
- A **live in-browser code editor** running real Python via [Pyodide](https://pyodide.org) (CPython compiled to WebAssembly) — Run and Check buttons, auto-graded exercises, hints, and multiple-choice/fill-in-the-blank quizzes.
- **Progress that survives closing the browser**, saved to that device's local storage — completed exercises, quiz answers, and even unfinished code drafts are all remembered.
- A course structure designed to keep growing: adding a new lesson or exercise is dropping a markdown file into a folder, not editing code.

## How it's built

| File / folder | Role |
|---|---|
| `index.html` | The engine — sidebar, progress bar, editor, Run/Check, quiz UI, Pyodide setup. Rarely needs editing. |
| `curriculum-loader.js` | Reads `curriculum/` at page load and hands the engine its content. Rarely needs editing. |
| `curriculum/manifest.json` | Lists every unit, in order, and which lesson/quiz files belong to it. |
| `curriculum/unit-*/*.md` | The actual content — one markdown file per lesson (exercises embedded inline) or per quiz. **This is what you edit to add more.** |
| `CURRICULUM_PLAN.md` | The full 13-unit course outline this content was built from. |
| `SETUP_GUIDE.md` | Deployment steps, teaching tips, and the full authoring guide (with copy-paste templates) for adding lessons, exercises, and quizzes. |
| `index_v1.html`, `lessons.js` | Earlier single-file prototypes, kept for reference only — not loaded by the live site. |

For deployment steps and how to add new content, see **[`SETUP_GUIDE.md`](SETUP_GUIDE.md)**.
