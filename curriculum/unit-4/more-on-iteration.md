---
id: more-on-iteration
title: More on Iteration
blurb: The accumulator pattern — building up a value across loop iterations.
---

## Concept

An **accumulator** variable carries a running result from one loop iteration to the next — you update it with `=` inside the loop body. This pattern shows up everywhere: totals, counts, and growth over time.

## Example

```python
cells = 1
for day in range(3):
    cells = cells * 2
print(cells)
```

## Notes

- An accumulator variable carries a running result across iterations.
- Update it using `=` inside the loop body, based on its own previous value.

## Exercise: more-on-iteration-1
title: Cell Growth

Starting with `cells = 1`, double it once per day for 4 days (using a loop), then print the final count.

### Starter

```python
cells = 1

# Double cells once per day, for 4 days, then print cells
```

### Hint

`for day in range(4): cells = cells * 2`

### Check

```python
out = _stdout.strip()
if out == "16":
    result = "PASS"
else:
    result = f"Expected 16 but got '{out}'"
```
