---
id: combining-comparison-and-logical-operations
title: Combining Comparison and Logical Operations
blurb: Chaining multiple comparisons together for real-world checks.
---

## Concept

Real decisions often need more than one condition. You can chain multiple comparisons together with `and` / `or`, and use parentheses to make complex conditions easier to read.

## Example

```python
temp = 75
is_raining = False
print(temp > 60 and not is_raining)
```

## Notes

- You can chain multiple comparisons together with `and` / `or`.
- Parentheses can make complex conditions easier to read, even when they're not strictly required.

## Exercise: combining-1
title: Fitness Goals!

Given `steps = 8500` and `minutes_active = 45`, print `True` if the person walked at least 8000 steps **and** was active at least 30 minutes.

### Starter

```python
steps = 8500
minutes_active = 45

# Print True if steps >= 8000 and minutes_active >= 30
```

### Hint

`print(steps >= 8000 and minutes_active >= 30)`

### Check

```python
out = _stdout.strip()
if out == "True":
    result = "PASS"
else:
    result = f"Expected True but got '{out}'"
```
