---
id: using-slicing
title: Using Slicing
blurb: Grabbing the first or last few items with a slice.
---

## Concept

Two handy slicing shortcuts: `list[:n]` grabs the first `n` items, and `list[-n:]` grabs the last `n` items.

## Example

```python
playlist = ["Song A", "Song B", "Song C", "Song D"]
print(playlist[:2])
```

## Notes

- `list[:n]` grabs the first `n` items.
- `list[-n:]` grabs the last `n` items.

## Exercise: using-slicing-1
title: Playlist Cut

Given `playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"]`, print just the last two songs.

### Starter

```python
playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"]

# Print the last two songs
```

### Hint

`print(playlist[-2:])`

### Check

```python
out = _stdout.strip()
if out == "['Song D', 'Song E']":
    result = "PASS"
else:
    result = f"Expected ['Song D', 'Song E'] but got '{out}'"
```
