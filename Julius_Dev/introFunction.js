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
