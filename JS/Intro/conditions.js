/*
senario 1:
  1.declare a variable<of your choice>assign a truthy value
    create an if stament and put the variable
    inside the if statement condition(<variable>).in side the if
    console.log("Senario 1 it run")
senario 2:
  1.declare a variable<of your choice>assign a falsey value
    create an if stament and put the variable
    inside the if statement.in side the if
    console.log("Senario 2 it run")
senario 3:
  1.create an if statement inside the if stament condition
  part. have true.
  inside the block({}) console.log("Senario 3 it run")
senario 4:
  1.create an if statement inside the if stament condition
  part. have false.
  inside the block({}) console.log("Senario 4 it run")
senario 5:
  1.create an if statement inside the if stament condition
  part.10>20
  inside the block({}) console.log("Senario 5 it run")
senario 6:
  1.create an if statement inside the if stament condition
  part. have 20>10.
  inside the block({}) console.log("Senario 6 it run")
*/

// Senario 1: variable with a truthy value
let myValue1 = "hello"
if (myValue1) {
    console.log("Senario 1 it run")
}

// Senario 2: variable with a falsey value
let myValue2 = 0
if (myValue2) {
    console.log("Senario 2 it run")
}

// Senario 3: condition is true
if (true) {
    console.log("Senario 3 it run")
}

// Senario 4: condition is false
if (false) {
    console.log("Senario 4 it run")
}

// Senario 5: condition is 10 > 20
if (10 > 20) {
    console.log("Senario 5 it run")
}

// Senario 6: condition is 20 > 10
if (20 > 10) {
    console.log("Senario 6 it run")
}
