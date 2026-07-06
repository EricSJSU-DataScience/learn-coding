---
id: functions-and-booleans
title: Functions and Booleans
blurb: Writing a function that returns True or False.
---

## Concept

A function can return a `bool` — useful for yes/no checks. These are often named starting with `is_` or `has_`, which makes their purpose obvious at a glance.

## Example

```python
def is_even(n):
    return n % 2 == 0

print(is_even(4))
```

## Notes

- Naming a boolean function `is_x` or `has_x` makes its purpose clear.
- You can use the function's result directly inside an `if` statement.

## Exercise: functions-and-booleans-1
title: Password Checker

Write a function `is_strong(password)` that returns `True` if `len(password) >= 8`, otherwise `False`. Then print `is_strong("dragonfire")`.

### Starter

```python
def is_strong(password):
    # return True if the password is at least 8 characters long
    pass

print(is_strong("dragonfire"))
```

### Hint

`return len(password) >= 8`

### Check

```python
out = _stdout.strip()
try:
    ok = is_strong("cat") == False
except Exception:
    ok = False
if out != "True":
    result = f"Expected print(is_strong('dragonfire')) to show True, got '{out}'"
elif not ok:
    result = "is_strong() doesn't look right for short passwords — make sure it checks len(password) >= 8."
else:
    result = "PASS"
```
