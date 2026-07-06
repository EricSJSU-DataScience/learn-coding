---
id: unit-10-quiz
title: Module 10 Quiz
blurb: Test what you learned about exceptions and try/except.
---

```json
[
  {
    "id": "unit-10-quiz-1",
    "type": "mcq",
    "prompt": "What is an exception?",
    "options": ["Python's way of signaling something went wrong while running", "A syntax mistake caught before running", "A type of loop", "A type of variable"],
    "answer": "Python's way of signaling something went wrong while running",
    "explanation": "Exceptions happen at runtime, when something unexpected occurs while the program executes."
  },
  {
    "id": "unit-10-quiz-2",
    "type": "fill_blank",
    "prompt": "Fill in the missing keyword: ___: risky_code()\nexcept ValueError: handle_it()",
    "answer": "try",
    "explanation": "try wraps the code that might raise an exception."
  },
  {
    "id": "unit-10-quiz-3",
    "type": "mcq",
    "prompt": "Which block always runs, whether or not an exception happened?",
    "options": ["finally", "else", "except", "try"],
    "answer": "finally",
    "explanation": "finally always runs, no matter what happened in try/except."
  },
  {
    "id": "unit-10-quiz-4",
    "type": "mcq",
    "prompt": "Which exception happens when a dictionary key doesn't exist?",
    "options": ["KeyError", "ValueError", "IndexError", "TypeError"],
    "answer": "KeyError",
    "explanation": "Accessing a missing dictionary key with [] raises a KeyError."
  },
  {
    "id": "unit-10-quiz-5",
    "type": "mcq",
    "prompt": "What does the else block in a try/except do?",
    "options": ["Runs only if no exception happened", "Runs only if an exception happened", "Always runs", "Never runs"],
    "answer": "Runs only if no exception happened",
    "explanation": "else runs only when the try block completed without raising an exception."
  },
  {
    "id": "unit-10-quiz-6",
    "type": "mcq",
    "prompt": "Which exception happens from dividing by zero?",
    "options": ["ZeroDivisionError", "ValueError", "KeyError", "NameError"],
    "answer": "ZeroDivisionError",
    "explanation": "Dividing any number by zero raises a ZeroDivisionError."
  }
]
```
