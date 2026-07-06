---
id: conditional-statements
title: Conditional Statements
blurb: Multi-tier decisions with several elif branches.
---

## Concept

Some decisions need more than 2-3 options. You can stack as many `elif` branches as you need — Python checks them top to bottom and stops at the first match.

## Example

```python
hours = 3
if hours <= 1:
    fee = 5
elif hours <= 4:
    fee = 12
else:
    fee = 20
print(fee)
```

## Notes

- You can stack more than one `elif` for multi-tier decisions.
- Order matters — Python checks conditions top to bottom and stops at the first match.

## Exercise: conditional-statements-1
title: Smart Parking Lot

Given `hours = 5`, print the parking fee using these tiers: 1 hour or less → 5, up to 4 hours → 12, more than 4 hours → 20.

### Starter

```python
hours = 5

# Print the fee based on hours parked
```

### Hint

`if hours <= 1: fee = 5` / `elif hours <= 4: fee = 12` / `else: fee = 20`, then `print(fee)`

### Check

```python
out = _stdout.strip()
if out == "20":
    result = "PASS"
else:
    result = f"Expected 20 but got '{out}'"
```
