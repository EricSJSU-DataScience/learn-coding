---
id: useful-built-in-functions
title: Useful Built-in Functions
blurb: sum(), max(), min(), sorted(), and len() — recap and combine.
---

## Concept

Python has many useful built-in functions you don't need to write yourself: `sum()`, `max()`, `min()`, `sorted()`, and `len()` all work directly on lists.

## Example

```python
scores = [88, 92, 79, 95]
print(sum(scores), max(scores), min(scores), sorted(scores))
```

## Notes

- `sum()` / `max()` / `min()` work directly on lists of numbers.
- `sorted()` returns a **new** sorted list — it doesn't change the original.
- `len()` counts how many items are in a list.

## Exercise: useful-built-in-functions-1
title: Class Statistics

Given `scores = [88, 92, 79, 95, 70]`, print the highest score.

### Starter

```python
scores = [88, 92, 79, 95, 70]

# Print the highest score
```

### Hint

`print(max(scores))`

### Check

```python
out = _stdout.strip()
if out == "95":
    result = "PASS"
else:
    result = f"Expected 95 but got '{out}'"
```
