/*
1. exits code
2. returns any required data
*/

function sayMyName() {
    let first_Name = "Julius"; // statement 1
    console.log(`First name is ${first_Name}`); //statement 2
    let second_Name = "Irungu"; // statement 3
    console.log(`Second name is ${second_Name}`); //statement 4
    let full_Name = `${first_Name} ${second_Name}`; // statement 5
    console.log(`Full name is ${full_Name}`); //statement 6
}

let sayMyNameValue = sayMyName();

console.log(`Function returned ${sayMyName}`);

/*
scenario 1:
    Leave it as it is and look at the results.
    - what happens

scenario 2:
    after the second statement inside the function
    put a return.
    - what happens (exits the function exactly where the return statement is)

scenario 3:
    after the fourth statement inside the function
    put a return.
    - what happens (exits the function exactly where the return statement is)

scenario 4:
    put a return statement anywhere inside your function and return
    a string of your choice

scenario 5:
    put a return statement anywhere inside your function and return
    a number of your choice

scenario 6:
    put a return statement anywhere inside your function and return
    a boolean of your choice
*/

// scenario 1
console.log(`Function returned ${sayMyNameValue}`)
// - what happens any function without a return statement 
// will return undefined

// // scenario 2
c