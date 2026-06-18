let firstName = "James";
let secondName = "St Patrick";
let alias = "Ghost";
let age = 40;
let address = "New York, USA";

let userDetails = firstName + " " + alias + " " + secondName + " is " + 
age + " years old" + " he stays at a penthouse in " + address;

console.log(userDetails);
console.log("User details is ", typeof userDetails);


// Template string use back ticks

let userDetails2 =
`${firstName} ${alias} ${secondName} is ${age} years old and he stays at a penthouse in ${address}`;

console.log(userDetails2);

`${firstName} ${alias} ${secondName} is ${age} years old and he stays at a penthouse in ${address}`;
