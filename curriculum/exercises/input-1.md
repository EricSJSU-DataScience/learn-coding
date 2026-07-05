---
id: input-1
title: Personalized greeting
stdin: "Ada\n"
---

## Description

Use `input()` to ask `"What is your name? "`, store it in a variable called `name`, then print: `Hello, <name>! Welcome to Python.`

## Starter

```python
# Ask for the user's name, then print a greeting
name = input("What is your name? ")

# Now print: Hello, <name>! Welcome to Python.
```

## Hint

print("Hello, " + name + "! Welcome to Python.")

## Check

```python
out = _stdout.strip()
expected = "Hello, Ada! Welcome to Python."
if expected in out:
    result = "PASS"
else:
    result = f"Expected your output to include '{expected}' — got: {out!r}"
```
