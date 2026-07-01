const pi = 3.142 // this variable is in the global scope
// meaning it can be accessed from anywhere in the code

function areaOfCircle(r) {
  return pi * r * r; // area of a circle
  //global scope
  // any funnction inside {} is in a block scope, meaning it can only be accessed inside the function
} 

function perimeterOfCircle(r) {
  return 2 * pi * r; // perimeter of a circle
  //global scope
}

function circle(r) {
    // global scope
    const area = areaOfCircle(r); // area of a circle
    const perimeter = perimeterOfCircle(r); // perimeter of a circle

    console.log(`for a circle of radius ${r}, the area is ${area} and the perimeter is ${perimeter}`);
}

function testM() {
    let m = "hello world";
    console.log(m); //hello world
    if (true) {
        let m = "hello from inside the block";
        console.log(m); //hello from inside the block
    }
}



//
let clicked = 0; //global scope
//global scope variable is accessible anywhere in the code
function increment() {
    clicked = clicked +1;
    console.log("clicked value is", clicked);
    updateClickValue();
}

function decrement() {
    clicked = clicked - 1;
    console.log("clicked value is", clicked);
    updateClickValue();
}

function updateClickValue() {
    document.getElementById("click_value").innerHTML = clicked;
}



/*
{
//block code
}
-> if (){} ,function(){} , for(){} , while(){} , do{}while(){} are all block codes
-> any variable declared inside a block code is in a block scope, 
meaning it can only be accessed inside the block code
-> any variable declared outside a block code is in a global scope, 
meaning it can be accessed anywhere in the code
rule is if you are looking for a variable check the scope going from inside out, 
if you are inside a block code check the block scope first, if not found check the global scope 
-> you cannot use same variable name in the same scope, but you can use same variable name in different scopes
*/

/*
/*
  PROCEDURE

  1. Declare a variable "name" in the global scope.

  2. Create a function called sayMyName().
     - Inside it, console.log the name and its line number.
     - Remember to call the function at the end.

  3. Inside the function, at the very start, declare a variable "name"
     and assign it a different value. Print the name and its line number.

  4. Create an if statement inside the function with a truthy condition
     of your choice. Inside the block, console.log the name and its line number.

  5. Inside that same if statement, at the start, declare a variable "name"
     and give it a new value. Then console.log the name and its line number.

  6. Inside the function, after the if block, console.log the name and
     its line number.

  7. Try declaring the same variable "name" twice in the same scope,
     and observe what happens.

*/

// step 1: declare "name" in the global scope
let name = "Julius";

// step 2: create the function sayMyName (and remember to call it below)
function sayMyName() {

  // step 3: declare "name" inside the function at the start, give it a different
  //         value, then print the name and its line number
  let name = "Irungu";
  console.log(`My name is ${name}, line 105`);

  // step 4: if statement with a truthy condition — log name and its line inside the block
  if (true) {

    // step 5: at the start of the if block, declare "name" with a new value,
    //         then log the name and its line number
    let name = "Murigi";
    console.log(`My name is ${name}, line 113`);
  }

  // step 6: inside the function, after the if block, log name and its line number
  console.log(`My name is ${name}, line 117`);
}

// step 2 (cont.): call the function so it actually runs
sayMyName();

// bonus: back in the global scope — proves the global "name" was never changed
console.log(`My name is ${name}, line 124`);

// step 7: try declaring the same variable name in the SAME scope — this is a
//         SyntaxError ("Identifier 'name' has already been declared")

Let name = "John"; // SyntaxError: Identifier 'name' has already been declared
