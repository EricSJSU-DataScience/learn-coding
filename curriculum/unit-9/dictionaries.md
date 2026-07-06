---
id: dictionaries
title: Dictionaries
blurb: Key -> value pairs, looked up by key instead of position.
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

## Exercise: dictionaries-1
title: Grade Lookup

Given `grades = {"Ada": 92, "Sam": 81, "Lee": 74}`, print Sam's grade.

### Starter

```python
grades = {"Ada": 92, "Sam": 81, "Lee": 74}

# Print Sam's grade
```

### Hint

`print(grades["Sam"])`

### Check

```python
out = _stdout.strip()
if out == "81":
    result = "PASS"
else:
    result = f"Expected 81 but got '{out}'"
```
