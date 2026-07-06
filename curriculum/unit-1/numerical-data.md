---
id: numerical-data
title: Numerical Data
blurb: int, float, and basic arithmetic.
---

## Concept

Python has two basic number types: `int` (whole numbers, like `13`) and `float` (decimal numbers, like `5.2`).

The usual math operators work as you'd expect: `+ - * /`. One thing to know: `/` (division) always gives you back a `float`, even if the answer is a whole number.

## Example

```python
price = 4.5
quantity = 3
total = price * quantity
print(total)
```

## Notes

- `int` = whole numbers, `float` = decimal numbers.
- `/` always returns a float — `8 / 2` gives `4.0`, not `4`.
- You can use parentheses `()` to control order of operations, just like in math.

## Exercise: numerical-data-1
title: Shopping Prices

Given `price = 2.5` and `quantity = 4`, compute the total cost and print it.

### Starter

```python
price = 2.5
quantity = 4

# Compute the total cost and print it
```

### Hint

`total = price * quantity`, then `print(total)`

### Check

```python
out = _stdout.strip()
if out == "10.0":
    result = "PASS"
else:
    result = f"Expected 10.0 but got '{out}'"
```
