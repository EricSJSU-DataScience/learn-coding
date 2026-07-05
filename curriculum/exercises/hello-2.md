---
id: hello-2
title: "Bonus: two lines"
---

## Description

This is a bonus exercise — it shows how a lesson can have more than one exercise. Print two lines: `Hello, Python!` then `I'm learning to code.`

## Starter

```python
# Print two lines
```

## Hint

Two separate print() calls, one per line.

## Check

```python
out = _stdout.strip()
if out == "Hello, Python!\nI'm learning to code.":
    result = "PASS"
else:
    result = f"Expected two lines: 'Hello, Python!' then \"I'm learning to code.\" — got: {out!r}"
```
