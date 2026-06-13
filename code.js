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

let element;
let start;
let stop;

window.addEventListener("DOMContentLoaded", (event) =>{
});


    element = document.getElementById("memeImage");
    
    const form = document.getElementById("myform");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    if (form) {
        form.addEventListener("submit", validateInput);
    }  

function step(timestamp) {
    if (stop) {
        return;
    }
    if (start === undefined) {
        start = timestamp;
    }
    const elapsed = timestamp - start;
        // Math.min() is used here to make sure that the element stops at 200px
        element.style.transform = `translateX(${Math.min(0.1 * elapsed, 200)}px)`;
        if (elapsed >= 1000) {
            startButton.disabled = false;
            stopButton.disabled = true;
            return;
        }
        requestAnimationFrame(step);
    }
function animateImage() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    start = undefined;
    requestAnimationFrame(step);
}

function stopAnimation() {
    stop = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    element.style.transform = "translateX(0px)";
}

function checkPalindrome() {
    // Get the input string from the user
    const inputString = document.getElementById("inputString").value;
    // Get the result element to display the output
    const resultElement = document.getElementById("palindromeResult");
    // Remove non-alphanumeric characters and convert to lowercase for palindrome checking
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Check if the cleaned string is the same as its reverse
    const reversedString = cleanedString.split('').reverse().join('');
    const isPalindrome = cleanedString === reversedString;

    // Display the result
    if (isPalindrome) {
        resultElement.innerText = `"${inputString}" is a palindrome!`;
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = `"${inputString}" is not a palindrome.`;
        resultElement.style.color = "red";
    }
}

  