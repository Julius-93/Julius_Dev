/*
Function allow you to write reusable bits of code.
To use DRY (Do Not Repeat Yourself) by using code block

/{code block}/
syntax:
function <name: variable name convention>(<parameters>) {
    /code block/ 
}

// Big rule, important rule.
-> A function executes only when called.
-> Calling a function is telling the
-> function to do its work.
*/

/*
Create a simple function that
when you call it, it alerts
you on the current time.
*/

function timeAlert() {
    const date = new Date();
    alert(`time stamp: ${date.toLocaleString("en-KE", 
        { timeZone: "Africa/Nairobi" 
        })}`
    );
}
/*
Call a function using the function name
followed by brackets ()
*/
timeAlert(); //call a function


/*
Area of a triangle
Area = 1/2 * base * height
*/
// base = undefined , height = undefined
function areaOfTriangle(base, height) {
    console.log(`base: ${base}, type: ${typeof base}`);
    console.log(`height: ${height}, type: ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(
        `For triangle with base ${base} and height ${height}, the area is ${area}`,
    );
}

/*
Scenario 1:
  Call areaOfTriangle and don't pass any arguments.
  areaOfTriangle();
  -> base is undefined, height is undefined, area is NaN

Scenario 2:
  Call the function with a base of 20 and no height.
  areaOfTriangle(20);
  -> base is 20, height is undefined, area is NaN

Scenario 3:
  Call the function with a base of 20 and a height of 30.
  areaOfTriangle(20, 30);
  -> base is 20, height is 30, area is 300

Scenario 4:
  Create variables base1 = 50 and height1 = 60, then pass them in.
  areaOfTriangle(base1, height1);
  -> base is 50, height is 60, area is 1500

Scenario 5:
  Create variables base2 = "hello" and height2 = true, then pass them in.
  areaOfTriangle(base2, height2);
  -> base is "hello" (string), height is true (boolean), area is NaN
*/


// Scenario 1: no arguments
// Both params are undefined  ->  area is NaN
console.log("Scenario 1: areaOfTriangle()");
areaOfTriangle();
 
// Scenario 2: base only, no height
// height is undefined  ->  area is NaN
console.log("\nScenario 2: areaOfTriangle(20)");
areaOfTriangle(20);
 
// Scenario 3: base and height
// Normal path  ->  0.5 * 20 * 30 = 300
console.log("\nScenario 3: areaOfTriangle(20, 30)");
areaOfTriangle(20, 30);
 
// Scenario 4: values passed via variables 
// Same as passing literals  ->  0.5 * 50 * 60 = 1500
console.log("\nScenario 4: areaOfTriangle(base1, height1)");
const base1 = 50;
const height1 = 60;
areaOfTriangle(base1, height1);
 
// Scenario 5: wrong types (string + boolean)
// Number("hello") is NaN, Number(true) is 1  ->  area is NaN (no error thrown)
console.log("\nScenario 5: areaOfTriangle(base2, height2)");
const base2 = "hello";
const height2 = true;
areaOfTriangle(base2, height2);
 