/*
 Types of functions:
 1. Named function:      has a name (e.g. areCircle)
 2. Anonymous function:  <without a name>
    -> a function can be assigned to a variable.
    -> a variable can reference a function.
*/

function areaOfACircle(r) {
  return 3.142 * r * r; // area of a circle
} // named function

let age = 23;

let samsAge = age; // copies the value -> samsAge = 23

let ac = areaOfACircle; // copies the reference to the function (no parentheses!)

/*
 Q: what is the value of ac and what is it?
 -> hint <use typeof>

 A: ac holds the function itself, not a returned value,
    because areCircle was written WITHOUT parentheses.
    So ac now points to the same function as areCircle.
*/

console.log(typeof ac); // "function"
console.log(ac(5));     // 78.55  -> 3.142 * 5 * 5

// Because ac references the function, you can call it just like areaOfACircle:
console.log(areaOfACircle(5)); // 78.55  (same result)

/*

  Exercise — turning a named function into an anonymous one
 
  1. create a function of your choice — use a named function
  2. assign that function to a variable
  3. equate your variable directly to the function definition
  4. remove the original function
  5. call the variable and call the original — make an observation
  6. remove the name of the function, since it is useless
  7. anonymous function <a function without a name>

 */

/*
function areaTriangle(base, height) {
    return 0.5 * base * height;
  }// step 1: create a named function

// step 4 remove the original function(commented out)
// step 5 call the variable and call the original — make an observation
//   ReferenceError: areaTriangle is not defined
  // The name of a function expression is only visible INSIDE the function
*/

/*
  let aT = function(base, height) {
    return 0.5 * base * height;
  }; // step 2: assign the function to a variable 
  // (no () — reference it, don't call it)

*/

let aT = (base, height) => {
    return 0.5 * base * height;
}
 // step 6: remove the name of the function, since it is useless
 // step 7: anonymous function <a function without a name>