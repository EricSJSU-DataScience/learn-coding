/* =======================================================================
   CODE CAMP — CURRICULUM DATA
   =======================================================================
   This is the ONLY file you need to touch to grow the course. index.html
   is a generic "engine" that reads whatever is in CURRICULUM below and
   builds the whole site from it — sidebar, progress bar, editor, grading.
   You never need to edit index.html to add a lesson, an exercise, or a
   whole new unit.

   STRUCTURE
     CURRICULUM              -> array of "units" (chapters), in teaching order
       unit.id                 unique short id, e.g. "unit-3"
       unit.title               shown as a section header in the sidebar
       unit.lessons               array of lessons in this unit, in order
         lesson.id                  UNIQUE across the whole file. Once a kid
                                     has started a lesson, never change its
                                     id — progress is saved by id, so a
                                     changed id looks like a brand-new,
                                     unfinished lesson.
         lesson.title                shown in the sidebar and page header
         lesson.blurb                 one-line summary under the title
         lesson.concept                 HTML explanation of the concept
         lesson.example                   a plain Python code string —
                                           syntax-highlighted automatically,
                                           not run, just for reading
         lesson.notes                       HTML bullet points / extra tips
         lesson.exercises                     array of ONE OR MORE exercises
                                               (see template below). Having
                                               more than one just means more
                                               practice for the same concept.

     exercise.id               UNIQUE across the WHOLE file (not just this
                                lesson). Same rule as lesson.id: never
                                change it once a kid may have used it.
     exercise.title             short exercise name
     exercise.desc                HTML description of what to do
     exercise.starter               starter code shown in the editor
     exercise.stdin (optional)        pre-filled input() answers, as a
                                       single string like "line1\nline2\n"
                                       — only needed if the exercise calls
                                       input(). See lesson "input" for a
                                       real example, and its "concept" text
                                       for how to explain this to students.
     exercise.hint                      a nudge, shown when "Hint" is clicked
     exercise.check                       Python SOURCE CODE, as a string,
                                           that grades the answer. It runs
                                           after the student's code and has
                                           access to:
                                             _stdout -> everything the
                                                        student's code
                                                        printed
                                             any variable/function the
                                             student defined (by name)
                                           It MUST set a variable called
                                           `result`:
                                             result = "PASS"              on success
                                             result = "some hint message" on failure

   ------------------------------------------------------------------
   COPY-PASTE TEMPLATE: a new exercise (goes in a lesson's "exercises" array)
   ------------------------------------------------------------------
   {
     id: "some-unique-exercise-id",
     title: "Exercise name",
     desc: `What to do. Use <code>backtick code</code> for inline code.`,
     starter: `# starter code the student sees\n`,
     hint: `A helpful nudge, not the full answer.`,
     check: `
   out = _stdout.strip()
   if out == "expected answer":
       result = "PASS"
   else:
       result = f"Expected 'expected answer' but got '{out}'"
   `
   }

   ------------------------------------------------------------------
   COPY-PASTE TEMPLATE: a new lesson (goes in a unit's "lessons" array)
   ------------------------------------------------------------------
   {
     id: "some-unique-lesson-id",
     title: "Lesson title",
     blurb: "One-line summary.",
     concept: `<p>Explain the concept here. You can use <code>code</code>,
     <b>bold</b>, and <ul><li>lists</li></ul>.</p>`,
     example: `print("a short, readable code example")`,
     notes: `<ul><li>A quick tip.</li><li>Another quick tip.</li></ul>`,
     exercises: [
       // one or more exercise objects — see template above
     ]
   }

   ------------------------------------------------------------------
   COPY-PASTE TEMPLATE: a whole new unit (append to CURRICULUM at the bottom)
   ------------------------------------------------------------------
   {
     id: "unit-6",
     title: "Unit 6: Your New Topic",
     lessons: [
       // one or more lesson objects — see template above
     ]
   }
   ======================================================================= */

const CURRICULUM = [
{
  id: "unit-1",
  title: "Unit 1: Fundamentals",
  lessons: [
    {
      id: "hello",
      title: "Say Hello to Python",
      blurb: "print(), strings, and comments.",
      concept: `<p>Python programs are made of instructions the computer runs one at a time, top to bottom. The most basic instruction is <code>print()</code> — it displays text on the screen.</p>
      <p>Text in Python is called a <b>string</b>, and it always goes inside quotes — either <code>"double quotes"</code> or <code>'single quotes'</code>.</p>
      <p>Anything after a <code>#</code> is a <b>comment</b>. Python ignores comments completely — they're just notes for humans.</p>`,
      example: `print("Hello, world!")   # this line prints text to the screen
# Comments start with a hash and are ignored by Python`,
      notes: `<ul>
        <li><code>print()</code> shows whatever is inside the parentheses.</li>
        <li>Strings need matching quotes on both ends.</li>
        <li>Use comments to leave yourself notes.</li>
      </ul>`,
      exercises: [
        {
          id: "hello-1",
          title: "Print a greeting",
          desc: `Use <code>print()</code> to print exactly this line: <code>Hello, Python!</code>`,
          starter: `# Write your code below\n`,
          hint: `Use print("Hello, Python!") — don't forget the quotes and the exclamation point!`,
          check: `
out = _stdout.strip()
if out == "Hello, Python!":
    result = "PASS"
else:
    result = f"Expected 'Hello, Python!' but got '{out}'"
`
        },
        {
          id: "hello-2",
          title: "Bonus: two lines",
          desc: `This is a bonus exercise — it shows how a lesson can have more than one exercise. Print two lines: <code>Hello, Python!</code> then <code>I'm learning to code.</code>`,
          starter: `# Print two lines\n`,
          hint: `Two separate print() calls, one per line.`,
          check: `
out = _stdout.strip()
if out == "Hello, Python!\\nI'm learning to code.":
    result = "PASS"
else:
    result = f"Expected two lines: 'Hello, Python!' then \\"I'm learning to code.\\" — got: {out!r}"
`
        }
      ]
    },
    {
      id: "variables",
      title: "Variables & Data Types",
      blurb: "str / int / float, and the = sign.",
      concept: `<p>A <b>variable</b> is a name that stores a value, created with <code>=</code>. Python has several basic data types:</p>
      <ul>
        <li><code>str</code> — text, e.g. <code>"Ada"</code></li>
        <li><code>int</code> — whole numbers, e.g. <code>13</code></li>
        <li><code>float</code> — decimal numbers, e.g. <code>5.2</code></li>
      </ul>
      <p>You can print several values at once by separating them with commas inside <code>print()</code>.</p>`,
      example: `name = "Ada"        # a string
age = 13             # an int
height = 5.2         # a float
print(name, age, height)`,
      notes: `<ul>
        <li>Variable names can use letters, numbers, and underscores, but can't start with a number.</li>
        <li><code>=</code> means "store this value," not "equals" like in math.</li>
        <li><code>print(a, b, c)</code> prints all three separated by spaces.</li>
      </ul>`,
      exercises: [
        {
          id: "variables-1",
          title: "Build a mini profile",
          desc: `Create three variables: <code>name</code> (a string), <code>age</code> (an int), and <code>favorite_number</code> (an int or float). Then print all three with one <code>print()</code> call, in that order.`,
          starter: `name = "Type your name"
age = 0
favorite_number = 0

print(name, age, favorite_number)
`,
          hint: `Change the values, keep the types (name is text in quotes, age and favorite_number are numbers with no quotes), and make sure print(name, age, favorite_number) is the last line.`,
          check: `
out = _stdout.strip()
try:
    ok_types = isinstance(name, str) and len(name.strip()) > 0 and isinstance(age, int) and isinstance(favorite_number, (int, float))
except NameError:
    ok_types = False
if not ok_types:
    result = "Make sure you defined name (a string), age (an int), and favorite_number (int or float)."
elif name.strip() == "Type your name":
    result = "Replace the placeholder text with your own name."
elif not out:
    result = "Nothing was printed — add print(name, age, favorite_number)."
else:
    result = "PASS"
`
        }
      ]
    },
    {
      id: "input",
      title: "Input & Type Conversion",
      blurb: "input(), int(), float().",
      concept: `<p><code>input()</code> pauses the program and waits for the user to type something, then returns it — always as a <b>string</b>, even if they typed a number.</p>
      <p>To use that text as a number, convert it with <code>int()</code> or <code>float()</code>.</p>
      <p><b>Good to know:</b> on this site, exercises that use <code>input()</code> can't wait for a real person to type — instead we pre-fill the answer for you behind the scenes, so the checker can test your code automatically.</p>`,
      example: `name = input("What is your name? ")
print("Hi " + name + "!")`,
      notes: `<ul>
        <li><code>input()</code> always returns a string.</li>
        <li><code>int(input())</code> converts the typed text straight into a whole number.</li>
        <li>You can join strings with <code>+</code>, as long as both sides are strings.</li>
      </ul>`,
      exercises: [
        {
          id: "input-1",
          title: "Personalized greeting",
          desc: `Use <code>input()</code> to ask <code>"What is your name? "</code>, store it in a variable called <code>name</code>, then print: <code>Hello, &lt;name&gt;! Welcome to Python.</code>`,
          starter: `# Ask for the user's name, then print a greeting
name = input("What is your name? ")

# Now print: Hello, <name>! Welcome to Python.
`,
          stdin: "Ada\n",
          hint: `print("Hello, " + name + "! Welcome to Python.")`,
          check: `
out = _stdout.strip()
expected = "Hello, Ada! Welcome to Python."
if expected in out:
    result = "PASS"
else:
    result = f"Expected your output to include '{expected}' — got: {out!r}"
`
        }
      ]
    },
    {
      id: "operators",
      title: "Operators & Math",
      blurb: "+ - * / % // **",
      concept: `<p>Python supports the usual math operators, plus a couple of special ones:</p>
      <ul>
        <li><code>+ - * /</code> — add, subtract, multiply, divide (always gives a float)</li>
        <li><code>%</code> — remainder (modulo)</li>
        <li><code>//</code> — floor division (divides and drops the decimal)</li>
        <li><code>**</code> — power (exponent)</li>
      </ul>`,
      example: `a = 7
b = 2
print(a + b, a - b, a * b, a / b, a % b, a // b, a ** b)`,
      notes: `<ul>
        <li><code>/</code> always returns a float, even 8 / 2 gives 4.0.</li>
        <li><code>//</code> rounds down to the nearest whole number.</li>
        <li><code>**</code> is exponent: 2 ** 3 is 8.</li>
      </ul>`,
      exercises: [
        {
          id: "operators-1",
          title: "Rectangle area",
          desc: `Given <code>width = 6</code> and <code>height = 3</code>, compute the area and print just the number.`,
          starter: `width = 6
height = 3

# Compute the area and print it
`,
          hint: `area = width * height, then print(area)`,
          check: `
out = _stdout.strip()
if out == "18":
    result = "PASS"
else:
    result = f"Expected 18 but got '{out}'"
`
        }
      ]
    }
  ]
},
{
  id: "unit-2",
  title: "Unit 2: Control Flow",
  lessons: [
    {
      id: "if",
      title: "Making Decisions with if",
      blurb: "if / elif / else, comparisons.",
      concept: `<p><code>if</code> lets your program choose what to do based on a condition. Conditions use comparisons like <code>== != &lt; &gt; &lt;= &gt;=</code>, which give back <code>True</code> or <code>False</code>.</p>
      <p>You can chain more checks with <code>elif</code> ("else if"), and catch everything else with <code>else</code>.</p>
      <p><b>Indentation matters</b> — the lines inside an <code>if</code> block must be indented consistently.</p>`,
      example: `score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")`,
      notes: `<ul>
        <li><code>==</code> checks equality; <code>=</code> assigns a value. Don't mix them up!</li>
        <li>Only one branch of an if/elif/else ever runs.</li>
        <li>Indent with 4 spaces inside each block.</li>
      </ul>`,
      exercises: [
        {
          id: "if-1",
          title: "Even or odd",
          desc: `Given <code>number = 7</code>, print <code>"Even"</code> if it's even, otherwise print <code>"Odd"</code>.`,
          starter: `number = 7

# Print "Even" if number is even, otherwise print "Odd"
`,
          hint: `Use number % 2 == 0 to check if a number is even.`,
          check: `
out = _stdout.strip()
if out == "Odd":
    result = "PASS"
else:
    result = f"Expected 'Odd' but got '{out}'"
`
        }
      ]
    },
    {
      id: "for",
      title: "Loops Part 1",
      blurb: "for and range().",
      concept: `<p>A <code>for</code> loop repeats a block of code once for each item in a sequence. <code>range(n)</code> generates the numbers <code>0, 1, 2, ... n-1</code> — perfect for "do this n times."</p>`,
      example: `for i in range(3):
    print("Lap", i)`,
      notes: `<ul>
        <li><code>range(5)</code> gives 0, 1, 2, 3, 4 (five numbers, starting at 0).</li>
        <li><code>range(1, 6)</code> gives 1 through 5.</li>
        <li>The loop variable (like <code>i</code>) changes every time through the loop.</li>
      </ul>`,
      exercises: [
        {
          id: "for-1",
          title: "Count to five",
          desc: `Use a <code>for</code> loop with <code>range()</code> to print the numbers 1 through 5, each on its own line.`,
          starter: `# Use a for loop with range() to print 1 through 5
`,
          hint: `for i in range(1, 6):\n    print(i)`,
          check: `
out = _stdout.strip()
if out == "1\\n2\\n3\\n4\\n5":
    result = "PASS"
else:
    result = f"Expected 1 to 5, each on its own line. Got: {out!r}"
`
        }
      ]
    },
    {
      id: "while",
      title: "Loops Part 2",
      blurb: "while, break, continue.",
      concept: `<p>A <code>while</code> loop repeats as long as a condition stays <code>True</code>. You control when it stops — usually by changing a variable inside the loop.</p>
      <p><code>break</code> exits the loop immediately. <code>continue</code> skips to the next round without running the rest of the loop body.</p>`,
      example: `n = 0
while n < 5:
    print(n)
    n += 1`,
      notes: `<ul>
        <li>Forgetting to update the variable causes an infinite loop!</li>
        <li><code>n += 1</code> is shorthand for <code>n = n + 1</code>.</li>
        <li>Use <code>break</code> to stop early, <code>continue</code> to skip ahead.</li>
      </ul>`,
      exercises: [
        {
          id: "while-1",
          title: "Countdown",
          desc: `Starting with <code>n = 5</code>, use a <code>while</code> loop to print <code>n</code>, then decrease it, stopping once it reaches 0. After the loop, print <code>"Liftoff!"</code>. Each value should be on its own line.`,
          starter: `n = 5
# Use a while loop to print n, then decrease it, until it reaches 0
# After the loop, print "Liftoff!"
`,
          hint: `while n > 0:\n    print(n)\n    n -= 1\nprint("Liftoff!")`,
          check: `
out = _stdout.strip()
if out == "5\\n4\\n3\\n2\\n1\\nLiftoff!":
    result = "PASS"
else:
    result = f"Expected 5,4,3,2,1,Liftoff! each on its own line. Got: {out!r}"
`
        }
      ]
    }
  ]
},
{
  id: "unit-3",
  title: "Unit 3: Collections",
  lessons: [
    {
      id: "lists",
      title: "Lists",
      blurb: "indexing, .append(), len().",
      concept: `<p>A <b>list</b> stores multiple values in order, written with square brackets. Each item has an <b>index</b> starting at 0.</p>
      <p><code>.append(x)</code> adds an item to the end. <code>len(list)</code> tells you how many items it has.</p>`,
      example: `fruits = ["apple", "banana", "cherry"]
fruits.append("mango")
print(fruits[0], len(fruits))`,
      notes: `<ul>
        <li><code>fruits[0]</code> is the first item, <code>fruits[-1]</code> is the last.</li>
        <li>Lists can grow and shrink — they're mutable.</li>
        <li><code>for item in my_list:</code> loops over every item.</li>
      </ul>`,
      exercises: [
        {
          id: "lists-1",
          title: "Sum the numbers",
          desc: `Given <code>numbers = [4, 8, 15, 16, 23, 42]</code>, add them all up and print the total.`,
          starter: `numbers = [4, 8, 15, 16, 23, 42]

# Add up all the numbers and print the total
`,
          hint: `Use total = sum(numbers), or a for loop that adds each number to a running total. Then print(total).`,
          check: `
out = _stdout.strip()
if out == "108":
    result = "PASS"
else:
    result = f"Expected 108 but got '{out}'"
`
        }
      ]
    },
    {
      id: "strings",
      title: "Strings",
      blurb: "slicing, .upper(), methods.",
      concept: `<p>Strings act a lot like lists of characters — you can index and slice them the same way. <code>word[0:3]</code> grabs a chunk from index 0 up to (not including) index 3.</p>
      <p>Strings also have handy built-in methods like <code>.upper()</code>, <code>.lower()</code>, and <code>.strip()</code>.</p>`,
      example: `word = "python"
print(word[0:3], word.upper(), len(word))`,
      notes: `<ul>
        <li>Slicing: <code>word[start:end]</code>, end is not included.</li>
        <li><code>.upper()</code> / <code>.lower()</code> change case.</li>
        <li>Strings are immutable — methods return a <i>new</i> string.</li>
      </ul>`,
      exercises: [
        {
          id: "strings-1",
          title: "Shout it",
          desc: `Given <code>message = "we did it"</code>, print the message in ALL CAPS.`,
          starter: `message = "we did it"

# Print the message in ALL CAPS
`,
          hint: `Use message.upper()`,
          check: `
out = _stdout.strip()
if out == "WE DID IT":
    result = "PASS"
else:
    result = f"Expected 'WE DID IT' but got '{out}'"
`
        }
      ]
    }
  ]
},
{
  id: "unit-4",
  title: "Unit 4: Functions & Dictionaries",
  lessons: [
    {
      id: "functions",
      title: "Functions",
      blurb: "def, parameters, return.",
      concept: `<p>A <b>function</b> is a reusable block of code. Define one with <code>def name(parameters):</code>. Use <code>return</code> to send a value back to whoever called the function.</p>
      <p>Defining a function doesn't run it — you still need to <i>call</i> it, like <code>add(2, 3)</code>.</p>`,
      example: `def add(a, b):
    return a + b

print(add(2, 3))`,
      notes: `<ul>
        <li>Parameters are the names inside the parentheses; arguments are the actual values you pass in.</li>
        <li>A function without <code>return</code> gives back <code>None</code>.</li>
        <li>You can call a function as many times as you like.</li>
      </ul>`,
      exercises: [
        {
          id: "functions-1",
          title: "Double it",
          desc: `Write a function <code>double(x)</code> that returns <code>x</code> doubled. Then print <code>double(21)</code>.`,
          starter: `def double(x):
    # return x doubled
    pass

print(double(21))
`,
          hint: `Inside the function: return x * 2`,
          check: `
out = _stdout.strip()
try:
    ok = double(10) == 20 and double(0) == 0 and double(-3) == -6
except Exception:
    ok = False
if out != "42":
    result = f"Expected print(double(21)) to show 42, got '{out}'"
elif not ok:
    result = "double() doesn't look right for other numbers — make sure it always returns x * 2."
else:
    result = "PASS"
`
        }
      ]
    },
    {
      id: "dicts",
      title: "Dictionaries",
      blurb: "key → value lookups.",
      concept: `<p>A <b>dictionary</b> stores key → value pairs, written with curly braces. Instead of a numeric index, you look things up by key.</p>`,
      example: `student = {"name": "Ada", "grade": 9}
print(student["name"], student.get("grade"))`,
      notes: `<ul>
        <li>Keys must be unique; adding the same key again overwrites the value.</li>
        <li><code>dict[key]</code> errors if the key doesn't exist; <code>dict.get(key)</code> returns <code>None</code> instead.</li>
        <li>Values can be any type — strings, numbers, even lists.</li>
      </ul>`,
      exercises: [
        {
          id: "dicts-1",
          title: "Grade lookup",
          desc: `Given <code>grades = {"Ada": 92, "Sam": 81, "Lee": 74}</code>, print Sam's grade.`,
          starter: `grades = {"Ada": 92, "Sam": 81, "Lee": 74}

# Print Sam's grade
`,
          hint: `print(grades["Sam"])`,
          check: `
out = _stdout.strip()
if out == "81":
    result = "PASS"
else:
    result = f"Expected 81 but got '{out}'"
`
        }
      ]
    }
  ]
},
{
  id: "unit-5",
  title: "Unit 5: Final Project",
  lessons: [
    {
      id: "final",
      title: "Final Project",
      blurb: "Combining everything: the guess-the-number checker.",
      concept: `<p>Time to combine variables, <code>input()</code>, type conversion, and <code>if</code>/<code>elif</code>/<code>else</code> into one program: a number-guessing checker.</p>
      <p>This exercise checks a single guess against a secret number. Afterwards, in Colab, you'll extend this into the <i>full</i> game — looping with <code>while</code> until the player guesses correctly, and counting how many tries it took.</p>`,
      example: `secret = 7
guess = int(input("Guess the number (1-10): "))
if guess == secret:
    print("You got it!")
elif guess < secret:
    print("Too low!")
else:
    print("Too high!")`,
      notes: `<ul>
        <li>Remember: <code>input()</code> gives you a string — convert it with <code>int()</code> before comparing to a number.</li>
        <li>This is the seed of the full guessing game you'll build next in Colab, wrapped in a <code>while</code> loop.</li>
      </ul>`,
      exercises: [
        {
          id: "final-1",
          title: "Guess-the-number checker",
          desc: `The secret number is <code>7</code>. Read the player's guess with <code>input()</code>, convert it to an <code>int</code>, and print <code>"Too low!"</code>, <code>"Too high!"</code>, or <code>"You got it!"</code> depending on the guess.`,
          starter: `secret = 7

# 1. Read the player's guess with input() and convert it to an int
# 2. Compare it to secret and print "Too low!", "Too high!", or "You got it!"
`,
          stdin: "5\n",
          hint: `guess = int(input("Guess the number (1-10): ")) — then use if/elif/else comparing guess to secret.`,
          check: `
out = _stdout.strip()
if "Too low!" in out:
    result = "PASS"
else:
    result = f"With a guess of 5 against a secret of 7, expected 'Too low!' in the output. Got: {out!r}"
`
        }
      ]
    }
  ]
}
];
