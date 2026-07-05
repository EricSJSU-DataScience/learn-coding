---
id: dicts
title: Dictionaries
blurb: key → value lookups.
exercises:
  - dicts-1
---

## Concept

A **dictionary** stores key → value pairs, written with curly braces. Instead of a numeric index, you look things up by key.

## Example

```python
student = {"name": "Ada", "grade": 9}
print(student["name"], student.get("grade"))
```

## Notes

- Keys must be unique; adding the same key again overwrites the value.
- `dict[key]` errors if the key doesn't exist; `dict.get(key)` returns `None` instead.
- Values can be any type — strings, numbers, even lists.
