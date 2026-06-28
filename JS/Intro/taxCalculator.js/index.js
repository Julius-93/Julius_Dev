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

// Calculate employee NSSF contribution
let nssfTier1 = null;
let nssfTier2 = null;
let employeeNssf = null;

// Tier 1: First KES 9,000 at 6%
if (grossMonthlySalary <= 9000) {
  nssfTier1 = grossMonthlySalary * 0.06;
} else {
  nssfTier1 = 9000 * 0.06;
}
console.log(`NSSF Tier 1: KES ${nssfTier1.toLocaleString()}`);

// Tier 2: Amount above KES 9,000 up to KES 108,000 at 6%
if (grossMonthlySalary > 9000) {
  if (grossMonthlySalary <= 108000) {
    nssfTier2 = (grossMonthlySalary - 9000) * 0.06;
  } else {
    nssfTier2 = (108000 - 9000) * 0.06;
  }
}
console.log(`NSSF Tier 2: KES ${nssfTier2.toLocaleString()}`);

// Total employee NSSF deduction
employeeNssf = nssfTier1 + nssfTier2

// Maximum employee NSSF deduction
if (employeeNssf > 6480) {
  employeeNssf = 6480;
}

console.log(`Your NSSF contribution: KES ${employeeNssf.toLocaleString()}`);

// SHIF (SHA) Contribution - Employee

let shifContribution = grossMonthlySalary * 0.0275;

console.log(`SHIF Contribution: KES ${shifContribution}`);

// Housing Levy - Employee


let housingLevy = grossMonthlySalary * 0.015;

console.log(`Housing Levy: KES ${housingLevy}`);

// Calculate taxable income
let taxableIncome = grossMonthlySalary - employeeNssf - shifContribution - housingLevy;
console.log(`Gross Monthly Salary: KES ${grossMonthlySalary}`);
console.log(`Employee NSSF Contribution: KES ${employeeNssf}`);
console.log(`SHIF Contribution: KES ${shifContribution}`);
console.log(`Housing Levy: KES ${housingLevy}`);
console.log(`Taxable Income: KES ${taxableIncome}`);

// Calculate PAYE

const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.1;
const band2 = (bracket2 - bracket1) * 0.25;
const band3 = (bracket3 - bracket2) * 0.3;
const band4 = (bracket4 - bracket3) * 0.325;

const personal_relief = 2400;

if (taxableIncome <= 24000) {
  paye = taxableIncome * 0.1;
  paye_tier = "Paye 0-24000 KES";
} else if (taxableIncome <= 32333) {
  let diff = taxableIncome - 24000;
  let tax = diff * 0.25;
  paye = tax + band1;
  paye_tier = "Paye 24000-32333 KES";
} else if (taxableIncome <= 500000) {
  let diff = taxableIncome - 32333;
  let tax = diff * 0.3;
  paye = tax + band1 + band2;
  paye_tier = "Paye 32333-500000 KES";
} else if (taxableIncome <= 800000) {
  let diff = taxableIncome - 500000;
  let tax = diff * 0.325;
  paye = tax + band1 + band2 + band3;
  paye_tier = "Paye 500000-800000 KES";
} else {
  let diff = taxableIncome - 800000;
  let tax = diff * 0.35;
  paye = tax + band1 + band2 + band3 + band4;
  paye_tier = "Paye 800000 to infinity KES";
}

const final_paye = Math.max(0, paye - personal_relief);

alert(`Taxable Income ${taxableIncome}
Paye ${paye}
Personal Relief ${personal_relief}
Final Paye ${final_paye}
Tier ${paye_tier}
`);



// Calculate Net Salary
let netSalary =
  grossMonthlySalary -
  employeeNssf -
  shifContribution -
  housingLevy -
  final_paye;

console.log(`Gross Salary: KES ${grossMonthlySalary}`);
console.log(`NSSF: KES ${employeeNssf}`);
console.log(`SHIF: KES ${shifContribution}`);
console.log(`Housing Levy: KES ${housingLevy}`);
console.log(`PAYE: KES ${final_paye}`);
console.log(`Net Salary: KES ${netSalary}`);
