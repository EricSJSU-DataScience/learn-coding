---
id: if-1
title: Even or odd
---

## Description

Given `number = 7`, print `"Even"` if it's even, otherwise print `"Odd"`.

## Starter

```python
number = 7

# Print "Even" if number is even, otherwise print "Odd"
```

## Hint

Use number % 2 == 0 to check if a number is even.

## Check

```python
out = _stdout.strip()
if out == "Odd":
    result = "PASS"
else:
    result = f"Expected 'Odd' but got '{out}'"
```
