---
id: nested-loops
title: Nested Loops
blurb: A loop inside another loop — great for anything grid-shaped.
---

## Concept

A **nested loop** is a loop inside another loop. The inner loop finishes completely before the outer loop moves to its next step — handy for anything grid-shaped, like tables or boards.

## Example

```python
for row in range(2):
    for col in range(3):
        print(f"({row},{col})", end=" ")
    print()
```

## Notes

- The inner loop finishes completely before the outer loop moves to its next step.
- Nested loops are handy for anything grid-shaped (tables, boards, patterns).

## Exercise: nested-loops-1
title: Multiplication Table

Print a small multiplication table for 1 through 3 (a 3x3 grid), one row per line, values separated by a space. For example, the row for 1 should be `1 2 3`.

### Starter

```python
# Print a 3x3 multiplication table, one row per line
```

### Hint

```python
for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end=" ")
    print()
```

### Check

```python
lines = [l.strip() for l in _stdout.strip().splitlines()]
if lines == ["1 2 3", "2 4 6", "3 6 9"]:
    result = "PASS"
else:
    result = f"Expected rows ['1 2 3', '2 4 6', '3 6 9'] but got {lines!r}"
```
