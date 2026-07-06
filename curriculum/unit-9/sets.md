---
id: sets
title: Sets
blurb: An unordered collection of unique values, written with {}.
---

## Concept

A **set** stores unique values — duplicates are automatically removed. Sets are written with curly braces, and unlike lists, they're unordered.

## Example

```python
tags = {"python", "code", "python"}
print(tags)
```

## Notes

- Sets automatically remove duplicates.
- Sets are unordered — don't rely on the order items appear in.
- Use `.add(x)` to add an item to a set.

## Exercise: sets-1
title: Unique Visitors

Given `visitors = ["Ana", "Ben", "Ana", "Cy", "Ben"]`, convert it to a set to get only the unique visitors, then print how many unique visitors there are.

### Starter

```python
visitors = ["Ana", "Ben", "Ana", "Cy", "Ben"]

# Convert to a set, then print the number of unique visitors
```

### Hint

`unique = set(visitors)`, then `print(len(unique))`

### Check

```python
out = _stdout.strip()
if out == "3":
    result = "PASS"
else:
    result = f"Expected 3 but got '{out}'"
```
