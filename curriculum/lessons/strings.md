---
id: strings
title: Strings
blurb: slicing, .upper(), methods.
exercises:
  - strings-1
---

## Concept

Strings act a lot like lists of characters — you can index and slice them the same way. `word[0:3]` grabs a chunk from index 0 up to (not including) index 3.

Strings also have handy built-in methods like `.upper()`, `.lower()`, and `.strip()`.

## Example

```python
word = "python"
print(word[0:3], word.upper(), len(word))
```

## Notes

- Slicing: `word[start:end]`, end is not included.
- `.upper()` / `.lower()` change case.
- Strings are immutable — methods return a *new* string.
