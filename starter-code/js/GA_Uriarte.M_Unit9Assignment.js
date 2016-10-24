var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";

if (cardOne == cardFour) {
	alert("You found a match!")
} else if (cardFour == cardOne) {
	alert("You found a match!")
} else if (cardTwo == cardThree) {
	alert("You found a match!")
} else if (cardThree == cardTwo) {
	alert("You found a match!")
} else if (cardOne == cardTwo) {
	alert("Sorry, try again.")
} else if (cardOne == cardThree) {
	alert("Sorry, try again.")
} else if (cardTwo == cardOne) {
	alert("Sorry, try again.")
} else if (cardTwo == cardFour) {
	alert("Sorry, try again.")
} else if (cardThree == cardOne) {
	alert("Sorry, try again.")
} else if (cardThree == cardFour) {
	alert("Sorry, try again.")
} else if (cardFour == cardTwo) {
	alert("Sorry, try again.")
} else if (cardFour == cardThree) {
	alert("Sorry, try again.")
}