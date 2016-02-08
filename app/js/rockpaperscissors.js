////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

	// All Possible cases
	// playerMove | computerMove | Winner
	// rock		  | scissors	 | player
	// scissors	  | paper		 | player
	// paper	  | rock	     | player
	// rock		  | paper		 | computer
	// scissors	  | rock	     | computer
	// paper	  | scissors     | computer
	// rock		  | rock		 | tie
	// scissors	  | scissors     | tie
	// paper	  | paper	     | tie
	
    var winner;
	
	if (playerMove == computerMove){
		winner = 'tie';
	} else if (playerMove == 'rock' && computerMove == 'scissors'){
		winner = 'player';
	} else if (playerMove == 'scissors' && computerMove == 'paper'){
		winner = 'player';
	} else if (playerMove == 'paper' && computerMove == 'rock'){
		winner = 'player';
	} else {
		winner = 'computer';
	}
    return winner;
}

function playToFive() {
    playTo(5);
}

function playTo(x) {
	console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
	
	//Loop till player or computer wins x times
	while(playerWins < x && computerWins < x){
    	var playerMove = getPlayerMove();
    	var computerMove = getComputerMove();
		var result = getWinner( playerMove, computerMove );
		tallyWins(result);
		printStatus();
	}
	
	function printStatus() {
		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  		console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
	}
	
	function tallyWins(result) {
	    if (result == 'player') {
			playerWins++;
		} else if (result == 'computer') {
			computerWins++;
		} else{
			console.log('There is a tie');
		}
	}
	
    return [playerWins, computerWins];
}

