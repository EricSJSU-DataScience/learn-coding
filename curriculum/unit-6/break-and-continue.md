---
id: break-and-continue
title: break and continue
blurb: break stops a loop early; continue skips to the next iteration.
---

## Concept

`break` exits a loop immediately, skipping any remaining iterations. `continue` skips just the rest of the current iteration and moves on to the next one.

## Example

```python
for attempt in range(5):
    if attempt == 3:
        break
    print("Attempt", attempt)
```

## Notes

- `break` exits the loop immediately.
- `continue` skips just the rest of the current iteration and moves to the next one.

## Exercise: break-and-continue-1
title: Password Attempts

Given `attempts = ["wrong1", "wrong2", "secret", "wrong3"]` and the correct password `"secret"`, loop through `attempts` and print `"Access granted"` then stop (`break`) as soon as you find it.

### Starter

```python
attempts = ["wrong1", "wrong2", "secret", "wrong3"]

# Loop through attempts; when you find "secret", print "Access granted" and stop
```

### Hint

```python
for a in attempts:
    if a == "secret":
        print("Access granted")
        break
```

### Check

```python
out = _stdout.strip()
if out == "Access granted":
    result = "PASS"
else:
    result = f"Expected 'Access granted' but got '{out}'"
```
