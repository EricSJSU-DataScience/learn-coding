---
id: while-1
title: Countdown
---

## Description

Starting with `n = 5`, use a `while` loop to print `n`, then decrease it, stopping once it reaches 0. After the loop, print `"Liftoff!"`. Each value should be on its own line.

## Starter

```python
n = 5
# Use a while loop to print n, then decrease it, until it reaches 0
# After the loop, print "Liftoff!"
```

## Hint

```python
while n > 0:
    print(n)
    n -= 1
print("Liftoff!")
```

## Check

```python
out = _stdout.strip()
if out == "5\n4\n3\n2\n1\nLiftoff!":
    result = "PASS"
else:
    result = f"Expected 5,4,3,2,1,Liftoff! each on its own line. Got: {out!r}"
```
