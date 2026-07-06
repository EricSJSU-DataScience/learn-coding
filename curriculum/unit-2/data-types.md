---
id: data-types
title: Data Types
blurb: Recap str/int/float, type(), and a new type: bool.
---

## Concept

Quick recap: `str` (text), `int` (whole numbers), and `float` (decimals). Today we add `bool` — a data type with exactly two possible values: `True` and `False`. You can check any value's type with the built-in `type()` function.

## Example

```python
name = "Ada"
age = 13
is_student = True
print(type(name), type(age), type(is_student))
```

## Notes

- `type(x)` tells you the data type of `x`.
- `bool` has exactly two values: `True` and `False`.
- `input()` always gives you back a `str`, even if the user types a number — that's why `type()` on input text always shows `str`.

## Exercise: data-types-1
title: Chatbot v1.1
stdin: "Robo\n15\n"

Extend the chatbot: ask for a name, then ask `"How old are you? "` and store it in `age_text`. Print: `Hi <name>! Your age input has type: <class 'str'>`

### Starter

```python
name = input("What's your name? ")
age_text = input("How old are you? ")

# Print: Hi <name>! Your age input has type: <the type of age_text>
```

### Hint

`print(f"Hi {name}! Your age input has type: {type(age_text)}")`

### Check

```python
out = _stdout.strip()
if "Robo" in out and "str" in out:
    result = "PASS"
else:
    result = f"Expected a message mentioning 'Robo' and the str type — got: {out!r}"
```
