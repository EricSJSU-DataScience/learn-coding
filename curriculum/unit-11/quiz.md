---
id: unit-11-quiz
title: Module 11 Quiz
blurb: Test what you learned about functional programming, lambda, map/filter, and decorators.
---

```json
[
  {
    "id": "unit-11-quiz-1",
    "type": "mcq",
    "prompt": "In Python, functions are...",
    "options": ["Values you can assign to variables and pass around", "Only usable inside a class", "Always named 'func'", "Not able to be passed as arguments"],
    "answer": "Values you can assign to variables and pass around",
    "explanation": "Functions are values, just like numbers or strings — you can store and pass them."
  },
  {
    "id": "unit-11-quiz-2",
    "type": "fill_blank",
    "prompt": "Fill in the keyword that creates a small unnamed function: ___ x: x * 2",
    "answer": "lambda",
    "explanation": "lambda creates a small, unnamed function in one line."
  },
  {
    "id": "unit-11-quiz-3",
    "type": "mcq",
    "prompt": "What does map(func, list) do?",
    "options": ["Applies func to every item in list", "Keeps only items where func is True", "Sorts the list", "Removes duplicates"],
    "answer": "Applies func to every item in list",
    "explanation": "map() transforms every item using func."
  },
  {
    "id": "unit-11-quiz-4",
    "type": "mcq",
    "prompt": "What does *args collect?",
    "options": ["Extra positional arguments into a tuple", "Extra keyword arguments into a dict", "Nothing, it's just decoration", "Only the first argument"],
    "answer": "Extra positional arguments into a tuple",
    "explanation": "*args gathers any extra positional arguments into a tuple."
  },
  {
    "id": "unit-11-quiz-5",
    "type": "mcq",
    "prompt": "What symbol goes right above a function to apply a decorator?",
    "options": ["@", "#", "$", "&"],
    "answer": "@",
    "explanation": "@decorator_name goes directly above the function definition."
  },
  {
    "id": "unit-11-quiz-6",
    "type": "mcq",
    "prompt": "filter(func, list) keeps which items?",
    "options": ["Only items where func returns True", "Only items where func returns False", "All items, unchanged", "Only the first item"],
    "answer": "Only items where func returns True",
    "explanation": "filter() keeps only the items where the function evaluates to True."
  }
]
```
