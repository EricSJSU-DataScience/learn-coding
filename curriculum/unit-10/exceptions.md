---
id: exceptions
title: Exceptions
blurb: What an exception is, and common types you'll run into.
---

## Concept

An **exception** is Python's way of signaling something went wrong *while the program is running* (not just a typo Python catches before running). Common ones include `ValueError`, `KeyError`, `ZeroDivisionError`, and `IndexError`.

## Example

```python
scores = {"Ana": 90}
print(scores["Ben"])   # raises KeyError — Ben isn't in the dictionary
```

## Notes

- Exceptions happen while the program runs, not just when Python first reads your code.
- `.get(key)` is a safe alternative to `dict[key]` — it returns `None` instead of raising `KeyError` if the key is missing.

## Exercise: exceptions-1
title: Predict the Error

Given `prices = {"apple": 1.5, "banana": 0.5}`, print the price of `"cherry"` using `.get()` so it doesn't crash if the item isn't found.

### Starter

```python
prices = {"apple": 1.5, "banana": 0.5}

# Print the price of "cherry" using .get() so it doesn't crash
```

### Hint

`print(prices.get("cherry"))`

### Check

```python
out = _stdout.strip()
if out == "None":
    result = "PASS"
else:
    result = f"Expected None but got '{out}'"
```
