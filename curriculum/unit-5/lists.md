---
id: lists
title: Lists
blurb: Storing multiple values in order, with [], .append(), and len().
---

## Concept

A **list** stores multiple values in order, written with square brackets. `.append(x)` adds an item to the end, and `len(my_list)` tells you how many items it has.

## Example

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("mango")
print(fruits, len(fruits))
```

## Notes

- Lists use square brackets `[]` and commas between items.
- `.append(x)` adds `x` to the end of the list.
- `len(my_list)` tells you how many items are in it.

## Exercise: lists-1
title: Grocery List

Starting with `groceries = ["milk", "eggs"]`, add `"bread"` to the list, then print the whole list.

### Starter

```python
groceries = ["milk", "eggs"]

# Add "bread" to the list, then print the whole list
```

### Hint

`groceries.append("bread")`, then `print(groceries)`

### Check

```python
out = _stdout.strip()
if out == "['milk', 'eggs', 'bread']":
    result = "PASS"
else:
    result = f"Expected ['milk', 'eggs', 'bread'] but got '{out}'"
```
