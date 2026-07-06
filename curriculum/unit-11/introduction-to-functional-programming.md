---
id: introduction-to-functional-programming
title: Introduction to Functional Programming
blurb: Functions as values you can store, pass around, and combine.
---

## Concept

Functional programming treats functions as **values** — you can assign a function to a variable, pass it into another function, or store it in a list, just like a number or string.

## Example

```python
def shout(text):
    return text.upper() + "!"

my_func = shout
print(my_func("hello"))
```

## Notes

- Functions are values in Python — assign them to variables, pass them around, even return them from other functions.
- Notice: `my_func = shout` (no parentheses) — that stores the function itself, not the result of calling it.

## Exercise: introduction-to-functional-programming-1
title: Pick a Function

Given `def loud(text): return text.upper()`, `def quiet(text): return text.lower()`, and `chosen = loud`, call `chosen("Hello")` and print the result.

### Starter

```python
def loud(text):
    return text.upper()

def quiet(text):
    return text.lower()

chosen = loud

# Call chosen("Hello") and print the result
```

### Hint

`print(chosen("Hello"))`

### Check

```python
out = _stdout.strip()
if out == "HELLO":
    result = "PASS"
else:
    result = f"Expected 'HELLO' but got '{out}'"
```
