---
id: standards-and-best-practices
title: Standards and Best Practices
blurb: Naming conventions and writing code others (including future you) can read.
---

## Concept

Good code isn't just code that works — it's code that's easy to read later. A few habits that help:

- Use **snake_case** for variable names: lowercase words separated by underscores, like `total_score`.
- Pick **descriptive names** — `student_name` tells you far more than `x`.
- Be consistent — pick a style and stick with it throughout your program.

## Example

```python
# Clear and descriptive
student_name = "Maya"
total_score = 95

# Hard to understand
x = "Maya"
y = 95
```

## Notes

- A good variable name explains what it holds without needing a comment.
- snake_case (not camelCase) is the standard style for variable names in Python.
- Future you (or anyone reading your code) will thank present you for clear names.

## Exercise: standards-1
title: Flight Tracker

Given `flight_number = "BA249"`, `destination = "Tokyo"`, and `delay_minutes = 45`, print: `Flight BA249 to Tokyo is delayed by 45 minutes`

### Starter

```python
flight_number = "BA249"
destination = "Tokyo"
delay_minutes = 45

# Print: Flight BA249 to Tokyo is delayed by 45 minutes
```

### Hint

`print("Flight", flight_number, "to", destination, "is delayed by", delay_minutes, "minutes")`

### Check

```python
out = _stdout.strip()
if out == "Flight BA249 to Tokyo is delayed by 45 minutes":
    result = "PASS"
else:
    result = f"Expected 'Flight BA249 to Tokyo is delayed by 45 minutes' but got '{out}'"
```
