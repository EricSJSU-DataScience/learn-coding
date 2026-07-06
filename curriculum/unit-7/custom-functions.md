---
id: custom-functions
title: Custom Functions
blurb: Designing your own function from scratch.
---

## Concept

When writing your own function, think about what it needs as input (parameters) and what it should give back (`return`). Test it with a few different inputs to make sure it works generally, not just for one case.

## Example

```python
def rectangle_area(width, height):
    return width * height

print(rectangle_area(4, 5))
```

## Notes

- Pick a clear function name that describes what it does.
- Decide what parameters it needs, and what it should `return`.
- Test with more than one input to make sure your logic is general, not hardcoded.

## Exercise: custom-functions-1
title: Shipping Cost

Write a function `shipping_cost(weight, rate)` that returns `weight * rate`. Then print `shipping_cost(8, 2.5)`.

### Starter

```python
def shipping_cost(weight, rate):
    # return weight * rate
    pass

print(shipping_cost(8, 2.5))
```

### Hint

`return weight * rate`

### Check

```python
out = _stdout.strip()
try:
    ok = shipping_cost(2, 3) == 6 and shipping_cost(0, 5) == 0
except Exception:
    ok = False
if out != "20.0":
    result = f"Expected print(shipping_cost(8, 2.5)) to show 20.0, got '{out}'"
elif not ok:
    result = "shipping_cost() doesn't look right for other numbers — make sure it always returns weight * rate."
else:
    result = "PASS"
```
