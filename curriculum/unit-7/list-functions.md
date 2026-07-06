---
id: list-functions
title: List Functions
blurb: Built-in list methods like .pop(), .sort(), and .remove().
---

## Concept

Lists have useful built-in methods too. `.pop(index)` removes and returns an item (the last one by default), `.sort()` sorts the list in place, and `.remove(x)` removes the first matching value.

## Example

```python
queue = ["Ana", "Ben", "Cy"]
queue.pop(0)
print(queue)
```

## Notes

- `.pop(index)` removes and returns the item at that index (last item if no index given).
- `.sort()` sorts a list in place — it changes the original list.
- `.remove(x)` removes the first item that equals `x`.

## Exercise: list-functions-1
title: Queue Management

Given `queue = ["Ana", "Ben", "Cy", "Dee"]`, remove the first person in line (index 0) since they've been served, then print the remaining queue.

### Starter

```python
queue = ["Ana", "Ben", "Cy", "Dee"]

# Remove the first person (index 0), then print the queue
```

### Hint

`queue.pop(0)`, then `print(queue)`

### Check

```python
out = _stdout.strip()
if out == "['Ben', 'Cy', 'Dee']":
    result = "PASS"
else:
    result = f"Expected ['Ben', 'Cy', 'Dee'] but got '{out}'"
```
