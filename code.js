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

function myForm() { 

    var fname;
	var lname;
	var areaCode;
	var sum= fname + "" + lname;

	
            if (sum > 20)
            {    
             document.getElementById("warning").innerHTML = "Invalid"+ sum.length;
            }
            else if (sum <= 20)
            {
                document.getElementById("warning").innerHTML = "Valid" + sum.length;
            }

          areacode = document.getElementById("areacode").value;

            if (areacode > 5)
            {
                document.getElementById("warning").innerHTML = "!Invalid" + areacode.length;
            }
            else if (areacode == 5)
            {
                document.getElementById("warning").innerHTML = "Valid" + areacode.length;
            }
        

}

	