---
id: unit-12-quiz
title: Module 12 Quiz
blurb: Test what you learned about classes, inheritance, and encapsulation.
---

```json
[
  {
    "id": "unit-12-quiz-1",
    "type": "mcq",
    "prompt": "What is a class?",
    "options": ["A blueprint for creating objects", "A type of loop", "A built-in function", "A list of numbers"],
    "answer": "A blueprint for creating objects",
    "explanation": "A class defines the attributes and methods that its objects will have."
  },
  {
    "id": "unit-12-quiz-2",
    "type": "mcq",
    "prompt": "What does __init__ do?",
    "options": ["Runs automatically when a new object is created", "Deletes an object", "Only runs once per program", "Is optional and rarely used"],
    "answer": "Runs automatically when a new object is created",
    "explanation": "__init__ sets up a new object's initial attributes."
  },
  {
    "id": "unit-12-quiz-3",
    "type": "fill_blank",
    "prompt": "Fill in the parent class name: class Cat(___): — makes Cat inherit from Animal",
    "answer": "Animal",
    "explanation": "class Cat(Animal): makes Cat a subclass that inherits from Animal."
  },
  {
    "id": "unit-12-quiz-4",
    "type": "mcq",
    "prompt": "What does self refer to inside a method?",
    "options": ["The specific object the method is being called on", "The class itself", "A global variable", "Nothing, it's optional"],
    "answer": "The specific object the method is being called on",
    "explanation": "self always refers to the instance the method was called on."
  },
  {
    "id": "unit-12-quiz-5",
    "type": "mcq",
    "prompt": "What does a leading underscore like _balance signal?",
    "options": ["This is meant to be internal/private by convention", "This is a constant", "This is a required argument", "This is a class name"],
    "answer": "This is meant to be internal/private by convention",
    "explanation": "It's a strong convention meaning 'don't access this directly from outside the class'."
  },
  {
    "id": "unit-12-quiz-6",
    "type": "mcq",
    "prompt": "How do you call a @staticmethod?",
    "options": ["Directly on the class, no object needed", "Only from inside __init__", "Only after creating an object first", "You can't call it directly"],
    "answer": "Directly on the class, no object needed",
    "explanation": "Static methods are called on the class itself, like ClassName.method()."
  }
]
```
