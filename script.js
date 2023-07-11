let result = 10;
const enteredNumber = document.querySelector('.guess');

const randomNumber = Math.trunc(Math.random() * 100) + 1;
let previousGuess = null;
let previousComparison = null;
document.querySelector('.number').textContent = randomNumber;

function getValueOfCheckButton() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    if (guess) {
        if (previousGuess === null || previousComparison === null) {
            if (guess === randomNumber) {
                document.querySelector('.message').textContent = '🎀 CORRECT... Congratulations 🎀';
            } else if (guess > randomNumber) {
                document.querySelector('.message').textContent = 'Too High... Slow Down, Bruh 😁';
                previousComparison = "higher";
            } else {
                document.querySelector('.message').textContent = 'Too Low... Higher 🧗‍♀️'
                previousComparison = "lower";
            }
            previousGuess = guess;

        }
        else {
            if (guess === randomNumber) {
                document.querySelector('.message').textContent = '🎀 CORRECT... Congratulations 🎀';
                previousGuess = guess;
            }
            else if (guess > randomNumber) {
                if (previousComparison === "lower") {
                    document.querySelector('.message').textContent = 'Too High... Slow Down, Bruh 😁';
                } else {
                    document.querySelector('.message').textContent = 'Still Too High... Let the Sky Fall 😉';
                }
                previousComparison = "higher";
                previousGuess = guess;
            } else {
                if (previousComparison === "higher") {
                    document.querySelector('.message').textContent = 'Too Low... Higher 🧗‍♀️'
                } else {
                    document.querySelector('.message').textContent = 'Still too low... More 🙄';
                }
                previousComparison = "lower";
                previousGuess = guess;
            }
        }
        if (result > 1) {
            result = result - 1;
            document.querySelector('.result').textContent = result;
        } else {
            document.querySelector('.message').textContent = "Game Over!";
            document.querySelector('.result').textContent = 0;
        }
    }
    else {
        document.querySelector('.message').textContent = '🤨 Please Enter A Number!';
    }
}

function restartButton() {
    enteredNumber.value = null;
}

document.querySelector('.check').addEventListener('click', getValueOfCheckButton);
document.querySelector('.restart').addEventListener('click', restartButton);