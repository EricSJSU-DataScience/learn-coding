---
id: input
title: Input & Type Conversion
blurb: input(), int(), float().
exercises:
  - input-1
---

## Concept

`input()` pauses the program and waits for the user to type something, then returns it — always as a **string**, even if they typed a number.

To use that text as a number, convert it with `int()` or `float()`.

**Good to know:** on this site, exercises that use `input()` can't wait for a real person to type — instead we pre-fill the answer for you behind the scenes, so the checker can test your code automatically.

## Example

```python
name = input("What is your name? ")
print("Hi " + name + "!")
```

## Notes

- `input()` always returns a string.
- `int(input())` converts the typed text straight into a whole number.
- You can join strings with `+`, as long as both sides are strings.
