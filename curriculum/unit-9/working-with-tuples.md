---
id: working-with-tuples
title: Working with Tuples
blurb: Tuple unpacking — assigning multiple variables at once.
---

## Concept

**Unpacking** lets you assign each item of a tuple to its own variable in one line. The number of variables must match the number of items.

## Example

```python
point = (3, 4)
x, y = point
print(x, y)
```

## Notes

- Unpacking assigns each tuple item to its own variable, in order.
- The number of variables on the left must match the number of items in the tuple.

## Exercise: working-with-tuples-1
title: Unpack the Order

Given `order = ("Pizza", 2, 18.50)`, unpack it into `item`, `quantity`, and `price`, then print all three.

### Starter

```python
order = ("Pizza", 2, 18.50)

# Unpack order into item, quantity, price, then print all three
```

### Hint

`item, quantity, price = order`, then `print(item, quantity, price)`

### Check

```python
out = _stdout.strip()
if out == "Pizza 2 18.5":
    result = "PASS"
else:
    result = f"Expected 'Pizza 2 18.5' but got '{out}'"
```
