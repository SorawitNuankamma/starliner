
This chapter will explain overall surface concept of programming in easy to read form, but not too deep
and this will have self experiment that student can run and see their own code in action
have fun

## 1.1  How's Computer Process And Keep Data

computer are base on calculator, we use calculator daily to calculate stuff
computer can also, keep information or value

computer keep a value in a memory device, such as RAM (random access memory) or SSD, Hard Disk

this is a simply model of memory in computer, which is a memory unit and a value that their store, 

RAM or SSD may have many memory unit

| mem name | value |
| -------- | ----- |
| x0       | 10    |
| x1       | 20    |
| x2       | 30    |
 
and computer will use those value to processing data using instruction set like

```
SET x0 10 
SET x1 20
SET x2 15
ADD x0 x1 x2
```

This instruction set tell exactly what computer should do, line by line
1. set value of memory x0 to 10
2. set value of memory x1 to 20
3. set value of memory x2 to 0
4. add a number from x0 and x1, store value to x2

this is how simply computer work, but do we have to know memory name every time or instruction set?

in the early day of computing we use to do that, but the system are hard to maintained, so we invent a program language that can be easier understand by human that can convert itself into instruction set of computer by the process that be know of Complied code

###### 1.2 Computer Programming Concept

processor instruction are designed to be easily read by computer. but not human

so, computer processor manufacture invent a programming language that can be easily understand by human

python code
```
a = 10
b = 20
c = a+b
```

Which is equivalent to instruction set of 

Instruction set
```
SET x0 10 
SET x1 20
SET x2 0
ADD x0 x1 x2
```

this is for example only, instruction set are vary on processor

The concept of programming is
1. Write code and save code
2. Run program to make human code to instruction set
3. Computer using instruction set

write code -> save code -> compile code -> computer process

###### 1.3 Let's Code Hello world

how do we run code. firstly we need interface to connect to computer process
most of the time we use program that have user interface like web browser, or general program

in this case of run a program, most convenient way is to use a terminal

terminal is a text-command program that using text to tell computer what to do. in the view of normal user that look hard to use, but as programmer, using terminal is a core skill that we need to have to be proficient in programming

we will use terminal to run code in our computer, firstly open the terminal via vscode

basic of Command Prompt
cd : show all file in current directory
cd /path/ : change current directory
go into vscode, create a file name hello.py

```
print("hello world")
```

run the program using this command

```
python hello.py
```

this command has 2 part,  python and hello.py, firstly, we type python that tell command prompt to look for python program, this python program we will use it to complied python code into instruction set that computer to understand

the second part is hello.py, which is tell the location of the file

overall, this command tell computer to use program python to execute code hello.py

```
F:\Learning\starliner>python hello.py
Hello World
```

That is. our first program

###### 1.4 Input And Output
another terminal ability is it can take input and display output, our previous python program is 
display output using function print()

python have the way to take input using function input()
by calling this function, terminal will wait for user to type something into terminal screen and press enter

the result of the action of call this function is the string of word that user input

```
message = input()
print(f'my message is {message}')
```

###### 1.5 Add A Number
Now, we already learn about input and output, let's learn about what programming can do
in math, variable is a value that can be anything, 

programming variable have a similar concept, 

variable, in term of a computer programming, is a thing that can store any value such as number, string, logical value as boolean

```
number = 1
text= "hello"
is_true = True
```

each variable have their own operation such as
number : +,-,*,/
string : concat access
boolean: and or not

🧪 Self Experiment : run this code and look at it output
```
number = (1+2)*3
text = "aa" + "bb"
is_something = not (true and false)
```

###### 1.6 Store item in the list
in programming language, there is a variable type that can store many value

python have the thing call List

Self Experiment : run this code and look at it output
```
numbers = []
numbers.push(13)
print(numbers[0])
print(numbers)

```

###### 1.7 Using String
One of the most valuable aspect of program is string, 

why do we call string? because it is an connection of a character
the advantage of using string is to make code more readable, because after all, programming language is designed to make human readable 


```
first_name = "sorawit"
last_name = "nuankamma"

my_full_name = first_name + last_name
print(f'my full name is {my_full_name}')
```

###### 1.8 Keep item and label of item using Dictionary
List only keep item, but not the name of the item,

also in most programming language, have a type of variable that can store many value and name of each variable 

in python, this type of variable is called Dictionary, and what it can do we will find out later

```
car = {
	'toyota':'japan',
	'ford':'america'
}
print(car['toyota'])
print(car['ford'])
```

###### 1.9 Reuse Code Using Function
most of the time, we want to write code at one place and reuse it many place,

this concept in programming is called function, a re-usable module of work that can take input and give output
```
def add_a_three_number(a,b,c):
	result = a+b+c
	return result

number_sum = add_a_three_number(10,20,3)
print(number)
```

###### 1.10 Using Loop to repeat 
what if we want that code to run more than 1 time in single execution

we using loop,
```
let numbers = [1,2,3,4,5,6]
for num in numbers
	print(f'number {num}')
```

experiment 
###### 1.11 Program Thing As A Object
In Programming, one of the biggest concept is object

object in simple is a variable that have its own variable and have their own function (method)

###### Excercise

1. 
