---
id: working-with-variables
title: Working with Variables
blurb: Put print, strings, numbers, and variables together.
---

## Concept

Let's put everything from this unit together: variables, text, numbers, and `print()`. A good habit for any program is to break the problem into steps — store the pieces you need first, then compute an answer, then print it.

You can also mix types in one `print()` call — Python will automatically convert numbers to text for display.

## Example

```python
name = "Ada"
test1 = 90
test2 = 80
average = (test1 + test2) / 2
print(name, "average:", average)
```

## Notes

- `print(a, b, c)` can mix strings and numbers freely — Python handles the conversion for you.
- Store each piece of information in its own clearly-named variable before you start computing.
- Build the answer in steps: first the pieces, then the calculation, then the print.

## Exercise: working-with-variables-1
title: The Semester Grade

Given `test1 = 90`, `test2 = 80`, and `test3 = 100`, compute the average of the three tests and print it.

### Starter

```python
test1 = 90
test2 = 80
test3 = 100

# Compute the average and print it
```

### Hint

`average = (test1 + test2 + test3) / 3`, then `print(average)`

### Check

```python
out = _stdout.strip()
if out == "90.0":
    result = "PASS"
else:
    result = f"Expected 90.0 but got '{out}'"
```
