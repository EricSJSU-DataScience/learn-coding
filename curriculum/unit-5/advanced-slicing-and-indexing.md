---
id: advanced-slicing-and-indexing
title: Advanced Slicing and Indexing
blurb: The step parameter, and reversing a list with [::-1].
---

## Concept

Slices can take a third number, the **step**: `list[start:end:step]`. `list[::2]` takes every other item, and `list[::-1]` reverses the whole list.

## Example

```python
numbers = [10, 20, 30, 40, 50, 60]
print(numbers[::2])
print(numbers[::-1])
```

## Notes

- The third slice number is the step — `list[::2]` takes every other item.
- `list[::-1]` reverses the whole list.

## Exercise: advanced-slicing-1
title: Step Counter

Given `numbers = [1, 2, 3, 4, 5, 6, 7, 8]`, print every other number, starting from the first.

### Starter

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8]

# Print every other number, starting from the first
```

### Hint

`print(numbers[::2])`

### Check

```python
out = _stdout.strip()
if out == "[1, 3, 5, 7]":
    result = "PASS"
else:
    result = f"Expected [1, 3, 5, 7] but got '{out}'"
```
