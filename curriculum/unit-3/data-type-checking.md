---
id: data-type-checking
title: Data Type Checking
blurb: type() and isinstance() — checking what kind of data you have.
---

## Concept

Before doing math or combining values, it's often useful to check what type you're working with. `isinstance(value, type)` returns `True` or `False`.

## Example

```python
score = 92
print(isinstance(score, int))
print(type(score) == int)
```

## Notes

- `isinstance(value, type)` returns `True` or `False`.
- `type(value) == sometype` also works, but `isinstance()` is usually preferred.
- Checking types before doing math helps catch bugs early.

## Exercise: data-type-checking-1
title: Chess Tournament

Given `rating = "1450"` (a chess player's rating, stored as text), check whether `rating` is a string, and print `True` or `False`.

### Starter

```python
rating = "1450"

# Check whether rating is a string, and print True or False
```

### Hint

`print(isinstance(rating, str))`

### Check

```python
out = _stdout.strip()
if out == "True":
    result = "PASS"
else:
    result = f"Expected True but got '{out}'"
```
