---
id: using-indexing
title: Using Indexing
blurb: Applying indexing to pull out and use one specific item.
---

## Concept

Indexing is most useful when you combine it with the rest of what you know — grabbing a specific item and using it in a message or calculation.

## Example

```python
steps = ["mix", "pour", "flip", "serve"]
print("Step 1:", steps[0])
```

## Notes

- Combine indexing with `print()` to describe a specific item.
- Remember: the first item is index `0`, not `1`.

## Exercise: using-indexing-1
title: Pancakes

Given `steps = ["mix batter", "heat pan", "pour batter", "flip", "serve"]`, print the step at index 2.

### Starter

```python
steps = ["mix batter", "heat pan", "pour batter", "flip", "serve"]

# Print the step at index 2
```

### Hint

`print(steps[2])`

### Check

```python
out = _stdout.strip()
if out == "pour batter":
    result = "PASS"
else:
    result = f"Expected 'pour batter' but got '{out}'"
```
