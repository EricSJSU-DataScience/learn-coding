---
id: working-with-dictionaries
title: Working with Dictionaries
blurb: Looping over a dictionary's keys, values, or both together.
---

## Concept

`.keys()` gives just the keys, `.values()` gives just the values, and `.items()` gives key-value pairs together — the most common way to loop over a dictionary.

## Example

```python
scores = {"Ana": 90, "Ben": 85}
for name, score in scores.items():
    print(name, score)
```

## Notes

- `for key, value in my_dict.items():` is the most common way to loop over a dictionary.
- `.keys()` and `.values()` give you just one side if that's all you need.

## Exercise: working-with-dictionaries-1
title: Team Roster

Given `positions = {"Ana": "Goalie", "Ben": "Forward", "Cy": "Defense"}`, loop through it and print `"<name> plays <position>"` for each player.

### Starter

```python
positions = {"Ana": "Goalie", "Ben": "Forward", "Cy": "Defense"}

# Print "<name> plays <position>" for each player
```

### Hint

`for name, position in positions.items(): print(name, "plays", position)`

### Check

```python
out = _stdout.strip()
if out == "Ana plays Goalie\nBen plays Forward\nCy plays Defense":
    result = "PASS"
else:
    result = f"Expected each player's name and position on its own line. Got: {out!r}"
```
