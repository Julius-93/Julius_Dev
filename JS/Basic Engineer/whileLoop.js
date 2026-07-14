function promptStudent() {
    let num1 = null;
    let num2 = null;
    while (true) {
        num1 = prompt("Enter the first number");
        if (isNaN(num1)) {
            continue; // restart the loop
        }
        num2 = prompt("Enter the second number");
        if (isNaN(num2)) {
            continue; // restart the loop from beginning
        }
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if (num1 <= 0 || num2 <= 0) {
            continue; //
        }
        break;
    }
    console.log("Got valid number", num1, num2);
    mathTable(num1, num2);
}

function mathTable(num1, num2) {
    if (!num1 || num1 < 0 || !num2 || num2 < 0) {
        console.error("Ensure number1 or number2 are numbers greater than 0");
        return;
    }

    let outerLoop = num1; // 2

    while (outerLoop > 0) {
        doInnerLoop(outerLoop, num2); //
        outerLoop = outerLoop - 1;
    }
    // while (outerLoop > 0) {
    //   let innerLoop = num2; // 3 // 3
    //   while (innerLoop > 0) {
    //     console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
    //     console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
    //     innerLoop = innerLoop - 1;
    //   }
    //   outerLoop = outerLoop - 1;
    // }
}

// individual // test separate
function doInnerLoop(outerLoop, num2) {
    let innerLoop = num2;
    while (innerLoop > 0) {
        console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
        console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
        innerLoop = innerLoop - 1;
    }
}