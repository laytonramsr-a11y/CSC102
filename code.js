function playCraps() {

    var num1 = Math.floor(Math.random() * 6) + 1;

    var num2 = Math.floor(Math.random() * 6) + 1;

    var sum = num1 + num2;

    var result = "Craps Result: " + sum;

    if (sum == 7 || sum == 11) {
        result = "CRAPS - You Lose! The result is: " + sum;
    } else if (num1 == num2 && num1 % 2 == 0) {
        result = "You Won! The dice values are both: " + num1;
    } else {
        result = "You Pushed! Die 1: " + num1 + " Die 2: " + num2;
    }

    document.getElementById("crapsResult").innerHTML = result;
}

function validateInput(event)
 {
    event.preventDefault();
    const firstNameInput = document.getElementById("fName");
    let firstNameString = firstNameInput.value;
    console.log(firstNameString);

    const lastNameInput = document.getElementById("lName");
    let lastNameString = lastNameInput.value;
    console.log(lastNameString);

    const areaCodeInput = document.getElementById("areaCode");
    let areaCode = areaCodeInput.value;
    console.log(areaCode);

    // Concatenate first and last name variables

    let fullName = firstNameString + " " + lastNameString;
    console.log(fullName);

    // Check if the full name is less than 20 characters long. Exit if that is the case.
   
    if (fullName.length > 20) {
        alert("Full name must be at least 20 characters long.");
        return false;
    }

    // Check if the area code is a 5-digit number. Exit if that is not the case.

    if (areaCode.length != 5  || (!Number.isInteger(parseInt(areaCode)) && parseInt(areaCode) > 9999)) {
        alert(" Invalid area code. Area code must be a 5-digit number.");
        return false;
    } 
    console.log("Validated");
}
