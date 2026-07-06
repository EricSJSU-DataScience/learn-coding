---
id: map-and-filter
title: map and filter
blurb: Applying a function to every item, or keeping only matching items.
---

## Concept

`map(func, list)` applies `func` to every item. `filter(func, list)` keeps only the items where `func` returns `True`. Both return a special object — wrap them in `list()` to see the results.

## Example

```python
numbers = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(doubled, evens)
```

## Notes

- `map()` transforms every item; `filter()` keeps only matching items.
- Both return a special object — wrap with `list(...)` to see the actual list.

## Exercise: map-and-filter-1
title: Survey Data

Given `responses = [3, 5, 1, 4, 2]`, use `filter()` with a lambda to keep only the responses of 3 or higher, then print the result as a list.

### Starter

```python
responses = [3, 5, 1, 4, 2]

# Use filter() to keep only responses of 3 or higher, then print as a list
```

### Hint

`print(list(filter(lambda x: x >= 3, responses)))`

### Check

```python
out = _stdout.strip()
if out == "[3, 5, 4]":
    result = "PASS"
else:
    result = f"Expected [3, 5, 4] but got '{out}'"
```
