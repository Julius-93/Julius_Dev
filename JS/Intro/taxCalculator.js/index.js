/*
prompt("")

checking if is a number
1. isNaN
2. Number ->
3. +<>
*/
// stay here until he has entered the correct gross
let grossMonthlySalary = null;
while (true) {
  let gross = prompt("Enter your gross salary");

  if (!isNaN(gross)) {
    gross = Number(gross);

    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }
  alert(`Invalid amount entered.
Ensure you enter a number greater than 0`);
}
console.log(
  `Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`
);
// -> here
// calculate paye tax

let payeTax = null;
if (grossMonthlySalary <= 24000) {
  payeTax = grossMonthlySalary * 0.10;
} else if (grossMonthlySalary <= 32333) {
  payeTax = grossMonthlySalary * 0.25;
} else if (grossMonthlySalary <= 500000) {
  payeTax = grossMonthlySalary * 0.30;
} else if (grossMonthlySalary <= 800000) {
  payeTax = grossMonthlySalary * 0.325;
} else {
  payeTax = grossMonthlySalary * 0.35;
}

console.log(`Gross salary: ${grossMonthlySalary}`);
console.log(`PAYE tax: ${payeTax}`);
