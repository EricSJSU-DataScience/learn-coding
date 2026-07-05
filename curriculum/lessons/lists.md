---
id: lists
title: Lists
blurb: indexing, .append(), len().
exercises:
  - lists-1
---

## Concept

A **list** stores multiple values in order, written with square brackets. Each item has an **index** starting at 0.

`.append(x)` adds an item to the end. `len(list)` tells you how many items it has.

## Example

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("mango")
print(fruits[0], len(fruits))
```

## Notes

- `fruits[0]` is the first item, `fruits[-1]` is the last.
- Lists can grow and shrink — they're mutable.
- `for item in my_list:` loops over every item.
