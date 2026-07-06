---
id: functions-and-lists
title: Functions and Lists
blurb: Writing a function that processes a list passed in as a parameter.
---

## Concept

A function can take a list as a parameter and loop over it internally — that lets you reuse the same logic on any list you pass in.

## Example

```python
def total(numbers):
    result = 0
    for n in numbers:
        result += n
    return result

print(total([1, 2, 3, 4]))
```

## Notes

- Passing a list into a function lets you reuse the same logic on different lists.
- Combine the loop + accumulator pattern you already know, just inside a function this time.

## Exercise: functions-and-lists-1
title: Temperature Statistics

Write a function `average(numbers)` that returns the average of a list of numbers. Then print `average([70, 75, 80, 68])`.

### Starter

```python
def average(numbers):
    # return the average of the list
    pass

print(average([70, 75, 80, 68]))
```

### Hint

`return sum(numbers) / len(numbers)`

### Check

```python
out = _stdout.strip()
try:
    ok = average([10, 20]) == 15.0
except Exception:
    ok = False
if out != "73.25":
    result = f"Expected print(average([70, 75, 80, 68])) to show 73.25, got '{out}'"
elif not ok:
    result = "average() doesn't look right for other lists — make sure it returns sum(numbers) / len(numbers)."
else:
    result = "PASS"
```
