let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => (Math.floor(Math.random() * 9));
// console.log(generateTarget());

const compareGuesses = (human, computer, targrt) => {
    let humanDifference = getAbsoluteDistance(human, targrt);
    let computerDifference = getAbsoluteDistance(computer, targrt);

    if (humanDifference === computerDifference) {
        return true;
    } else if (humanDifference > computerDifference) {
        return false;
    } else {
        return true;
    }
}

const updateScore = winner => {
    let humanScore = 0;
    let computerScore = 0;

    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};


const advanceRound = () => currentRoundNumber += 1;

const getAbsoluteDistance = (numberA, numberB) => Math.abs(numberA - numberB);