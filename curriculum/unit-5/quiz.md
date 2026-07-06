---
id: unit-5-quiz
title: Module 5 Quiz
blurb: Test what you learned about lists, indexing, and slicing.
---

```json
[
  {
    "id": "unit-5-quiz-1",
    "type": "mcq",
    "prompt": "What index is the first item in a list?",
    "options": ["0", "1", "-1", "It depends"],
    "answer": "0",
    "explanation": "Python list indexing starts at 0."
  },
  {
    "id": "unit-5-quiz-2",
    "type": "mcq",
    "prompt": "What does my_list[-1] give you?",
    "options": ["The first item", "The last item", "An error", "An empty list"],
    "answer": "The last item",
    "explanation": "Negative indices count from the end, so -1 is the last item."
  },
  {
    "id": "unit-5-quiz-3",
    "type": "mcq",
    "prompt": "What does my_list[1:3] include?",
    "options": ["Items at index 1 and 2", "Items at index 1, 2, and 3", "Just item at index 1", "Just item at index 3"],
    "answer": "Items at index 1 and 2",
    "explanation": "Slicing goes up to, but does not include, the end index."
  },
  {
    "id": "unit-5-quiz-4",
    "type": "fill_blank",
    "prompt": "Fill in the method that adds an item to the end of a list: my_list.___(x)",
    "answer": "append",
    "explanation": "my_list.append(x) adds x to the end of the list."
  },
  {
    "id": "unit-5-quiz-5",
    "type": "mcq",
    "prompt": "What does my_list[::-1] do?",
    "options": ["Reverses the list", "Sorts the list", "Empties the list", "Doubles the list"],
    "answer": "Reverses the list",
    "explanation": "A step of -1 walks through the list backwards, reversing it."
  },
  {
    "id": "unit-5-quiz-6",
    "type": "mcq",
    "prompt": "What does len([1,2,3,4]) return?",
    "options": ["3", "4", "5", "Error"],
    "answer": "4",
    "explanation": "len() counts the number of items in the list — there are 4."
  }
]
```
