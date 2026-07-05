---
id: operators
title: Operators & Math
blurb: + - * / % // **
exercises:
  - operators-1
---

## Concept

Python supports the usual math operators, plus a couple of special ones:

- `+ - * /` — add, subtract, multiply, divide (always gives a float)
- `%` — remainder (modulo)
- `//` — floor division (divides and drops the decimal)
- `**` — power (exponent)

## Example

```python
a = 7
b = 2
print(a + b, a - b, a * b, a / b, a % b, a // b, a ** b)
```

## Notes

- `/` always returns a float, even 8 / 2 gives 4.0.
- `//` rounds down to the nearest whole number.
- `**` is exponent: 2 ** 3 is 8.
