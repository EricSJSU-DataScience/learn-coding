---
id: while-loops
title: While Loops
blurb: Recap of while — repeating as long as a condition stays True.
---

## Concept

A `while` loop repeats as long as a condition stays `True`. Make sure to update the loop variable inside the loop, or you'll get an infinite loop.

## Example

```python
time_left = 3
while time_left > 0:
    print(time_left)
    time_left -= 1
print("Time's up!")
```

## Notes

- `while` keeps going as long as the condition is `True`.
- Forgetting to update the loop variable causes an infinite loop.

## Exercise: while-loops-1
title: Time's Up!

Starting with `seconds = 3`, print the countdown, then `"Time's up!"` (matching the example pattern).

### Starter

```python
seconds = 3

# Print the countdown, then "Time's up!"
```

### Hint

`while seconds > 0: print(seconds); seconds -= 1` — then `print("Time's up!")` after the loop.

### Check

```python
out = _stdout.strip()
if out == "3\n2\n1\nTime's up!":
    result = "PASS"
else:
    result = f"Expected 3,2,1,Time's up! each on its own line. Got: {out!r}"
```
