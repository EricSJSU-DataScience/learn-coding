---
id: list-comprehensions
title: List Comprehensions
blurb: A compact way to build a new list from an existing one.
---

## Concept

A **list comprehension** is a compact way to build a new list from an existing one, optionally filtering with a condition: `[expression for item in list if condition]`.

## Example

```python
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print(doubled)
```

## Notes

- `[expression for item in list]` builds a new list.
- Add `if condition` at the end to filter which items are included.

## Exercise: list-comprehensions-1
title: Filtering Long Words

Given `words = ["cat", "elephant", "dog", "hippopotamus", "ox"]`, use a list comprehension to build a list of only the words with more than 4 letters, then print it.

### Starter

```python
words = ["cat", "elephant", "dog", "hippopotamus", "ox"]

# Use a list comprehension to keep only words longer than 4 letters
```

### Hint

`long_words = [w for w in words if len(w) > 4]`, then `print(long_words)`

### Check

```python
out = _stdout.strip()
if out == "['elephant', 'hippopotamus']":
    result = "PASS"
else:
    result = f"Expected ['elephant', 'hippopotamus'] but got '{out}'"
```
