## Programming Foundations with Python

### 1. Introduction to Programming and Computers
1. Welcome to the course
    - Overview of course content and teaching method
    - Learning goals and expectations
2. How computers process information
    - How data is stored and processed
    - Role of the processor and instruction sets
3. What programming is
    - From human ideas to computer instructions
    - Role of programming languages
    - Overview of execution (interpreted vs compiled)
4. First program – “Hello World”
    - Running code from the command line
    - Producing output
5. Working with input and output
    - Reading user input
    - Showing results to the user
6. Simple arithmetic program
    - Adding two numbers
    - Storing results in memory
    - Short quiz
7. Storing multiple items
    - Concept of a list (sequence of items)
    - Short quiz
8. Storing data with labels
    - Concept of key-value pairs (dictionary)
    - Short quiz
9. Programs as objects
    - What objects are and why they are used
    - Short quiz
10. First problem-solving session
	- Small exercise combining input, output, variables, and lists/dictionaries

```
Display “Welcome to Programming” on the screen.
Ask the user’s name and greet them.
Add two numbers given by the user.
Store three favorite foods in a list and display them.
Create a dictionary with three items and print it.
Convert centimeters to meters based on user input.
Ask for a name and an age, then display them in one sentence.
Make a list of three friends and print the first one.
Count how many letters are in a given word from input.
Take three numbers, store them in a list, and print the sum.
```

### **2. Variables and Data**

1. Basic data types (numbers, true/false values)
2. Math and logical operations
3. Naming rules and variable scope
    - Quiz on scope effects
4. Practice problems
    - Recipe quantity calculator
    - Temperature converter

```
- Store your age in a variable and print it.
- Add two integers and print the result.
- Multiply a number by itself.
- Compare two numbers and display which is larger.
- Store a Boolean indicating if it’s raining.
- Convert a temperature from Celsius to Fahrenheit.
- Calculate the perimeter of a rectangle from user input.
- Ask the user for two numbers and output if the first is divisible by the second.
- Swap the values of two variables and print before/after.
- Determine if a number is even or odd.
```

### **3. Working with Data Structures**
1. Lists (sequences)
    - Adding, removing, accessing elements
    - Iterating over lists
    - Quiz: build and use a list
2. Strings (text)
    - Treating text as a sequence of characters
    - Combining and formatting text
    - Quiz: formatted message from input
3. Key-value storage (dictionaries)
    - Storing and retrieving values
    - Using as a counting or grouping tool
    - Quiz
4. Objects (conceptual)
    - Properties and actions of objects
    - Quiz: use a simple object in code
5. Practice problems
    - List within a dictionary
    - Simple text formatting task

```
- Create a list of 5 numbers and print the third.
- Reverse a list and print it.
- Count how many times a word appears in a given text.
- Store phone numbers with names in a dictionary and look up one.
- Combine two strings into one sentence.
- Find the longest word in a list.
- Store three items with their prices in a dictionary and display total cost.
- Replace one item in a list based on user input.
- Split a sentence into words and print them.
- Group names by their first letter using a dictionary.
```

### **4. Decision Making**

1. If and else statements
    - Quiz: simple condition checks
2. Multiple conditions with elif
3. Matching specific cases
4. Practice problems
    - Grading system
    - Leap year checker
    - Simple login simulation
```
- Ask the user’s age and tell if they can vote.
- Check if a number is positive, negative, or zero.
- Simple grade checker (A/B/C/F).
- Weather message based on input (“sunny”, “rainy”, etc.).
- Check if a number is divisible by both 2 and 3.
- Login system that checks username and password.
- Compare three numbers and print the largest.
- Check if a year is a leap year.
- Ask for two values and check if both are true.
- Quiz game that checks an answer and gives points.
```
### **5. Functions**

1. Why functions are used
2. Variable scope and functions
    - Experiment: using outside variables
3. Function parameters and arguments
    - Passing numbers vs collections
    - Quiz: identify pass-by-value vs pass-by-reference behavior
4. Returning values from functions
    - No return, return value, return collection
5. Practice problems
    - Break larger problem into functions
    - Calculator with separate operations

```
- Create a function that prints a welcome message.
- Function to add two numbers and return the sum.
- Function to find the square of a number.
- Function that takes a name and age and prints them.
- Function to check if a number is prime.
- Function to count vowels in a string.
- Function that returns the maximum of three numbers.
- Function that reverses a list.
- Function to calculate factorial of a number.
- Function that takes a list of numbers and returns their average.
```
### **6. Loops**
1. Concept of repetition in programming
2. For loops
    - Counting loops
    - Looping through collections
    - Quiz and small exercises
3. While loops
4. Loop controls (break, continue)
5. Practice problems
    - Multiplication table
    - Number guessing game
    - Pattern printing
```
- Print numbers from 1 to 10.
- Print even numbers from 1 to 20.
- Print all items in a list.
- Sum all numbers from 1 to N.
- Display a multiplication table for a given number.
- Print a triangle pattern of stars.
- Guess-the-number game with limited tries.
- Find the first number divisible by 7 in a range.
- Count down from 10 to 1.
- Loop through a dictionary and print key-value pairs.
```

### **7. Classes and Objects**
1. Objects as self-contained program units
2. Properties (data) and methods (actions)
3. Special initialization methods
4. Simple inheritance concept
5. Practice problems
    - Bank account simulation
    - Student record manager

```
- Create a class for a person with name and age.
- Class for a rectangle with method to calculate area.
- Bank account class with deposit and withdraw methods.
- Class for a student with method to display info.
- Class for a book with title and author, and method to display details.
- Class that counts how many objects have been created.
- Class for a car with method to start and stop.
- Class that stores a list of tasks and can add/remove them.
- Class for a timer that counts down from a given number.
- Class for a simple store inventory with method to add and check items.
```
### **8. Working with Files**

1. Saving data to a file
2. Reading data from a file
3. Simple data formats (text, CSV)
4. Practice problems
    - Save and load a list of items
    - Read and display a table from a file
```
- Save a sentence to a file.
- Read a file and display its contents.
- Append a line to an existing file.
- Save a list of numbers to a file.
- Read numbers from a file and sum them.
- Store names and scores in a file, then read and print them.
- Write a short paragraph to a file from user input.
- Read a file and count how many words it has.
- Save a dictionary to a file as plain text.
- Read a file line by line and print each line with a number.
```
### **9. Handling Errors**

1. Why errors happen
2. Responding to errors in code
3. Practice problems
    - Safe division calculator
    - File reader that handles missing files
```
- Handle division by zero in a calculator.
- Try to open a file that might not exist.
- Ask for a number and handle invalid input.
- Catch a specific error when converting text to number.
- Handle an index out of range when accessing a list.
- Handle missing keys in a dictionary lookup.
- Handle multiple errors in one block.
- Create a safe input function that retries until valid.
- Try reading a file and display a custom error if it fails.
- Combine try/except with a loop for repeated attempts.
```
### **10. Capstone Mini-Projects**

- To-do list app (store and retrieve tasks)
- Simple student grading system
- Guess-the-word game
- Budget tracker
```
1. To-do list app (store in memory).
2. Student grading system with averages.
3. Number guessing game with score.
4. Simple budget tracker.
5. Contact list with search.
6. Word frequency counter from a paragraph.
7. Inventory tracker for a shop.
8. Quiz game with multiple questions.
9. Simple password manager (text storage).
10. Hangman-style word game.
```