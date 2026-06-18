/*
Numbers.
floating point number: <decimal place>
real numbers
positive
negative numbers
*/

let number1 = 100; // real number
console.log(number1);
let number2 = 50.398; // floating point number
console.log(number2);
let number3 = -40.5; // negative number
console.log(number3);
// biggest number 1.7976931348623157 × 10^308

/*
strings -> store sequence of characters
3 ways of creating a string
1. Double quote string
2. Single quote string
3. Back Ticks: <Template string>
   --> multiline string
*/

/*
special -> \t  > tab
newline -> \n
single quote escape -> \'
double quote escape -> \"
*/

let str1 = "Double \n quote I am James St Patrick"; // double quotes
console.log(str1);
let str2 = 'Single Quote I am James St Patrick'; // single quote
console.log(str2);
let str3 = `Back Ticks I am James St Patrick`; // back ticks
console.log(str3);
let str4 = "777"; // string or a number: <String>
console.log("777 is a string  Don't");
/* why do we have multiple ways of representing a string */
let str5 = 'Daniel said "777 is a number"';
// let str5 = 'James St Patrick said '777 is a number''  // this breaks!
let str6 = `
 Multi line string
 Multi line strings
 "" '' both single and double quotes
 Don't
`;
let str7 = 'Don\'t do this any more ';

/* Boolean represents true or false */
let jamesIsMale = true; // true value
console.log(jamesIsMale);

let jamesIsMarried = false;
console.log(jamesIsMarried);

/*
Null -> lack of a value
ie absence of a value
*/
let nullVal1 = null;
console.log(nullVal1); // null

/*
Undefined -> lack of a value ie absence of a value
what is the difference between undefined and null?

***--> never explicitly set something to undefined
If you want to create a variable that does not have
a value, never use undefined — use null
*/
let undefinedVal1 = undefined; // don't do this
console.log(undefinedVal1); // undefined

let undefinedVal2; // js engine sets it to undefined
console.log(undefinedVal2); // undefined
