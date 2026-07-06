---
id: iterations-and-selections
title: Iterations and Selections
blurb: Combining a loop with an if inside it to filter or count items.
---

## Concept

Put an `if` statement inside a `for` loop to act only on items that match a condition. A **counter** variable tracks how many times the condition was `True`.

## Example

```python
grades = [55, 82, 91, 40, 76]
passing = 0
for g in grades:
    if g >= 60:
        passing += 1
print(passing)
```

## Notes

- Combine `for` and `if` to act only on items matching a condition.
- A counter variable (like `passing`) tracks how many times the condition was `True`.

## Exercise: iterations-and-selections-1
title: Class Grade Analyzer

Given `grades = [55, 82, 91, 40, 76, 60]`, count how many grades are passing (60 or above), then print the count.

### Starter

```python
grades = [55, 82, 91, 40, 76, 60]

# Count how many grades are 60 or above, then print the count
```

### Hint

```python
passing = 0
for g in grades:
    if g >= 60:
        passing += 1
print(passing)
```

### Check

```python
out = _stdout.strip()
if out == "4":
    result = "PASS"
else:
    result = f"Expected 4 but got '{out}'"
```
