let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	let foundEmpty = false;
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function
	// Use clearTimeout() to clear the computer's move timeout and then set computerMoveTimeout back to 0.

	// Loop through all game board buttons and set the inner HTML of each to an empty string. Also remove the class name and disabled attribute. The disabled attribute prevents the user from clicking the button, but all the buttons should be clickable when starting a new game.

	// Allow the player to take a turn by setting playerTurn to true.

	// Set the text of the turn information paragraph to "Your turn".
}

function boardButtonClicked(button) {
	// TODO: Complete the function
	// 	If playerTurn is true:

		// Set the button's inner HTML to "X".

		// Add the "x" class to the button.

		// Set the button's disabled attribute to true so the button cannot be clicked again.

		// Call switchTurn() so the computer can take a turn.
}

function switchTurn() {
	// TODO: Complete the function
	// store the place on the page where you'll display the turn information in a variable to make it easy to access inside of this function
	// TODO

	
	// Call checkForWinner() to determine the game's status. (HINT: this function returns a value)
	// TODO
	// 	If more moves are left (compare to gameStatus.MORE_MOVES_LEFT)
		// AND if the player just finished their turn
		
			// use setTimeout() to call makeComputerMove() after 1 second
			// Assign the return value of setTimeout() to computerMoveTimeout
			// TODO
				

		// toggle playerTurn's value
		// TODO		

		// Update the turn info in the paragraph on the page (saved in a variable above)
		// Set the turn information paragraph's text content to "Your turn" if playerTurn is true, or "Computer's turn" if playerTurn is false.
		// TODO
		// TODO

	// otherwise... (no moves left)

		// Don't allow player to click anymore (no more turns)
		// TODO

		// If the human has won, display the text "You win!" in the turn info paragraph. (compare to gameStatus.HUMAN_WINS)
		// TODO

		// Otherwise, If the computer has won, display the text "Computer wins!" in the turn info paragraph. (compare to gameStatus.COMPUTER_WINS)
		// TODO

		// Otherwise, If the game is a draw, display the text "Draw game" in the turn info paragraph. (compare to gameStatus.DRAW_GAME)
		// TODO
}

// I have included the code for this function for you as some of these concepts are not covered until later in the course
function makeComputerMove() {
	// Find indices of available buttons
	const buttons = getGameBoardButtons();
	let indices = [];
	buttons.forEach((button, i) => {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			indices.push(i);
		}
	});

	// If an index is available, pick randomly
	if (indices.length > 0) {
		const index = indices[Math.floor(Math.random() * indices.length)];
		buttons[index].innerHTML = "O";
		buttons[index].classList.add("o");

		// Don't allow user to click this button
		buttons[index].disabled = true;

		// Switch turn back to player
		switchTurn();
	}
}