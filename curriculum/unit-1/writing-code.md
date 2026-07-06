---
id: writing-code
title: Writing Code
blurb: What a program is, print(), and comments.
---

## Concept

A Python program is just a list of instructions the computer runs one at a time, from top to bottom. The most basic instruction is `print()` — it displays whatever is inside its parentheses on the screen.

Text in Python is called a **string**, and it always goes inside quotes — either `"double quotes"` or `'single quotes'`.

Anything after a `#` is a **comment**. Python completely ignores comments — they're just notes for humans reading the code.

## Example

```python
print("Hello, world!")   # this line prints text to the screen
# Comments start with a hash and are ignored by Python
```

## Notes

- `print()` shows whatever is inside the parentheses.
- Strings need matching quotes on both ends.
- Python runs your code from top to bottom, one line at a time.
- Use comments to leave yourself (or anyone reading your code) notes.

## Exercise: writing-code-1
title: Print a greeting

Use `print()` to print exactly this line: `Hello, Python!`

### Starter

```python
# Write your code below
```

### Hint

Use `print("Hello, Python!")` — don't forget the quotes and the exclamation point!

### Check

```python
out = _stdout.strip()
if out == "Hello, Python!":
    result = "PASS"
else:
    result = f"Expected 'Hello, Python!' but got '{out}'"
```
