function updateText(){
    //udate the text of the heading//
    document.getElementById("heading").innerHTML = "Kaboom!";
    //when the button is clicked, the heading will change to "Kaboom!"//
}
function updateText2(subheading){
    //update the text of the subheading//
    document.getElementById("subheading").innerHTML = " Ready to play!" + subheading;
    //when the button is clicked, the subheading will change to "Ready to play!" followed by the text in the parentheses//
}
function calculateSumOutput(die1, die2) {
            var sum = die1 + die2;
            if (sum == 7 || sum == 11) {
                console.log("You Win!");
            } else if (die1 == die2 && die1 % 2 == 0) {
                console.log("Doubles! You get to roll again.");
            } else if (sum == 2 || sum == 3 || sum == 12) {
                console.log("You Lose!");
            } else {
                console.log("No immediate result: sum = " + sum);
            }
            // return the sum for further use
            return sum;
        }