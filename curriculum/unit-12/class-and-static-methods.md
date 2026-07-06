---
id: class-and-static-methods
title: Class and Static Methods
blurb: @staticmethod and @classmethod — methods that don't need an instance.
---

## Concept

A `@staticmethod` doesn't need `self` or `cls` — it's just a regular function that lives inside a class, called directly on the class itself. `@classmethod` receives the class (`cls`) instead of an instance, often used for alternative constructors.

## Example

```python
class MathHelper:
    @staticmethod
    def square(x):
        return x * x

print(MathHelper.square(6))
```

## Notes

- Call a `@staticmethod` directly on the class — no object needed.
- `@classmethod` is often used for alternative constructors.

## Exercise: class-and-static-methods-1
title: Temperature Converter

Add a `@staticmethod` named `to_fahrenheit(celsius)` to the class below that returns `celsius * 9 / 5 + 32`. Then print `TempConverter.to_fahrenheit(20)`.

### Starter

```python
class TempConverter:
    # add a @staticmethod named to_fahrenheit(celsius) here
    pass

print(TempConverter.to_fahrenheit(20))
```

### Hint

```python
@staticmethod
def to_fahrenheit(celsius):
    return celsius * 9 / 5 + 32
```

### Check

```python
out = _stdout.strip()
if out == "68.0":
    result = "PASS"
else:
    result = f"Expected 68.0 but got '{out}'"
```
