---
id: for-loops
title: For Loops
blurb: Recap of for and range() — repeating an action a set number of times.
---

## Concept

A `for` loop repeats a block of code once for each item in a sequence. `range(n)` generates `0, 1, 2, ... n-1` — perfect for "do this n times."

## Example

```python
for i in range(3):
    print("Checking seatbelt", i + 1)
```

## Notes

- `range(n)` counts from `0` to `n - 1`.
- The loop variable changes every time through the loop.

## Exercise: for-loops-1
title: Fasten your Seat Belt

Use a `for` loop to print `"Please fasten your seat belt."` three times, once per line.

### Starter

```python
# Print the message three times using a for loop
```

### Hint

`for i in range(3): print("Please fasten your seat belt.")`

### Check

```python
out = _stdout.strip()
expected = "Please fasten your seat belt.\nPlease fasten your seat belt.\nPlease fasten your seat belt."
if out == expected:
    result = "PASS"
else:
    result = f"Expected the message three times, got: {out!r}"
```
