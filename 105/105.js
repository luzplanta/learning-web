var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}

else if (guess < secretNumber) {
    alert("Too Low, Refresh and try again!");
}

else {
    alert("Too High, Refresh and try again!");
}