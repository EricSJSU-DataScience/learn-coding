---
id: control-flow
title: Control Flow
blurb: Recap of if / elif / else — choosing what to do based on a condition.
---

## Concept

`if` lets your program choose what to do based on a condition. `elif` ("else if") lets you check more conditions after the first, and `else` catches everything else. Only **one** branch ever runs, and indentation (4 spaces) marks what belongs to each block.

## Example

```python
weather = "rainy"
if weather == "sunny":
    print("Wear sunglasses")
elif weather == "rainy":
    print("Bring an umbrella")
else:
    print("Check the forecast")
```

## Notes

- Only one branch of an if/elif/else ever runs.
- Indent consistently (4 spaces) inside each block.
- `elif` lets you check more conditions after the first `if`.

## Exercise: control-flow-1
title: Traffic Light

Given `light = "yellow"`, print `"Go"` if green, `"Slow down"` if yellow, `"Stop"` if red.

### Starter

```python
light = "yellow"

# Print "Go", "Slow down", or "Stop" depending on light
```

### Hint

`if light == "green": ... elif light == "yellow": ... else: ...`

### Check

```python
out = _stdout.strip()
if out == "Slow down":
    result = "PASS"
else:
    result = f"Expected 'Slow down' but got '{out}'"
```
