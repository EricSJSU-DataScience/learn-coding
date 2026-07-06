---
id: exception-handling
title: Exception Handling
blurb: try / except — handling an error gracefully instead of crashing.
---

## Concept

`try` / `except` lets your program handle an error gracefully instead of crashing. Code inside `try` runs first; if it raises a matching exception, the matching `except` block runs instead of stopping the program.

## Example

```python
try:
    age = int(input("Age? "))
    print(age)
except ValueError:
    print("That's not a number!")
```

## Notes

- Code inside `try` runs first.
- If it raises the matching exception type, the `except` block runs instead of crashing.
- You can catch specific exception types, like `except KeyError:`.

## Exercise: exception-handling-1
title: Vending Machine Selection
stdin: "banana\n"

A vending machine has `snacks = {"chips": 1.5, "candy": 1.0, "soda": 2.0}`. Ask the user which snack they want with `input()`, then use `try`/`except` to print its price, or print `"Sold out!"` if it's not in the dictionary (catch the `KeyError`).

### Starter

```python
snacks = {"chips": 1.5, "candy": 1.0, "soda": 2.0}
choice = input("What would you like? ")

# Use try/except to print the price, or "Sold out!" if not found (KeyError)
```

### Hint

```python
try:
    print(snacks[choice])
except KeyError:
    print("Sold out!")
```

### Check

```python
out = _stdout.strip()
if out == "Sold out!":
    result = "PASS"
else:
    result = f"Expected 'Sold out!' but got '{out}'"
```
