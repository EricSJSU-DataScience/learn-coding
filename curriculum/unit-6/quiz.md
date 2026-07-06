---
id: unit-6-quiz
title: Module 6 Quiz
blurb: Test what you learned about iterating over lists, nesting loops, and break/continue.
---

```json
[
  {
    "id": "unit-6-quiz-1",
    "type": "mcq",
    "prompt": "In `for name in names:`, what does name represent?",
    "options": ["Each item in the list, one at a time", "The list's length", "The list's index", "Nothing, it's just a placeholder"],
    "answer": "Each item in the list, one at a time",
    "explanation": "for item in list gives you each item directly, in order."
  },
  {
    "id": "unit-6-quiz-2",
    "type": "mcq",
    "prompt": "What finishes completely before the outer loop moves to its next step?",
    "options": ["The inner loop", "The if statement", "The print() call", "Nothing"],
    "answer": "The inner loop",
    "explanation": "In a nested loop, the inner loop runs to completion for each pass of the outer loop."
  },
  {
    "id": "unit-6-quiz-3",
    "type": "fill_blank",
    "prompt": "Fill in the keyword that exits a loop immediately: ___",
    "answer": "break",
    "explanation": "break stops the loop right away, skipping any remaining iterations."
  },
  {
    "id": "unit-6-quiz-4",
    "type": "mcq",
    "prompt": "What does continue do?",
    "options": ["Skips the rest of the current iteration and moves on", "Stops the loop completely", "Restarts the whole program", "Does nothing"],
    "answer": "Skips the rest of the current iteration and moves on",
    "explanation": "continue jumps straight to the next iteration of the loop."
  },
  {
    "id": "unit-6-quiz-5",
    "type": "mcq",
    "prompt": "A counter variable inside a loop is typically updated with which pattern?",
    "options": ["counter += 1", "counter == 1", "counter -> 1", "counter << 1"],
    "answer": "counter += 1",
    "explanation": "+= 1 increments the counter by one each time the condition is met."
  },
  {
    "id": "unit-6-quiz-6",
    "type": "mcq",
    "prompt": "Which combination lets you act only on list items matching a condition?",
    "options": ["A for loop with an if inside it", "Two separate lists", "A while loop only", "print() alone"],
    "answer": "A for loop with an if inside it",
    "explanation": "Nesting an if inside a for loop lets you filter or count matching items."
  }
]
```
