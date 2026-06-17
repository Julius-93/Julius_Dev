## 1. What are JavaScript Variables
Think of it like a box with a label on it. You put a value inside the box and refer to it by its label whenever you need it.

Real life Example:
You have money x someone gives you money y then your total money z is equal to x+y

    let x=100
    let y =50
    let z = x+y
  

## 2. How Do Yo Declare Variables in JS
In JS we use `let`and `const` to declare variables

 1. `let`
 This is used when a variable can change
 
 2. `const`
This is used when a value doesn't change after it is set

## 3. What characters can be used?

 1. Variable names can use:

Letters: `a–z, A–Z`
Numbers: `0–9` (but not at the start)
Underscore: `_`
Dollar sign: `$`

Example:

    let user_name;
    let $price;
    let score1;

2. Can names start with numbers?
No. Variable names cannot start with a number.

Invalid:

    let 1score;  // wrong

Valid:

    let score1;  // correct

3. Are spaces allowed?
No. Variable names cannot contain spaces.

Invalid:

    let user name;  // wrong

Valid:

    let userName;   // correct

4. Can JavaScript keywords be used?

No. You cannot use reserved JavaScript keywords like:

    let
    const
    function
    if
    return

Invalid:

    let let = 5;   // wrong

5. Are variable names case-sensitive?
Yes. JavaScript treats uppercase and lowercase as different.

Example:

    let name = "John";
    let Name = "Mary";

    console.log(name); // John
    console.log(Name); // Mary

Examples of Valid Variable Names

    let age;
    let userName;
    let total_price;

Examples of Invalid Variable Names

    let 2age;        // starts with number
    let user name;   // contains space
    let const;       // keyword used
    

## 4. Variable Naming Styles

In JavaScript, developers use different naming styles to make code clean and easy to read.

1. Camel Case
How it is written:
 - The first word starts with lowercase
 - Every new word starts with a capital letter 
 - No spaces or symbols
                    
Examples:

    let userName;
    let totalPrice;

Common use:
Most commonly used in JavaScript variables and functions


 2. Pascal Case
How it is written:
 - Every word starts with a capital letter 
 - No spaces or symbols

Examples:

    let UserName;
    let TotalPrice;

Common use:
Used for classes and constructors in JavaScript

 - Snake Case
How it is written:
 - All letters are lowercase
 -  Words are separated by underscores _

Examples:

    let user_name;
    let total_price;

Common use:
Often used in databases, Python, and configuration files (less common in JavaScript)

## 5. Summary

JavaScript variables are used to store data that can be used and changed in a program. We declare variables using `let` and `const`, depending on whether the value should change or stay constant respectively. There are rules for naming variables, such as not starting with numbers, avoiding spaces, and not using reserved keywords. There are different naming styles like camel case, Pascal Case, and snake case.
