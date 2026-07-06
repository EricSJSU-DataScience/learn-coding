---
id: applying-best-practices
title: Applying Best Practices
blurb: Clear names and comments, applied to a real calculation.
---

## Concept

Let's apply what we just learned: descriptive variable names, a short comment explaining intent, and a clean calculation. Good style doesn't slow you down — it makes code faster to write correctly and easier to fix later.

## Example

```python
# Calculate this week's pay
hours_worked = 20
hourly_rate = 15.5
pay = hours_worked * hourly_rate
print(pay)
```

## Notes

- Add a short comment above tricky lines to explain the "why," not just the "what."
- Clear variable names plus a comment or two make code easy to pick back up weeks later.

## Exercise: applying-best-practices-1
title: It's Payday!

Given `hours_worked = 20` and `hourly_rate = 15.5`, compute the pay and print it.

### Starter

```python
hours_worked = 20
hourly_rate = 15.5

# Compute the pay and print it
```

### Hint

`pay = hours_worked * hourly_rate`, then `print(pay)`

### Check

```python
out = _stdout.strip()
if out == "310.0":
    result = "PASS"
else:
    result = f"Expected 310.0 but got '{out}'"
```
