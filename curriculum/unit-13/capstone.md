---
id: capstone
title: Final Capstone Project
blurb: Combine everything you've learned into one program.
---

## Concept

This is it — the capstone. No new syntax here, just putting together everything from the whole course: variables, functions, dictionaries, loops, conditionals, and f-strings, all in one program.

A good approach for any bigger program: break it into small pieces (a function for each sub-task), test each piece, then put them together.

## Example

```python
def grade_letter(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    else:
        return "C"

students = {"Ana": 95, "Ben": 82}
for name, score in students.items():
    print(name, grade_letter(score))
```

## Notes

- Write one small function per sub-task, then combine them.
- Loop over a dictionary with `.items()` when you need both the key and the value.
- Test your function with a couple of different inputs before trusting it inside a bigger program.

## Exercise: capstone-1
title: Grade Report Generator

Given:

```python
students = {
    "Ana": [92, 88, 95],
    "Ben": [60, 55, 58],
    "Cy": [78, 82, 74],
}
```

Write a function `average(scores)` that returns the average of a list of numbers, rounded to 1 decimal place. Then loop through `students` and print, for each one: `<name>: <average> (<PASS or FAIL>)` — `PASS` means the average is 60 or above.

### Starter

```python
students = {
    "Ana": [92, 88, 95],
    "Ben": [60, 55, 58],
    "Cy": [78, 82, 74],
}

def average(scores):
    # return the average of the list, rounded to 1 decimal place
    pass

# Loop through students and print "<name>: <average> (PASS/FAIL)"
# PASS means average >= 60
```

### Hint

```python
def average(scores):
    return round(sum(scores) / len(scores), 1)

for name, scores in students.items():
    avg = average(scores)
    status = "PASS" if avg >= 60 else "FAIL"
    print(f"{name}: {avg} ({status})")
```

### Check

```python
lines = _stdout.strip().splitlines()
expected = ["Ana: 91.7 (PASS)", "Ben: 57.7 (FAIL)", "Cy: 78.0 (PASS)"]
if lines == expected:
    result = "PASS"
else:
    result = f"Expected {expected} but got {lines}"
```
