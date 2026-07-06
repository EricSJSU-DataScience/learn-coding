---
id: decorators
title: Decorators
blurb: Wrapping a function to add extra behavior with @decorator syntax.
---

## Concept

A **decorator** wraps a function to add extra behavior without changing its code, using `@decorator_name` right above the function definition.

## Example

```python
def shout_result(func):
    def wrapper(*args):
        return func(*args).upper()
    return wrapper

@shout_result
def greet(name):
    return f"hello, {name}"

print(greet("ada"))
```

## Notes

- `@decorator_name` goes directly above the function you're decorating.
- Decorators are a common pattern for adding logging, timing, or formatting without repeating code.

## Exercise: decorators-1
title: Shout It

The decorator `shout_result` is provided below. Apply it to the function `greet(name)` (which returns `f"hello, {name}"`) using `@shout_result`, then print `greet("ada")`.

### Starter

```python
def shout_result(func):
    def wrapper(*args):
        return func(*args).upper()
    return wrapper

# Apply @shout_result to the function below
def greet(name):
    return f"hello, {name}"

print(greet("ada"))
```

### Hint

Put `@shout_result` on the line directly above `def greet(name):`

### Check

```python
out = _stdout.strip()
if out == "HELLO, ADA":
    result = "PASS"
else:
    result = f"Expected 'HELLO, ADA' but got '{out}'"
```
