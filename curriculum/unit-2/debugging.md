---
id: debugging
title: Debugging
blurb: Common error types and how to read a traceback.
---

## Concept

Every programmer writes bugs — the skill is learning to read Python's error messages (called **tracebacks**) and figure out what went wrong. A few common ones:

- **SyntaxError** — Python couldn't understand your code's structure, often a missing colon, quote, or parenthesis.
- **NameError** — you used a variable that was never created, often a typo.
- **TypeError** — you mixed incompatible types, like adding a string and a number.

A traceback always ends with the error type and a short message — read that last line first.

## Example

```python
age = 13
print("DEBUG: age is", age)   # a print() statement used to check what's happening
```

## Notes

- Reading the last line of a traceback tells you what kind of error happened, and usually why.
- A stray `print()` showing a variable's value is one of the simplest, most useful debugging tools.
- Typos in variable names are one of the most common bugs — check spelling carefully.

## Exercise: debugging-1
title: And the Winner is …

This code has a bug — a typo in a variable name causes a `NameError`. `contestant1` (score 92) beats `contestant2` (score 88), so it should print the winner's name. Find and fix the typo.

### Starter

```python
contestant1 = "Maya"
contestant2 = "Leo"
score1 = 92
score2 = 88

if score1 > score2:
    print(contestent1)
else:
    print(contestant2)
```

### Hint

Look closely at the variable name inside the `if` block — is `contestent1` spelled the same as `contestant1` up above?

### Check

```python
out = _stdout.strip()
if out == "Maya":
    result = "PASS"
else:
    result = f"Expected 'Maya' but got '{out}'"
```
