---
id: memory-variables
title: Memory & Variables
blurb: Variables, the = sign, and naming rules.
---

## Concept

A **variable** is a name that stores a value in the computer's memory, created with `=`. Think of it like a labeled box you can put something into and open again later.

Variable names have a few rules: they can use letters, numbers, and underscores, but they **can't start with a number**, and they're **case-sensitive** (`age` and `Age` are two different variables).

## Example

```python
name = "Ada"
age = 13
print(name, age)
```

## Notes

- `=` means "store this value," not "equals" like in math class.
- Pick clear, descriptive names — `age` is better than `a`.
- `print(a, b)` prints both values, separated by a space.

## Exercise: memory-variables-1
title: Build a mini profile

Create two variables: `name` (a string with your own name) and `age` (an int). Then print both with one `print()` call, in that order.

### Starter

```python
name = "Type your name"
age = 0

print(name, age)
```

### Hint

Replace the placeholder text with your own name, keep age as a plain number (no quotes), and make sure `print(name, age)` is the last line.

### Check

```python
out = _stdout.strip()
try:
    ok_types = isinstance(name, str) and len(name.strip()) > 0 and isinstance(age, int)
except NameError:
    ok_types = False
if not ok_types:
    result = "Make sure you defined name (a string) and age (an int)."
elif name.strip() == "Type your name":
    result = "Replace the placeholder text with your own name."
elif not out:
    result = "Nothing was printed — add print(name, age)."
else:
    result = "PASS"
```
