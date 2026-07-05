---
id: functions
title: Functions
blurb: def, parameters, return.
exercises:
  - functions-1
---

## Concept

A **function** is a reusable block of code. Define one with `def name(parameters):`. Use `return` to send a value back to whoever called the function.

Defining a function doesn't run it — you still need to *call* it, like `add(2, 3)`.

## Example

```python
def add(a, b):
    return a + b

print(add(2, 3))
```

## Notes

- Parameters are the names inside the parentheses; arguments are the actual values you pass in.
- A function without `return` gives back `None`.
- You can call a function as many times as you like.
