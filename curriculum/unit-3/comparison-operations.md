---
id: comparison-operations
title: Comparison Operations
blurb: == != > < >= <= — comparisons always give True or False.
---

## Concept

Comparison operators (`== != > < >= <=`) compare two values and always produce `True` or `False`.

## Example

```python
xp = 120
level_up_at = 100
print(xp >= level_up_at)
```

## Notes

- Comparisons always produce `True` or `False` (a `bool`).
- Don't confuse `==` (compare) with `=` (assign).
- You can compare numbers, and also strings (alphabetical order).

## Exercise: comparison-operations-1
title: Level Up!

Given `xp = 150` and `level_up_at = 100`, print whether the player has enough xp to level up (`True`/`False`).

### Starter

```python
xp = 150
level_up_at = 100

# Print whether xp is enough to level up
```

### Hint

`print(xp >= level_up_at)`

### Check

```python
out = _stdout.strip()
if out == "True":
    result = "PASS"
else:
    result = f"Expected True but got '{out}'"
```
