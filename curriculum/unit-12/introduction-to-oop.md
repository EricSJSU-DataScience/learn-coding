---
id: introduction-to-oop
title: Introduction to OOP
blurb: Classes, __init__, and self — the building blocks of objects.
---

## Concept

A **class** is a blueprint for creating objects. `__init__` runs automatically when you create a new object, setting up its initial attributes. `self` refers to the specific object a method is being called on.

## Example

```python
class Dog:
    def __init__(self, name):
        self.name = name
    def bark(self):
        return f"{self.name} says woof!"

d = Dog("Rex")
print(d.bark())
```

## Notes

- A class is a blueprint; `__init__` runs automatically when you create a new object.
- `self` refers to the specific object the method is being called on.

## Exercise: introduction-to-oop-1
title: Make a Pet

Given the `Pet` class below, create a `Pet` object named `p` with name `"Milo"`, then print `p.greet()`.

### Starter

```python
class Pet:
    def __init__(self, name):
        self.name = name
    def greet(self):
        return f"Hi, I'm {self.name}!"

# Create a Pet named "Milo" called p, then print p.greet()
```

### Hint

`p = Pet("Milo")`, then `print(p.greet())`

### Check

```python
out = _stdout.strip()
if out == "Hi, I'm Milo!":
    result = "PASS"
else:
    result = f"Expected \"Hi, I'm Milo!\" but got '{out}'"
```
