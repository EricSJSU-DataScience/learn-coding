---
id: inputs-and-outputs
title: Inputs and Outputs
blurb: input(), and f-strings for cleaner formatted output.
---

## Concept

You already know `input()` pauses your program and waits for the user to type something. Now let's make the output nicer with an **f-string**: put an `f` right before the opening quote, and you can drop variables directly inside `{curly braces}`.

## Example

```python
name = input("What's your name? ")
print(f"Hello, {name}! Welcome aboard.")
```

## Notes

- An f-string (`f"..."`) lets you embed variables directly inside `{}`.
- f-strings are usually easier to read than joining strings together with `+`.
- `input()` always returns a string, no matter what the user types.

## Exercise: inputs-and-outputs-1
title: Chatbot v1.0
stdin: "Robo\n"

Ask `"What's your name? "` with `input()`, store it in `name`, then print: `Beep boop, hello <name>! I am ChatBot.`

### Starter

```python
name = input("What's your name? ")

# Print: Beep boop, hello <name>! I am ChatBot.
```

### Hint

`print(f"Beep boop, hello {name}! I am ChatBot.")`

### Check

```python
out = _stdout.strip()
expected = "Beep boop, hello Robo! I am ChatBot."
if expected in out:
    result = "PASS"
else:
    result = f"Expected your output to include '{expected}' — got: {out!r}"
```
