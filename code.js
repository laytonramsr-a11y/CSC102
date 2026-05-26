   function playCraps()
    {
	    var num1 = Math.floor(Math.random() * 6) + 1;
  
	    var num2 = Math.floor(Math.random() * 6) + 1;

	    var sum = num1 + num2;

        document.getElementById("crapsResult").innerHTML = "Craps Result: " + sum;
    
	    if (sum == 7 || sum == 11)
	    {
		document.getElementById("crapsResult").innerHTML = "CRAPS - You Lose! The result is: " + sum;
        }
	    else if (num1 == num2 && num1 % 2 == 0)
	    {
		document.getElementById("crapsResult").innerHTML = "You Won! The dice values are both: " + num1;
        }
	    else
	    {
		document.getElementById("crapsResult").innerHTML = "You Pushed! Die 1: " + num1 + " Die 2 " + num2;
	    }

    }
        