---
id: final-1
title: Guess-the-number checker
stdin: "5\n"
---

## Description

The secret number is `7`. Read the player's guess with `input()`, convert it to an `int`, and print `"Too low!"`, `"Too high!"`, or `"You got it!"` depending on the guess.

## Starter

```python
secret = 7

# 1. Read the player's guess with input() and convert it to an int
# 2. Compare it to secret and print "Too low!", "Too high!", or "You got it!"
```

## Hint

guess = int(input("Guess the number (1-10): ")) — then use if/elif/else comparing guess to secret.

## Check

```python
out = _stdout.strip()
if "Too low!" in out:
    result = "PASS"
else:
    result = f"With a guess of 5 against a secret of 7, expected 'Too low!' in the output. Got: {out!r}"
```
