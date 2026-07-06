---
id: slicing
title: Slicing
blurb: list[start:end] — grabbing a chunk of a list at once.
---

## Concept

**Slicing** grabs a whole chunk of a list at once: `list[start:end]` gets items from `start` up to (but not including) `end`.

## Example

```python
runners = ["Ana", "Ben", "Cy", "Dee", "Emi"]
print(runners[1:3])
```

## Notes

- `list[start:end]` grabs items from `start` up to (not including) `end`.
- The result of a slice is itself a list.

## Exercise: slicing-1
title: Relay Race

Given `runners = ["Ana", "Ben", "Cy", "Dee", "Emi"]`, print just the middle three runners (index 1 through 3).

### Starter

```python
runners = ["Ana", "Ben", "Cy", "Dee", "Emi"]

# Print runners at index 1 through 3 (a slice)
```

### Hint

`print(runners[1:4])`

### Check

```python
out = _stdout.strip()
if out == "['Ben', 'Cy', 'Dee']":
    result = "PASS"
else:
    result = f"Expected ['Ben', 'Cy', 'Dee'] but got '{out}'"
```
