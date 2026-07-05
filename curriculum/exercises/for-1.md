---
id: for-1
title: Count to five
---

## Description

Use a `for` loop with `range()` to print the numbers 1 through 5, each on its own line.

## Starter

```python
# Use a for loop with range() to print 1 through 5
```

## Hint

```python
for i in range(1, 6):
    print(i)
```

## Check

```python
out = _stdout.strip()
if out == "1\n2\n3\n4\n5":
    result = "PASS"
else:
    result = f"Expected 1 to 5, each on its own line. Got: {out!r}"
```
