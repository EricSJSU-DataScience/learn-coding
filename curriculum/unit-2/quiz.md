---
id: unit-2-quiz
title: Module 2 Quiz
blurb: Test what you learned about debugging, style, input/output, and data types.
---

```json
[
  {
    "id": "unit-2-quiz-1",
    "type": "mcq",
    "prompt": "Which error happens when you use a variable name that was never created (often a typo)?",
    "options": ["SyntaxError", "NameError", "TypeError", "ValueError"],
    "answer": "NameError",
    "explanation": "NameError means Python doesn't recognize that variable name — usually a typo or a variable used before it was created."
  },
  {
    "id": "unit-2-quiz-2",
    "type": "mcq",
    "prompt": "Which of these is written in snake_case?",
    "options": ["studentName", "StudentName", "student_name", "STUDENTNAME"],
    "answer": "student_name",
    "explanation": "snake_case uses lowercase words separated by underscores."
  },
  {
    "id": "unit-2-quiz-3",
    "type": "mcq",
    "prompt": "What does input() always return?",
    "options": ["a string", "an integer", "a float", "a boolean"],
    "answer": "a string",
    "explanation": "input() always gives you back text (a str), even if the user types a number."
  },
  {
    "id": "unit-2-quiz-4",
    "type": "mcq",
    "prompt": "In an f-string, where do you put a variable so its value gets inserted?",
    "options": ["() parentheses", "[] square brackets", "{} curly braces", "<> angle brackets"],
    "answer": "{} curly braces",
    "explanation": "f-strings use {variable_name} to embed a value directly inside the text."
  },
  {
    "id": "unit-2-quiz-5",
    "type": "mcq",
    "prompt": "What will type(13) return?",
    "options": ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
    "answer": "<class 'int'>",
    "explanation": "13 has no decimal point, so it's a whole number — an int."
  },
  {
    "id": "unit-2-quiz-6",
    "type": "fill_blank",
    "prompt": "Fill in the missing function: age = ___(\"How old are you? \")",
    "answer": "input",
    "explanation": "input() displays the prompt and waits for the user to type a response."
  }
]
```
