---
id: logical-operations
title: Logical Operations
blurb: and, or, not — combining boolean conditions.
---

## Concept

Logical operators combine `True`/`False` values: `and` (both must be True), `or` (at least one must be True), and `not` (flips True/False).

## Example

```python
age = 15
has_ticket = True
print(age >= 13 and has_ticket)
```

## Notes

- `and`: `True` only if both sides are `True`.
- `or`: `True` if at least one side is `True`.
- `not`: flips `True` to `False` and vice versa.

## Exercise: logical-operations-1
title: Movie Night

Given `age = 15` and `has_ticket = True`, print whether this person can watch a PG-13 movie (must be at least 13 **and** have a ticket).

### Starter

```python
age = 15
has_ticket = True

# Print True if age >= 13 and has_ticket is True
```

### Hint

`print(age >= 13 and has_ticket)`

### Check

```python
out = _stdout.strip()
if out == "True":
    result = "PASS"
else:
    result = f"Expected True but got '{out}'"
```
