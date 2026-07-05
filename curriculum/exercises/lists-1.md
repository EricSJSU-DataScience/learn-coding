---
id: lists-1
title: Sum the numbers
---

## Description

Given `numbers = [4, 8, 15, 16, 23, 42]`, add them all up and print the total.

## Starter

```python
numbers = [4, 8, 15, 16, 23, 42]

# Add up all the numbers and print the total
```

## Hint

Use total = sum(numbers), or a for loop that adds each number to a running total. Then print(total).

## Check

```python
out = _stdout.strip()
if out == "108":
    result = "PASS"
else:
    result = f"Expected 108 but got '{out}'"
```
