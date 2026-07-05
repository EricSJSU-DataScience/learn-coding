---
id: if
title: Making Decisions with if
blurb: if / elif / else, comparisons.
exercises:
  - if-1
---

## Concept

`if` lets your program choose what to do based on a condition. Conditions use comparisons like `== != < > <= >=`, which give back `True` or `False`.

You can chain more checks with `elif` ("else if"), and catch everything else with `else`.

**Indentation matters** — the lines inside an `if` block must be indented consistently.

## Example

```python
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")
```

## Notes

- `==` checks equality; `=` assigns a value. Don't mix them up!
- Only one branch of an if/elif/else ever runs.
- Indent with 4 spaces inside each block.
