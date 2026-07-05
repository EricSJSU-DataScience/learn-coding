---
id: final
title: Final Project
blurb: "Combining everything: the guess-the-number checker."
exercises:
  - final-1
---

## Concept

Time to combine variables, `input()`, type conversion, and `if`/`elif`/`else` into one program: a number-guessing checker.

This exercise checks a single guess against a secret number. Afterwards, in Colab, you'll extend this into the *full* game — looping with `while` until the player guesses correctly, and counting how many tries it took.

## Example

```python
secret = 7
guess = int(input("Guess the number (1-10): "))
if guess == secret:
    print("You got it!")
elif guess < secret:
    print("Too low!")
else:
    print("Too high!")
```

## Notes

- Remember: `input()` gives you a string — convert it with `int()` before comparing to a number.
- This is the seed of the full guessing game you'll build next in Colab, wrapped in a `while` loop.
