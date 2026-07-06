---
id: indexing
title: Indexing
blurb: Reading one item from a list by position, starting at 0.
---

## Concept

Each item in a list has an **index** — its position, starting at `0`. Negative indices count from the end, so `my_list[-1]` is the last item.

## Example

```python
scores = [88, 92, 79, 95]
print(scores[0], scores[-1])
```

## Notes

- Indexing starts at `0` — `scores[0]` is the first item.
- Negative indices count from the end — `scores[-1]` is the last item.
- Indexing past the end of the list causes an `IndexError`.

## Exercise: indexing-1
title: Game Machine

Given `high_scores = [4200, 3900, 5100, 4700]`, print the score stored at index 2.

### Starter

```python
high_scores = [4200, 3900, 5100, 4700]

# Print the score at index 2
```

### Hint

`print(high_scores[2])`

### Check

```python
out = _stdout.strip()
if out == "5100":
    result = "PASS"
else:
    result = f"Expected 5100 but got '{out}'"
```
