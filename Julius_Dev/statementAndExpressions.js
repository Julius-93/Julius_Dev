/*
Expression:
A pieace of code that produces a value.
expressions are evaluated to produce a value. 
They can be used as part of a statement or on their own.

  Examples:
   x > 5        => true or false
   10 + 11      => 21 (value)
   circleArea(5) => expression (function call)
   reference value -> n1
*/

function sayMyName() {
  console.log("Sam Mwangi");
}

let n1 = 23; // statement declaring a variable

console.log(n1);          // 23  (n1 = 23)
console.log(10 + 12);     // 22
console.log(n1 > 10);     // true  (n1 > 10 => true or false)
console.log(sayMyName()); // "Sam Mwangi" then undefined (function call => no return value) 
// function call is an expression that produces a value, 
// in this case "undefined" because the function does not return anything

//unlike expressions which return values, statements define actions to be performed.
// statement is at times a block of code

let n2 = 32; // statement declaring a variable. 
// statements whose action is to create a variable and store it in memory
// functions are also statements, they define a block of code that can be executed when called.
// for loops, if statements,function calls, while loops are also statements that define a block of code 
// to be executed when the condition is met.
console.log(sayMyName); // function reference value //statment
