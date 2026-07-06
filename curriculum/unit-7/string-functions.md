---
id: string-functions
title: String Functions
blurb: Built-in string methods like .strip(), .lower(), and .replace().
---

## Concept

Strings come with handy built-in methods for common cleanup tasks: `.strip()` removes leading/trailing whitespace, `.lower()`/`.upper()` change case, and `.replace(a, b)` swaps text.

## Example

```python
raw = "  Hello World  "
print(raw.strip().lower())
```

## Notes

- `.strip()` removes whitespace from both ends of a string.
- `.lower()` / `.upper()` change case; `.replace(a, b)` swaps occurrences of `a` with `b`.
- You can chain methods together, like `raw.strip().lower()`.

## Exercise: string-functions-1
title: Survey Data Format

Given `raw_response = "  YES  "`, clean it up (remove extra whitespace, make it lowercase) and print the result.

### Starter

```python
raw_response = "  YES  "

# Clean up raw_response: remove extra whitespace and make it lowercase
```

### Hint

`print(raw_response.strip().lower())`

### Check

```python
out = _stdout.strip()
if out == "yes":
    result = "PASS"
else:
    result = f"Expected 'yes' but got '{out}'"
```
