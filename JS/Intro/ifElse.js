/*
  if and else if -> chain
  -> we exit if and else if when we reach the first true condition
*/

let age = prompt("Enter your age:");

// 
console.log(`age is ${age} typeof ${typeof age}`);
alert(`You entered ${age}`);

// age=27
//27>10 :true->
//

if (age < 10) {
  alert("You are a baby.");
} else if (age < 13) {
  alert(`You are a teen`);
} else if (age < 18) {
  alert("You can legally drink and smoke");
} else if (age > 27) {
  alert("Best age for marriage");
} else if (age > 45) {
  alert("Best age for retirement");
} else if (age > 50) {
  alert("You are an ansestor");
}
/*
  using if statements only to ensure we get only one alert for age.
  must be correct one.
*/

if (age < 10) {
  alert("You are a baby.");
}
//15>=13 && 15<19=true
if (age >= 13 && age < 19) {
  alert(`You are a teen`);
}
//15>18=false
if (age > 18) {
  alert("You can legally drink and smoke");
}
//25>25 && 25<27=true
if (age > 25) {
  alert("Best age for marriage");
}
//25>45=false
if (age > 45) {
  alert("Best age for retiremnt");
}
//25>50=false
if (age > 50) {
  alert("You are an ansestor");
}