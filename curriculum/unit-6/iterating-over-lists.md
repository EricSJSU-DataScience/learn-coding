---
id: iterating-over-lists
title: Iterating over Lists
blurb: for item in list — looping directly over items, no index needed.
---

## Concept

`for item in my_list:` gives you each item directly, in order — you don't need an index unless you specifically need the position.

## Example

```python
names = ["Ana", "Ben", "Cy"]
for name in names:
    print("Hello,", name)
```

## Notes

- `for item in my_list:` gives you each item directly, in order.
- Use this style whenever you don't specifically need the index/position.

## Exercise: iterating-over-lists-1
title: Class Attendance

Given `students = ["Ana", "Ben", "Cy"]`, print `"Present: <name>"` for each student, one per line.

### Starter

```python
students = ["Ana", "Ben", "Cy"]

# Print "Present: <name>" for each student
```

### Hint

`for student in students: print("Present:", student)`

### Check

```python
out = _stdout.strip()
if out == "Present: Ana\nPresent: Ben\nPresent: Cy":
    result = "PASS"
else:
    result = f"Expected 'Present: <name>' for each student. Got: {out!r}"
```
