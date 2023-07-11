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
        // When there is a number
        if (previousGuess === null || previousComparison === null) {
            // When this is the first guess
            if (guess === randomNumber) {
                // When the player wins on the first guess
                document.querySelector('.message').textContent = '🎀 CORRECT... Congratulations 🎀';

                document.querySelector('body').style.background = 'radial-gradient(ellipse at 50% 50%, rgba(50, 223, 23, 1) 0%, rgba(133, 95, 95, 1) 32%, rgba(81, 106, 140, 1) 70%, rgba(116, 210, 24, 1) 100%)';
                document.querySelector('.number').style.width = '22rem';
                document.querySelector('.number').style.borderRadius = '10% 10% 50% 50%';
                document.querySelector('.line').style.marginTop = '14rem';
            } else if (guess > randomNumber) {
                // When the first guess is higher than our random number
                document.querySelector('.message').textContent = 'Too High... Slow Down, Bruh 😁';
                previousComparison = "higher";
            } else {
                // When the first guess is lower than our random number
                document.querySelector('.message').textContent = 'Too Low... Higher 🧗‍♀️'
                previousComparison = "lower";
            }
            previousGuess = guess;
        }
        else {
            // When this is not the first guess
            if (guess === randomNumber) {
                // When the player wins on the second or so guess
                document.querySelector('.message').textContent = '🎀 CORRECT... Congratulations 🎀';

                document.querySelector('body').style.background = 'radial-gradient(ellipse at 50% 50%, rgba(50, 223, 23, 1) 0%, rgba(133, 95, 95, 1) 32%, rgba(81, 106, 140, 1) 70%, rgba(116, 210, 24, 1) 100%)';
                previousGuess = guess;
            }
            else if (guess > randomNumber) {
                // When the second guess is higher than our random number
                if (previousComparison === "lower") {
                    // When the second guess is higher and the previous guess is lower than our random number
                    document.querySelector('.message').textContent = 'Too High... Slow Down, Bruh 😁';
                } else {
                    // When the second guess is higher and the previous guess is higher than our random number
                    document.querySelector('.message').textContent = 'Still Too High... Let the Sky Fall 😉';
                }
                previousComparison = "higher";
                previousGuess = guess;
            } else {
                // When the second guess is lower than our random number
                if (previousComparison === "higher") {
                    // When the second guess is lower and our previous guess is higher
                    document.querySelector('.message').textContent = 'Too Low... Higher 🧗‍♀️'
                } else {
                    // When the second guess is lower and our previous guess is lower
                    document.querySelector('.message').textContent = 'Still too low... More 🙄';
                }
                previousComparison = "lower";
                previousGuess = guess;
            }
        }
        // determining the game over
        if (result > 1) {
            result = result - 1;
            document.querySelector('.result').textContent = result;
        } else {
            document.querySelector('.message').textContent = "Game Over!";
            document.querySelector('.result').textContent = 0;
        }
    }
    else {
        // No number has been entered
        document.querySelector('.message').textContent = '🤨 Please Enter A Number!';
    }
}

// restart button
function restartButton() {
    enteredNumber.value = null;
}

// Event handlers
document.querySelector('.check').addEventListener('click', getValueOfCheckButton);
document.querySelector('.restart').addEventListener('click', restartButton);