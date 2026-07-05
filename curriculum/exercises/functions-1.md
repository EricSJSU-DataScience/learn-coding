---
id: functions-1
title: Double it
---

## Description

Write a function `double(x)` that returns `x` doubled. Then print `double(21)`.

## Starter

```python
def double(x):
    # return x doubled
    pass

print(double(21))
```

## Hint

Inside the function: return x * 2

## Check

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
