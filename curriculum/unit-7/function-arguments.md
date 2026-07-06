---
id: function-arguments
title: Function Arguments
blurb: Default parameter values and keyword arguments.
---

## Concept

Parameters can have **default values** — used when the caller doesn't provide that argument. You can also pass arguments by name (keyword arguments), in which case order doesn't matter.

## Example

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Ada"))
print(greet("Ada", greeting="Hi"))
```

## Notes

- A default value (`greeting="Hello"`) is used only if the caller doesn't provide that argument.
- Keyword arguments (`greeting="Hi"`) let you specify by name.

## Exercise: function-arguments-1
title: Greeting Card

Write a function `make_card(name, message="Congratulations")` that returns `f"{message}, {name}!"`. Print `make_card("Sam")`, then print `make_card("Ari", message="Happy Birthday")`.

### Starter

```python
def make_card(name, message="Congratulations"):
    # return f"{message}, {name}!"
    pass

print(make_card("Sam"))
print(make_card("Ari", message="Happy Birthday"))
```

### Hint

`return f"{message}, {name}!"`

### Check

```python
out = _stdout.strip()
if out == "Congratulations, Sam!\nHappy Birthday, Ari!":
    result = "PASS"
else:
    result = f"Expected 'Congratulations, Sam!' then 'Happy Birthday, Ari!'. Got: {out!r}"
```
