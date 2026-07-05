# Code Camp — Setup & Teaching Plan

A Python learning site for your 13-year-old, built to grow over months, not just get through 12 lessons once. Runs entirely in the browser, hosts free on GitHub Pages, and auto-grades code like LeetCode.

---

## What you're getting

Two files work together:

- **`index.html`** — the "engine." Sidebar, progress bar, code editor, Run/Check buttons, hints, Pyodide setup. You should basically never need to edit this.
- **`lessons.js`** — the "content." Every unit, lesson, and exercise lives here as plain data. This is the file you'll come back to whenever you want to add more.

Splitting it this way is what makes the course extensible — adding a new exercise next month means editing `lessons.js`, not rebuilding the site.

(`index_v1.html` is the original single-file prototype, kept around for reference. You don't need it for anything — the two files above are the real site.)

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
3. **Upload the files** — on the repo page click *Add file* → *Upload files*. Drag in **both** `index.html` and `lessons.js` (they must sit in the same folder). Click *Commit changes*.
4. **Turn on Pages** — go to the repo's *Settings* tab → *Pages* (left sidebar). Under *Branch*, pick **main** and **/(root)**, then *Save*.
5. **Wait ~1 minute**, then refresh. GitHub shows your live URL, like:
   `https://YOUR-USERNAME.github.io/python-camp/`
6. Send that link to your kid. Done — they can learn at their own pace, on any device, and pick up right where they left off.

> First load takes a few seconds while Python boots (you'll see "Booting Python…" turn to "Python ready"). After that it's instant.

> Whenever you add lessons later, re-upload just the changed `lessons.js` (Add file → Upload files → let it overwrite) and commit. No need to touch `index.html`.

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

Everything you need is documented right at the top of `lessons.js` — open it and read the comment block first, it has copy-paste templates for a new exercise, a new lesson, and a new unit. The short version:

```javascript
// Add to a lesson's "exercises" array:
{
  id: "unique-exercise-id",         // never reused, never changed later
  title: "Exercise name",
  desc: `What to do. Use <code>backtick code</code>.`,
  starter: `# starter code the student sees\n`,
  stdin: "optional\ninput\nlines\n",  // only if the exercise uses input()
  hint: `A helpful nudge.`,
  check: `
out = _stdout.strip()          # the student's printed output
if out == "expected answer":
    result = "PASS"
else:
    result = f"Expected 'X' but got '{out}'"
`
}
```

The `check` block is plain Python. It has access to:
- `_stdout` — everything the student's program printed
- any variables/functions the student defined

Set `result = "PASS"` to mark it correct, or `result = "some message"` to show a hint.

A few rules that matter because progress is now saved by id:
- **Never change or reuse an `id`** (lesson or exercise) once it's been shipped — that id is the key progress is saved under. Changing it makes a finished exercise look brand new.
- **It's always safe to append** new exercises to a lesson, new lessons to a unit, or new units to the end of `lessons.js`. Existing progress is untouched.
- Giving a lesson more than one exercise (like the bonus second exercise on "Say Hello to Python") is the easiest way to add more practice reps without inventing a whole new lesson — just add another object to that lesson's `exercises` array.

Copy an existing lesson or exercise as your starting point — that's the easiest way to get the format right.

---

## Good to know

- **Totally free forever** — GitHub Pages and Pyodide cost nothing.
- **`input()` exercises** use pre-filled answers (the `stdin` field) so the autograder can test them without a real prompt. This is explained to the student in the "Input & Type Conversion" lesson.
- **`index.html` and `lessons.js` must be uploaded together**, in the same folder — `index.html` loads `lessons.js` as a script tag.
