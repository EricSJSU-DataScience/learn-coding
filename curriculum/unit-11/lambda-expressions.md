---
id: lambda-expressions
title: Lambda Expressions
blurb: lambda — a small, unnamed function in one line.
---

## Concept

`lambda arg: expression` creates a small, unnamed function in a single line — no `def` and no name required. They're best for small, throwaway functions.

## Example

```python
square = lambda x: x * x
print(square(5))
```

## Notes

- `lambda arg: expression` creates a function without `def` or a name.
- Best for small, one-line functions — often used with `map`, `filter`, and `sorted`.

## Exercise: lambda-expressions-1
title: Quick Doubler

Create a lambda called `double` that returns its input times 2, then print `double(9)`.

### Starter

```python
# Create a lambda called double that doubles its input

print(double(9))
```

### Hint

`double = lambda x: x * 2`

### Check

```python
out = _stdout.strip()
if out == "18":
    result = "PASS"
else:
    result = f"Expected 18 but got '{out}'"
```
