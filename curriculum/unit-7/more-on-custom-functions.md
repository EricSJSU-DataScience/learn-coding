---
id: more-on-custom-functions
title: More on Custom Functions
blurb: Functions calling other functions.
---

## Concept

Functions can call other functions you've already defined — breaking a bigger task into small, reusable, testable pieces.

## Example

```python
def square(x):
    return x * x

def sum_of_squares(a, b):
    return square(a) + square(b)

print(sum_of_squares(3, 4))
```

## Notes

- A function can call another function you've already defined.
- Breaking a problem into small functions makes each piece easier to write and test.

## Exercise: more-on-custom-functions-1
title: Hashtag Generator

Write `clean_word(word)` that returns `word` with its first letter capitalized. Write `make_hashtag(word)` that calls `clean_word` and returns `"#"` plus that result. Print `make_hashtag("python")`.

### Starter

```python
def clean_word(word):
    # return word with its first letter capitalized
    pass

def make_hashtag(word):
    # call clean_word, then add "#" in front
    pass

print(make_hashtag("python"))
```

### Hint

`clean_word`: `return word.capitalize()`. `make_hashtag`: `return "#" + clean_word(word)`

### Check

```python
out = _stdout.strip()
try:
    ok = make_hashtag("camp") == "#Camp"
except Exception:
    ok = False
if out != "#Python":
    result = f"Expected print(make_hashtag('python')) to show #Python, got '{out}'"
elif not ok:
    result = "make_hashtag() doesn't look right for other words — make sure it capitalizes and adds '#'."
else:
    result = "PASS"
```
