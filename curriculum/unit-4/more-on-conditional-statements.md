---
id: more-on-conditional-statements
title: More on Conditional Statements
blurb: Combining conditions across multiple variables for a real decision.
---

## Concept

Real-world decisions often combine several pieces of information. Break the decision into well-named variables first, then combine them with `and` / `or` inside the `if`.

## Example

```python
temp = 101.5
has_cough = True
if temp >= 100.4 and has_cough:
    print("See a doctor")
else:
    print("Monitor at home")
```

## Notes

- Combine `and` / `or` inside `if` statements for more nuanced decisions.
- Naming the pieces first (like `has_cough`) makes the condition easier to read.

## Exercise: more-on-conditional-statements-1
title: Medical Software

Given `heart_rate = 130` and `is_resting = True`, print `"Alert"` if `heart_rate` is over 100 while resting, otherwise print `"Normal"`.

### Starter

```python
heart_rate = 130
is_resting = True

# Print "Alert" if heart_rate > 100 and is_resting, otherwise "Normal"
```

### Hint

`if heart_rate > 100 and is_resting: print("Alert")` / `else: print("Normal")`

### Check

```python
out = _stdout.strip()
if out == "Alert":
    result = "PASS"
else:
    result = f"Expected 'Alert' but got '{out}'"
```
