/*
 A recursive function is a function that calls itself.
 -> since this creates an endless loop you need to find a way
 to terminate. That is using a return statement and if <condition>
*/
/*
function salaryGrossPromptProcess() {
    let gross = prompt("Enter your gross salary");
    if (isNaN(gross) === false) {
        // condition is met
        console.log(`You entered this amount ${gross} exiting`);
        return; // exit a function
    }
    alert(
        `Invalid gross salary entered. enter a number for gross salary.try again`,
    );
    salaryGrossPromptProcess();
}
salaryGrossPromptProcess();
*/

/*
 1. remove the alert =>
 2. initial prompt should be enter your gross salary
 3. any prompt after that should be `Invalid gross salary entered. enter a  number for gross salary. try again`
*/

function salaryGrossPromptProcess(message = "Enter your gross salary") {
    let gross = prompt(message);
    if (isNaN(gross) === false) {
        // condition is met
        console.log(`You entered this amount ${gross} exiting`);
        return; // exit a function
    }
    
    return salaryGrossPromptProcess("Invalid gross salary entered. enter a number for gross salary. try again");
}
salaryGrossPromptProcess();

/*
 create a function to calculate the factorial of a number.
 the function takes a parameter
 -@param1 which is a number and returns the factorial of the number
 example. factorial(5) output 120
 // 5*4*3*2*1
 // check the number entered is greater 1 ->
 // hint use a recursive function ->
*/

function factorial(number) {

    if (number <= 1) {
        return 1;
    }
    // recursive case: number * factorial of (number - 1)
    return number * factorial(number - 1);
}

console.log(factorial(5)); // 120
// 5 * 4 * 3 * 2 * 1 = 120
