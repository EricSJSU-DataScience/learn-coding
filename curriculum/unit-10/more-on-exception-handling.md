---
id: more-on-exception-handling
title: More on Exception Handling
blurb: Multiple except blocks, plus else and finally.
---

## Concept

You can catch more than one exception type by stacking `except` blocks (most specific first). `else` runs only if no exception happened; `finally` always runs, error or not.

## Example

```python
try:
    n = int(input("Number? "))
    result = 10 / n
except ValueError:
    print("Not a number!")
except ZeroDivisionError:
    print("Can't divide by zero!")
else:
    print("Result:", result)
finally:
    print("Done.")
```

## Notes

- List `except` blocks from most specific to least specific.
- `else` runs only if no exception happened; `finally` always runs.

## Exercise: more-on-exception-handling-1
title: Safe Divider
stdin: "0\n"

Ask the user for a number with `input()`, convert it to `int`, then divide 10 by it. Catch `ZeroDivisionError` and print `"Can't divide by zero!"` if it happens.

### Starter

```python
n = int(input("Number? "))

# Divide 10 by n; if n is 0, print "Can't divide by zero!" instead
```

### Hint

```python
try:
    print(10 / n)
except ZeroDivisionError:
    print("Can't divide by zero!")
```

### Check

```python
out = _stdout.strip()
if out == "Can't divide by zero!":
    result = "PASS"
else:
    result = f"Expected \"Can't divide by zero!\" but got '{out}'"
```
