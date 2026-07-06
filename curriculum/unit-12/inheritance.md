---
id: inheritance
title: Inheritance
blurb: A class can inherit and extend the behavior of another class.
---

## Concept

`class Child(Parent):` makes `Child` inherit everything from `Parent`. Overriding a method in the child class replaces the parent's version for that class.

## Example

```python
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return f"{self.name} makes a sound."

class Cat(Animal):
    def speak(self):
        return f"{self.name} says meow."

c = Cat("Whiskers")
print(c.speak())
```

## Notes

- `class Child(Parent):` inherits everything from `Parent`.
- Overriding a method in the child class replaces the parent's version, just for that class.

## Exercise: inheritance-1
title: Library Management System

Given the `Book` class below, create a class `EBook(Book)` that overrides `describe()` to add `" (ebook)"` at the end. Create an `EBook` named `"Dune"` called `book`, then print `book.describe()`.

### Starter

```python
class Book:
    def __init__(self, title):
        self.title = title
    def describe(self):
        return self.title

# Create class EBook(Book) that overrides describe() to add " (ebook)"

book = EBook("Dune")
print(book.describe())
```

### Hint

```python
class EBook(Book):
    def describe(self):
        return self.title + " (ebook)"
```

### Check

```python
out = _stdout.strip()
if out == "Dune (ebook)":
    result = "PASS"
else:
    result = f"Expected 'Dune (ebook)' but got '{out}'"
```
