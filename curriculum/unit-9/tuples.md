---
id: tuples
title: Tuples
blurb: An ordered, immutable collection written with ().
---

## Concept

A **tuple** is like a list, but **immutable** — once created, you can't change, add, or remove items. Tuples are written with parentheses instead of square brackets.

## Example

```python
point = (3, 4)
print(point[0], point[1])
```

## Notes

- Tuples use `()` instead of `[]`.
- Once created, a tuple can't be changed — great for values that shouldn't be modified, like coordinates.
- You can still index into a tuple just like a list.

## Exercise: tuples-1
title: Coordinates

Given `point = (5, 9)`, print the x-coordinate (index 0) and y-coordinate (index 1) together.

### Starter

```python
point = (5, 9)

# Print the x and y coordinates
```

### Hint

`print(point[0], point[1])`

### Check

```python
out = _stdout.strip()
if out == "5 9":
    result = "PASS"
else:
    result = f"Expected '5 9' but got '{out}'"
```
