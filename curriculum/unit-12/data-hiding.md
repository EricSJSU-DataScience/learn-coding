---
id: data-hiding
title: Data Hiding
blurb: Using a leading underscore to signal an attribute is internal.
---

## Concept

Prefixing an attribute with `_` signals it's meant to be internal — a strong convention, even though Python doesn't strictly enforce it. Use getter (and setter) methods to expose data safely.

## Example

```python
class Account:
    def __init__(self, balance):
        self._balance = balance
    def get_balance(self):
        return self._balance

a = Account(100)
print(a.get_balance())
```

## Notes

- A single underscore `_name` is a convention meaning "internal, don't touch directly."
- Use getter methods (like `get_balance`) to expose data safely, instead of accessing `_balance` directly.

## Exercise: data-hiding-1
title: Bank Account

Given the `Account` class below, add a method `deposit(self, amount)` that adds `amount` to `self._balance`. Create an account with balance 100, deposit 50, then print `get_balance()`.

### Starter

```python
class Account:
    def __init__(self, balance):
        self._balance = balance
    def get_balance(self):
        return self._balance
    # add a deposit(self, amount) method here that adds amount to self._balance

a = Account(100)
a.deposit(50)
print(a.get_balance())
```

### Hint

```python
def deposit(self, amount):
    self._balance += amount
```

### Check

```python
out = _stdout.strip()
if out == "150":
    result = "PASS"
else:
    result = f"Expected 150 but got '{out}'"
```
