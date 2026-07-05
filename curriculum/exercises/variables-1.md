---
id: variables-1
title: Build a mini profile
---

## Description

Create three variables: `name` (a string), `age` (an int), and `favorite_number` (an int or float). Then print all three with one `print()` call, in that order.

## Starter

```python
name = "Type your name"
age = 0
favorite_number = 0

print(name, age, favorite_number)
```

## Hint

Change the values, keep the types (name is text in quotes, age and favorite_number are numbers with no quotes), and make sure print(name, age, favorite_number) is the last line.

## Check

```python
out = _stdout.strip()
try:
    ok_types = isinstance(name, str) and len(name.strip()) > 0 and isinstance(age, int) and isinstance(favorite_number, (int, float))
except NameError:
    ok_types = False
if not ok_types:
    result = "Make sure you defined name (a string), age (an int), and favorite_number (int or float)."
elif name.strip() == "Type your name":
    result = "Replace the placeholder text with your own name."
elif not out:
    result = "Nothing was printed — add print(name, age, favorite_number)."
else:
    result = "PASS"
```
