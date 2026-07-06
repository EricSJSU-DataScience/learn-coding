# Code Camp — 课程重新设计方案（v2 curriculum plan）

这是根据你参考的在线 Python 课程（12 个 module 的完整结构）整理出的知识点大纲，用来替换/扩展现在网站上只有 5 个 unit、12 节课的初版内容。这一步只是**规划**，还没有写实际的 lesson/exercise 内容文件 —— 确认大纲没问题之后，我们再一个 unit 一个 unit 地把 markdown 内容填进去。

## 设计说明

- 沿用网站原有的结构：**Unit → Lesson → Exercise（Practice）**。参考课程里的每个 "Lesson" 对应我们的一个知识点小节，每个 "Practice" 对应一道可自动批改的编程练习。
- **Quiz**：按你的选择，我们会给引擎新增一个"选择题/填空题"练习类型（在完成这份大纲、开始写内容之前，我需要先改 `index.html` 引擎和 `curriculum-loader.js`，加一种新的 exercise 类型）。大纲里每个 unit 末尾仍然保留 Quiz 知识点清单，用来后续出题。
- **Booster（AI 实时出题）**：按你的选择，跳过，不单独处理 —— 大纲里不再列出 Booster 这一项。
- 参考课程里的练习题名字大多本来就很适合孩子（Chatbot、Game Machine、Pancakes、Vending Machine 等），基本保留原名，只在个别地方做了微调。
- 这是一个会跨越很多个月的完整课程（12 个大单元 + 1 个毕业设计),不需要一次性全部写完内容 —— 大纲定下来后可以分批实现。

---

## 单元总览

| # | Unit 名称 | Lesson 数 | Practice 数 | 备注 |
|---|---|---|---|---|
| 1 | Getting Started with Python | 5 | 4 | 对应现有 Unit 1，但更细 |
| 2 | Going Deeper with Python | 5 | 6 | 调试、代码规范、输入输出、数据类型 |
| 3 | Working with Data | 6 | 6 | 类型检查/转换、比较与逻辑运算 |
| 4 | Control Flow | 6 | 4 | for/while/条件语句，比现有更完整 |
| 5 | Working with Lists | 6 | 5 | 索引与切片 |
| 6 | Mixing Things Up: Loops and Lists | 4 | 2 | 循环 + 列表的综合运用 |
| 7 | Functions | 5 | 4 | 参数、字符串/列表函数、自定义函数 |
| 8 | Mixing Things Up: Using Functions | 3 | 1 | 函数的综合运用 |
| 9 | Collection Types | 6 | 1 | 元组、集合、字典、列表推导式 |
| 10 | Error Handling | 3 | 1 | 异常处理 |
| 11 | Functional Programming | 5 | 1 | lambda、map/filter、装饰器 |
| 12 | Object-Oriented Programming | 4 | 1 | 类、继承、封装 |
| 13 | Final Capstone Project | — | 1 | 毕业设计，综合运用所有知识点（新增） |

共 12 个知识单元 + 1 个毕业设计，58 个 Lesson 知识点，约 37 道 Practice 练习，12 个 Quiz。

---

## Unit 1: Getting Started with Python

| Lesson（知识点） | 讲什么 |
|---|---|
| Writing Code | 什么是程序、`print()`、代码是从上到下逐行执行的 |
| Memory & Variables | 变量是什么、`=` 赋值、变量命名规则 |
| Text Data | 字符串、引号、字符串拼接 |
| Numerical Data | int / float、基本算术运算符 |
| Working with Variables | 综合运用变量做小任务（多变量、`print` 多值） |

**Practice：** Game Messages、Shopping Prices、The Semester Grade（这三道对应"数字/文本变量综合运用"），再加一道现有站点里的 "Rectangle area" 风格练习。

**Quiz 知识点：** print/字符串/变量命名/int-float 区别/基本运算符。

---

## Unit 2: Going Deeper with Python

| Lesson（知识点） | 讲什么 |
|---|---|
| Debugging | 常见报错类型（SyntaxError/NameError/TypeError）、怎么读懂报错信息 |
| Standards and Best Practices | 命名规范、注释、代码可读性 |
| Applying Best Practices | 把规范用到实际代码里 |
| Inputs and Outputs | `input()`、`print()` 格式化输出、f-string |
| Data Types | 复习 str/int/float，介绍 `type()` |

**Practice：** And the Winner is…、Flight Tracker、Snowflake、It's Payday!、Chatbot v1.0、Messaging App、Chatbot v1.1（对应"调试 + 规范 + 输入输出 + 数据类型"四块知识点各配 1-2 道）。

**Quiz 知识点：** 常见报错类型、命名规范、input()/f-string、type()。

---

## Unit 3: Working with Data

| Lesson（知识点） | 讲什么 |
|---|---|
| Data Type Checking | `type()`、`isinstance()` |
| Data Conversion | `int()` / `float()` / `str()` 互相转换 |
| Fixing Data Types | 排查并修复类型错误（比如 input 忘记转换） |
| Comparison Operations | `== != > < >= <=` |
| Logical Operations | `and or not` |
| Combining Comparison and Logical Operations | 组合条件表达式 |

**Practice：** Finance App、Chess Tournament、Level Up!、Fitness Goals!、Houston, we've had a problem.（对应类型检查/转换、比较运算、逻辑运算各配 1-2 道）。

**Quiz 知识点：** 类型检查/转换、比较运算符、逻辑运算符、组合条件。

---

## Unit 4: Control Flow

| Lesson（知识点） | 讲什么 |
|---|---|
| Control Flow | if/elif/else 整体介绍（现有 Unit 2 已有雏形，这里更系统） |
| For Loops | `for` + `range()` |
| While Loops | `while`、`break`、无限循环的坑 |
| More on Iteration | 循环里的计数器、累加器模式 |
| Conditional Statements | 更复杂的分支逻辑（嵌套 if） |
| More on Conditional Statements | 综合运用条件判断 |

**Practice：** Fasten your Seat Belt、Time's Up!、Cell Growth、Smart Parking Lot、Medical Software。

**Quiz 知识点：** for/while 区别、break/continue、嵌套条件判断。

---

## Unit 5: Working with Lists

| Lesson（知识点） | 讲什么 |
|---|---|
| Lists | 列表是什么、`[]`、`.append()`、`len()` |
| Indexing | 用下标取列表元素、负数下标 |
| Using Indexing | 综合运用下标做任务 |
| Slicing | `list[start:end]` 切片 |
| Using Slicing | 综合运用切片 |
| Advanced Slicing and Indexing | step 参数（`list[::2]`）、倒序切片 |

**Practice：** Game Machine、Pancakes、Relay Race、Step Counter。

**Quiz 知识点：** 索引 vs 切片、负数下标、step 参数。

---

## Unit 6: Mixing Things Up: Loops and Lists

| Lesson（知识点） | 讲什么 |
|---|---|
| Iterating over Lists | `for item in list` |
| Nested Loops | 循环嵌套循环 |
| Iterations and Selections | 循环里加条件判断（比如筛选/计数） |
| break and continue | 提前退出循环 / 跳过本轮 |

**Practice：** Class Grade Analyzer。

**Quiz 知识点：** 遍历列表、嵌套循环、循环里的条件判断、break/continue。

---

## Unit 7: Functions

| Lesson（知识点） | 讲什么 |
|---|---|
| Functions | `def`、`return`、调用函数 |
| Function Arguments | 参数、默认参数值 |
| String Functions | 字符串常用方法（`.upper()` `.split()` `.strip()` 等，串联复习） |
| List Functions | 列表常用方法（`.append()` `.sort()` `.pop()` 等） |
| Custom Functions | 自己设计一个多参数、有返回值的函数 |
| More on Custom Functions | 函数之间互相调用、拆分任务 |

**Practice：** Survey Data Format、Queue Management、Shipping cost、Hashtag Generator。

**Quiz 知识点：** 参数/默认值、常用字符串和列表方法、自定义函数设计。

---

## Unit 8: Mixing Things Up: Using Functions

| Lesson（知识点） | 讲什么 |
|---|---|
| Functions and Lists | 函数处理列表数据（比如统计、过滤） |
| Functions and Booleans | 返回 True/False 的判断型函数 |
| Useful Built-in Functions | `sum() max() min() sorted() len()` 等内置函数复习串联 |

**Practice：** Temperature Statistics。

**Quiz 知识点：** 函数 + 列表组合、布尔返回值函数、内置函数。

---

## Unit 9: Collection Types

| Lesson（知识点） | 讲什么 |
|---|---|
| Tuples | 元组、不可变性 |
| Working with Tuples | 元组解包、常见用法 |
| Sets | 集合、去重、集合运算 |
| Dictionaries | 字典、键值对、`.get()` |
| Working with Dictionaries | 遍历字典（`.items()` / `.keys()` / `.values()`） |
| List Comprehensions | 列表推导式 `[x for x in ...]` |

**Practice：** Filtering Long Words。

**Quiz 知识点：** 元组 vs 列表、集合运算、字典遍历、列表推导式。

---

## Unit 10: Error Handling

| Lesson（知识点） | 讲什么 |
|---|---|
| Exceptions | 什么是异常、程序为什么会崩溃 |
| Exception Handling | `try / except` |
| More on Exception Handling | 多种异常类型、`else` / `finally` |

**Practice：** Vending Machine Selection。

**Quiz 知识点：** try/except 结构、常见异常类型。

---

## Unit 11: Functional Programming

| Lesson（知识点） | 讲什么 |
|---|---|
| Introduction to Functional Programming | 函数式编程是什么（对比一般写法） |
| Lambda Expressions | 匿名函数 `lambda` |
| map and filter | `map()` / `filter()` 配合 lambda |
| args and kwargs | `*args` / `**kwargs` 可变参数 |
| Decorators | 装饰器基础 |

**Practice：** Survey Data。

**Quiz 知识点：** lambda 语法、map/filter、`*args`/`**kwargs`、装饰器概念。

---

## Unit 12: Object-Oriented Programming

| Lesson（知识点） | 讲什么 |
|---|---|
| Introduction to OOP | 类、对象、`__init__` |
| Inheritance | 类的继承 |
| Data Hiding | 私有属性（`_` / `__` 前缀）、封装思想 |
| Class and Static Methods | `@classmethod` / `@staticmethod` |

**Practice：** Library Management System。

**Quiz 知识点：** 类/对象/属性/方法、继承、封装、classmethod/staticmethod。

---

## Unit 13: Final Capstone Project（新增，原课程没有，仿照网站原来的 Final Project 传统）

不设新的 Lesson，只有一个综合性大练习，让孩子把 12 个单元学到的东西全部用一遍（变量、条件、循环、列表/字典、函数、异常处理、也可以选择性用上类）。可以在实现阶段和孩子一起商量做什么主题的项目（比如一个文字冒险小游戏，或者升级版猜数字游戏）。

---

## 接下来怎么做

1. 你确认一下这个大纲有没有需要调整的地方（顺序、增删知识点、练习题的名字要不要改得更贴近孩子的兴趣）。
2. 我们先给引擎加"选择题/填空题"这个新练习类型（Quiz 需要用到）。
3. 然后从 Unit 1 开始，一个 unit 一个 unit 地把 markdown 内容写进 `curriculum/lessons/` 和 `curriculum/exercises/`，并更新 `curriculum/manifest.json`。
