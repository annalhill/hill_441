## Week Three, HW-3
## Hill, MART 441

[link to HW-3 Webpage](https://annalhill.github.io/hill_441/HW-3/main.html)

#### Reading:
1.
Eloquent Javascript- Chapter One: Values, Types and Operators
Javascript Guides- Grammar and Types, Expressions and Operators
2.
Eloquent Javascript- Chapter Two: Program Structure
Javascript Guides- Control Flow and Error Handling, Loops and Iteration

#### Notes:
1. Numbers: Just as you'd expect, you can use addition, subtraction, multiplication, and division
  - Binary numbers
  - Numbers can be written as stand alone, they can also be used in the context of console.log(); which allows them to be used in the context of words as well

2. Strings: Represent context
  - "", ''
  - Strings can only be added together, i.e. "cat" + "woman"

3. Unary Operations
  - typeof: names what type of value you are using

```
console.log( typeof 1);
```

4. Boolean:
  - Two values that can be returned (true versus false)
  - NaN- Not a Number (Will never be equal to itself)

```
> // Greater than
< // Less than
>= // Greater than or equal to
<= // Less than or equal to
== // Equal to
!= // Not equal
&& // Logical and, Only true if both values are true or equal
|| // Logical or, true is either values given are true
```

  - Ternary: operates on three values including ! and :
    - Conditional operator
    - true spits out the middle values
    - false picks the right values

```
console.log(true ? 1 : 2);
// returns 1
```

5. Loops for Days
  - loops generally involve variables which can be called in by var
  - You can use .length to tell the function to show the number of characters used in the ""

```
var nameThatWillBeUsedInEquation = "valueThatItEquals";

console.log(nameThatWillBeUsedInEquation.length);
console.log(nameThatWillBeUsedInEquation + 10 .length);
```

  - looping a Triangle: Same as above, simply use the initial variable and include it as a shortcut throughout the triangle equation
  - FizzBuzz: Prints out numbers 1- 100
    - Excludes numbers divisible by 3 (this should print "Fizz")
    - Excludes numbers divisible by 5, and not 3 (this should print out "buzz")
  - Chess Board:
    - Represents an 8x8 grid
    - size = 8 to change the grid once you have it working (must work for any size)


#### Process
- Problem one was fairly straight forward, simply creating print statements that identified the type of value that was being used and printing it out in the console.
- It was a process trying to figure out how the loping triangle function should work simply because it could be a simple equation or a more complicated one. Because of this confusion, I did two versions, one that easily spits out 1-10 and the other that required more complicated computations to get the same results.
- FizzBuzz was by far the hardest equation to work out
  - By using the console. log function paired with multiple if and else if statements, I was able to print something but getting the equations to print out in the correct order was a bit more difficult 
  - By creating a result variable, you can then define whether that variable is divisible by values or if not, have the log print out alternative statements.
