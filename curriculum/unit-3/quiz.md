---
id: unit-3-quiz
title: Module 3 Quiz
blurb: Test what you learned about type checking, conversion, comparisons, and logic.
---

```json
[
  {
    "id": "unit-3-quiz-1",
    "type": "mcq",
    "prompt": "Which function checks if a value is a specific type, returning True/False?",
    "options": ["type()", "isinstance()", "check()", "typeof()"],
    "answer": "isinstance()",
    "explanation": "isinstance(value, type) returns True or False."
  },
  {
    "id": "unit-3-quiz-2",
    "type": "mcq",
    "prompt": "Which converts the text \"3.5\" into a decimal number?",
    "options": ["int(\"3.5\")", "float(\"3.5\")", "str(\"3.5\")", "bool(\"3.5\")"],
    "answer": "float(\"3.5\")",
    "explanation": "float() converts text into a decimal number."
  },
  {
    "id": "unit-3-quiz-3",
    "type": "mcq",
    "prompt": "What error do you get if you try int('hello')?",
    "options": ["TypeError", "ValueError", "NameError", "SyntaxError"],
    "answer": "ValueError",
    "explanation": "'hello' isn't a valid number, so Python raises a ValueError."
  },
  {
    "id": "unit-3-quiz-4",
    "type": "mcq",
    "prompt": "What does 5 > 3 evaluate to?",
    "options": ["True", "False", "5", "Error"],
    "answer": "True",
    "explanation": "5 is greater than 3, so the comparison is True."
  },
  {
    "id": "unit-3-quiz-5",
    "type": "fill_blank",
    "prompt": "Fill in the operator so this is True only if BOTH are True: a ___ b",
    "answer": "and",
    "explanation": "`and` is True only when both sides are True."
  },
  {
    "id": "unit-3-quiz-6",
    "type": "mcq",
    "prompt": "What does not True evaluate to?",
    "options": ["True", "False", "None", "Error"],
    "answer": "False",
    "explanation": "`not` flips True to False."
  }
]
```
