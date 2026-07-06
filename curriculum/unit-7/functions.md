---
id: functions
title: Functions
blurb: def, parameters, and return — reusable blocks of code.
---

## Concept

A **function** is a reusable block of code. Define one with `def name(parameters):`. Use `return` to send a value back to whoever called the function. Defining a function doesn't run it — you still need to *call* it.

## Example

```python
def add(a, b):
    return a + b

print(add(2, 3))
```

## Notes

- Parameters are the names inside the parentheses; arguments are the actual values you pass in.
- A function without `return` gives back `None`.
- You can call a function as many times as you like.

## Exercise: functions-1
title: Double It

Write a function `double(x)` that returns `x` doubled. Then print `double(21)`.

### Starter

```python
def double(x):
    # return x doubled
    pass

print(double(21))
```

### Hint

Inside the function: `return x * 2`

### Check

```python
out = _stdout.strip()
try:
    ok = double(10) == 20 and double(0) == 0 and double(-3) == -6
except Exception:
    ok = False
if out != "42":
    result = f"Expected print(double(21)) to show 42, got '{out}'"
elif not ok:
    result = "double() doesn't look right for other numbers — make sure it always returns x * 2."
else:
    result = "PASS"
```
