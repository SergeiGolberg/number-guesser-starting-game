let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// this function is for random computer number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// function getting a winner
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    
        if (humanGuess < 0 || humanGuess > 9) {
            alert('You must select a number from 0 to 9')
        }
    

    const userDifference = Math.abs(humanGuess - targetGuess);
    const computerDifference = Math.abs(computerGuess - targetGuess);

    if (userDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

// function which update scores
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner = 'computer') {
        computerScore++;
    }
}

// function updating a round
const advanceRound = () => {
    currentRoundNumber++;
}




