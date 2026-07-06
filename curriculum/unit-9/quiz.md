---
id: unit-9-quiz
title: Module 9 Quiz
blurb: Test what you learned about tuples, sets, dictionaries, and list comprehensions.
---

```json
[
  {
    "id": "unit-9-quiz-1",
    "type": "mcq",
    "prompt": "Which collection type cannot be changed after it's created?",
    "options": ["list", "tuple", "set", "dict"],
    "answer": "tuple",
    "explanation": "Tuples are immutable — once created, their contents can't change."
  },
  {
    "id": "unit-9-quiz-2",
    "type": "mcq",
    "prompt": "What happens to duplicate values when you put them in a set?",
    "options": ["They're automatically removed", "They're kept in order", "They cause an error", "They're doubled"],
    "answer": "They're automatically removed",
    "explanation": "Sets only store unique values."
  },
  {
    "id": "unit-9-quiz-3",
    "type": "fill_blank",
    "prompt": "Fill in the dict method that returns key-value pairs together for looping: my_dict.___()",
    "answer": "items",
    "explanation": "my_dict.items() gives you (key, value) pairs to loop over together."
  },
  {
    "id": "unit-9-quiz-4",
    "type": "mcq",
    "prompt": "What syntax builds a tuple?",
    "options": ["Parentheses ()", "Square brackets []", "Curly braces {}", "Angle brackets <>"],
    "answer": "Parentheses ()",
    "explanation": "Tuples are written with parentheses, like (1, 2, 3)."
  },
  {
    "id": "unit-9-quiz-5",
    "type": "mcq",
    "prompt": "What does [n * 2 for n in numbers] do?",
    "options": ["Builds a new list with each number doubled", "Doubles the original list variable", "Only works on tuples", "Removes odd numbers"],
    "answer": "Builds a new list with each number doubled",
    "explanation": "This is a list comprehension — it builds a brand new list."
  },
  {
    "id": "unit-9-quiz-6",
    "type": "mcq",
    "prompt": "x, y = (3, 4) is an example of what?",
    "options": ["Tuple unpacking", "List slicing", "Dictionary lookup", "Set operations"],
    "answer": "Tuple unpacking",
    "explanation": "Unpacking assigns each tuple item to its own variable in one line."
  }
]
```
