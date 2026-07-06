---
id: args-and-kwargs
title: args and kwargs
blurb: Accepting any number of positional or keyword arguments.
---

## Concept

`*args` lets a function accept any number of positional arguments, collected into a tuple. `**kwargs` does the same for keyword arguments, collected into a dictionary.

## Example

```python
def total(*args):
    return sum(args)

print(total(1, 2, 3, 4))
```

## Notes

- `*args` collects extra positional arguments into a tuple.
- `**kwargs` collects extra keyword arguments into a dict.

## Exercise: args-and-kwargs-1
title: Flexible Total

Write a function `total(*args)` that returns the sum of all arguments passed in. Print `total(4, 8, 15, 16, 23, 42)`.

### Starter

```python
def total(*args):
    # return the sum of all the args
    pass

print(total(4, 8, 15, 16, 23, 42))
```

### Hint

`return sum(args)`

### Check

```python
out = _stdout.strip()
try:
    ok = total(1, 2) == 3
except Exception:
    ok = False
if out != "108":
    result = f"Expected print(total(4, 8, 15, 16, 23, 42)) to show 108, got '{out}'"
elif not ok:
    result = "total() doesn't look right for other numbers of arguments — make sure it returns sum(args)."
else:
    result = "PASS"
```
