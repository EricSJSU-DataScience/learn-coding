---
id: text-data
title: Text Data
blurb: Strings, quotes, and combining text.
---

## Concept

Strings are Python's text data type. You can stick two strings together (this is called **concatenation**) using `+`.

If you want a space between the joined words, you have to add it yourself — Python won't add one for you.

## Example

```python
first = "Ada"
last = "Lovelace"
full = first + " " + last
print(full)
```

## Notes

- Strings need matching quotes on both ends.
- `+` joins (concatenates) strings together — it doesn't add spaces for you.
- You can only `+` a string with another string (numbers need to be converted first — more on that soon).

## Exercise: text-data-1
title: Game Messages

You're building message strings for a simple game. Given `player = "Ava"`, combine it into the message: `Ava wins the game!`

### Starter

```python
player = "Ava"

# Print: Ava wins the game!
```

### Hint

`print(player + " wins the game!")`

### Check

```python
out = _stdout.strip()
if out == "Ava wins the game!":
    result = "PASS"
else:
    result = f"Expected 'Ava wins the game!' but got '{out}'"
```
