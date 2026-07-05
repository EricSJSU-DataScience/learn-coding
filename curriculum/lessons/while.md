---
id: while
title: Loops Part 2
blurb: while, break, continue.
exercises:
  - while-1
---

## Concept

A `while` loop repeats as long as a condition stays `True`. You control when it stops — usually by changing a variable inside the loop.

`break` exits the loop immediately. `continue` skips to the next round without running the rest of the loop body.

## Example

```python
n = 0
while n < 5:
    print(n)
    n += 1
```

## Notes

- Forgetting to update the variable causes an infinite loop!
- `n += 1` is shorthand for `n = n + 1`.
- Use `break` to stop early, `continue` to skip ahead.
