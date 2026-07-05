---
id: for
title: Loops Part 1
blurb: for and range().
exercises:
  - for-1
---

## Concept

A `for` loop repeats a block of code once for each item in a sequence. `range(n)` generates the numbers `0, 1, 2, ... n-1` — perfect for "do this n times."

## Example

```python
for i in range(3):
    print("Lap", i)
```

## Notes

- `range(5)` gives 0, 1, 2, 3, 4 (five numbers, starting at 0).
- `range(1, 6)` gives 1 through 5.
- The loop variable (like `i`) changes every time through the loop.
