---
id: data-conversion
title: Data Conversion
blurb: int(), float(), and str() — converting between data types.
---

## Concept

You can convert values between types: `int("42")` turns text into a whole number, `float("4.5")` turns text into a decimal, and `str(42)` turns a number into text. This is especially useful for turning `input()` text into numbers you can do math with.

## Example

```python
price_text = input("Price? ")
price = float(price_text)
print(price * 2)
```

## Notes

- `int("42")` and `float("4.5")` convert text into numbers.
- `str(42)` converts a number into text (useful for combining with other strings).
- Converting text that isn't actually a number (like `int("hello")`) causes a `ValueError`.

## Exercise: data-conversion-1
title: Finance App
stdin: "50\n"

Ask the user `"How much did you spend? "` with `input()`, convert it to a `float`, and print double that amount (like a matching savings goal).

### Starter

```python
amount_text = input("How much did you spend? ")

# Convert to a float, double it, and print the result
```

### Hint

`amount = float(amount_text)`, then `print(amount * 2)`

### Check

```python
out = _stdout.strip()
if out == "100.0":
    result = "PASS"
else:
    result = f"Expected 100.0 but got '{out}'"
```
