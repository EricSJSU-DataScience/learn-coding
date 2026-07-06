---
id: fixing-data-types
title: Fixing Data Types
blurb: Spotting and fixing bugs caused by forgetting to convert input().
---

## Concept

A very common bug: forgetting that `input()` returns a string, then trying to do math with it. Adding two "number-looking" strings doesn't add them — it concatenates them! Convert with `int()` or `float()` before doing math.

## Example

```python
# Fixed: convert before doing math
n = int(input("Number? "))
print(n * 2)
```

## Notes

- If you get `TypeError: unsupported operand type(s)`, check whether one of the values is still a string.
- `"8" + "9"` gives `"89"` (concatenation), not `17` — that's the bug to watch for.
- Convert `input()` results with `int()` or `float()` before doing math with them.

## Exercise: fixing-data-types-1
title: Fix the Average
stdin: "80\n90\n"

This code should print the average of two test scores entered by the user, but it has a bug — it forgets to convert the input to numbers before adding them. Fix it.

### Starter

```python
test1 = input("First score? ")
test2 = input("Second score? ")

average = (test1 + test2) / 2
print(average)
```

### Hint

Wrap each `input()` call with `int(...)` so `test1` and `test2` are numbers before you add them.

### Check

```python
out = _stdout.strip()
if out == "85.0":
    result = "PASS"
else:
    result = f"Expected 85.0 but got '{out}'"
```
