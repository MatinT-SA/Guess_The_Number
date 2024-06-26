let result = 10;
let newResultDifficulty = 10;
let highscore = 0;
let hasWon = false;
let previousGuess = null;
let previousComparison = null;

const enteredNumber = document.querySelector('.guess');
const guessButton = document.querySelector('.check');
let randomNumber = Math.trunc(Math.random() * 100) + 1;

const difficulty = document.querySelector('.difficulty');

// Displaying the random number for troubleshooting
// document.querySelector('.number').textContent = randomNumber;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

function showCongratulationsPopup() {
    setTimeout(function () {
        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';

        const popupMessage = document.createElement('div');
        popupMessage.className = 'popup-message';
        popupMessage.innerHTML = `<span style="color: #e75480; font-size: 5rem; text-shadow: 0px 0px 6px #ff99dd;">${randomNumber}</span><br><br><span style="color: #00b300;">Hooray! You finally guessed it</span><br><br><button style="color: #bb33ff; cursor: pointer; transition: color 0.3s, background .3s; border: 2px solid #bb33ff; border-radius: 5px; padding: 5px 10px; font-family: Kablammo; font-size: 2rem; background: transparent;" onmouseover="this.style.color='#fff'; this.style.background='#bb33ff'" onmouseout="this.style.color='#bb33ff'; this.style.background='#fff'" onclick="closePopup()">YOO-HOO</button>`;

        popupContainer.appendChild(popupMessage);
        document.body.appendChild(popupContainer);

        // Trigger the transition by adding the "active" class
        setTimeout(function () {
            popupContainer.classList.add('active');
            popupMessage.classList.add('active');
        }, 30); // Use a small delay to ensure transition effect is applied

        setTimeout(function () {
            closePopup(popupContainer);
        }, 6000);

        setTimeout(function () {
            // Remove the "active" class to trigger the transition for disappearance
            popupContainer.classList.remove('active');
            popupMessage.classList.remove('active');

            // Remove the popup container after the transition completes
            setTimeout(function () {
                popupContainer.remove();
            }, 800); // Use the transition duration as the delay for removal
        }, 3000);
    }, 1500);
}

function showGameOverPopup() {
    setTimeout(function () {
        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';

        const popupMessage = document.createElement('div');
        popupMessage.className = 'popup-message';
        popupMessage.innerHTML = `<span style="color: #e75480; font-size: 3rem; text-shadow: 0px 0px 6px #ff99dd;">You're out of luck, Game Over! 👀</span><br><br><button style="color: #bb33ff; cursor: pointer; transition: color 0.3s, background .3s; border: 2px solid #bb33ff; border-radius: 5px; padding: 5px 10px; font-family: Kablammo; font-size: 2rem; background: transparent;" onmouseover="this.style.color='#fff'; this.style.background='#bb33ff'" onmouseout="this.style.color='#bb33ff'; this.style.background='#fff'" onclick="closePopup()">Let Me Restart</button>`;

        popupContainer.appendChild(popupMessage);
        document.body.appendChild(popupContainer);

        // Trigger the transition by adding the "active" class
        setTimeout(function () {
            popupContainer.classList.add('active');
            popupMessage.classList.add('active');
        }, 30); // Use a small delay to ensure transition effect is applied

        setTimeout(function () {
            closePopup(popupContainer);
        }, 6000);

        setTimeout(function () {
            // Remove the "active" class to trigger the transition for disappearance
            popupContainer.classList.remove('active');
            popupMessage.classList.remove('active');

            // Remove the popup container after the transition completes
            setTimeout(function () {
                popupContainer.remove();
            }, 800); // Use the transition duration as the delay for removal
        }, 3000);
    }, 0);
}

function getValueOfCheckButton() {
    const guess = Number(document.querySelector('.guess').value);
    const screenWidth = window.innerWidth;

    if (guess) {
        // When there is a number
        if (previousGuess === null || previousComparison === null) {
            // When this is the first guess
            if (guess === randomNumber) {
                // When the player wins on the first guess
                const keyframes = `@keyframes rotateAnimation {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-15deg); }
                    50% { transform: rotate(30deg);}
                    75% { transform: rotate(-40deg);}
                    100% { transform: rotate(45deg); }
                }`;

                const style = document.createElement('style');
                style.innerHTML = keyframes;
                document.head.appendChild(style);

                displayMessage('🎀 CORRECT... Congratulations 🎀');
                document.querySelector('.title').textContent = 'Try To Guess Another Number';

                document.querySelector('.number').textContent = randomNumber;

                document.querySelector('.result').textContent = result;

                if (result > highscore || highscore === 0) {
                    highscore = result;
                    document.querySelector('.highscore').textContent = highscore;
                }

                document.querySelector('.check').disabled = true;

                document.querySelector('body').style.background = 'radial-gradient(circle at 50% 50%, rgba(3, 73, 25, 1) 0%, rgba(7, 130, 62, 1) 100%)';
                document.querySelector('.number').style.cssText = 'width: 22rem; border-radius: 10% 10% 50% 50%; color: rgb(100 43 80); text-shadow: 4px 8px 3px rgba(217, 8, 168, 1); transition: width .4s ease-in-out, border-radius .3s ease-in , color .3s ease-out, text-shadow .3s ease-out;';
                document.querySelector('.line').style.transition = 'margin-top .4s ease-in-out';
                document.getElementsByTagName('main')[0].style.transition = 'margin-top .4s ease-in-out';
                document.querySelector('.restart').style.animation = 'rotateAnimation 1s ease-out forwards';


                // Call the function to show the popup after the user wins the match
                showCongratulationsPopup();

                hasWon = true;

                if (screenWidth < 1600) {
                    document.querySelector('.line').style.marginTop = '9rem';
                    document.getElementsByTagName('main')[0].style.marginTop = '2rem';
                } else {
                    document.querySelector('.line').style.marginTop = '11rem';
                }

                if (screenWidth < 850) {
                    document.querySelector('.line').style.marginTop = '17rem';
                } else if (screenWidth < 550) {
                    document.querySelector('.restart').style.top = '3rem';
                } else {
                    document.querySelector('.restart').style.top = '5rem';
                }

                return hasWon;

            } else if (guess > randomNumber) {
                // When the first guess is higher than our random number
                displayMessage('Too High... Slow Down, Bruh 😁');
                previousComparison = "higher";
            } else {
                // When the first guess is lower than our random number
                displayMessage('Too Low... Higher 🧗‍♀️');
                previousComparison = "lower";
            }
            previousGuess = guess;
        }
        else {
            // When this is not the first guess
            if (guess === randomNumber) {
                // When the player wins on the second or so guess
                const keyframes = `@keyframes rotateAnimation {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-15deg); }
                    50% { transform: rotate(30deg);}
                    75% { transform: rotate(-40deg);}
                    100% { transform: rotate(45deg); }
                }`;

                const style = document.createElement('style');
                style.innerHTML = keyframes;
                document.head.appendChild(style);

                displayMessage('🎀 CORRECT... Congratulations 🎀');
                document.querySelector('.title').textContent = 'Try To Guess Another Number';

                document.querySelector('.number').textContent = randomNumber;

                document.querySelector('.result').textContent = result;

                if (result > highscore || highscore === 0) {
                    highscore = result;
                    document.querySelector('.highscore').textContent = highscore;
                }

                document.querySelector('.check').disabled = true;

                document.querySelector('body').style.background = 'radial-gradient(circle at 50% 50%, rgba(3, 73, 25, 1) 0%, rgba(7, 130, 62, 1) 100%)';
                document.querySelector('.number').style.cssText = 'width: 22rem; border-radius: 10% 10% 50% 50%; color: rgb(100 43 80); text-shadow: 4px 8px 3px rgba(217, 8, 168, 1); transition: width .4s ease-in-out, border-radius .3s ease-in , color .3s ease-out, text-shadow .3s ease-out;';

                document.querySelector('.line').style.transition = 'margin-top .4s ease-in-out';
                document.getElementsByTagName('main')[0].style.transition = 'margin-top .4s ease-in-out';
                document.querySelector('.restart').style.animation = 'rotateAnimation 1s ease-out forwards';
                // Call the function to show the popup after the user wins the match
                showCongratulationsPopup();

                hasWon = true;

                previousGuess = guess;

                if (screenWidth < 1600) {
                    document.querySelector('.line').style.marginTop = '9rem';
                    document.getElementsByTagName('main')[0].style.marginTop = '2rem';
                } else {
                    document.querySelector('.line').style.marginTop = '11rem';
                }

                if (screenWidth < 850) {
                    document.querySelector('.line').style.marginTop = '17rem';
                } else if (screenWidth < 550) {
                    document.querySelector('.restart').style.top = '3rem';
                } else {
                    document.querySelector('.restart').style.top = '5rem';
                }

                return hasWon;
            }
            else if (guess > randomNumber) {
                // When the second guess is higher than our random number
                if (previousComparison === "lower") {
                    // When the second guess is higher and the previous guess is lower than our random number
                    displayMessage('Too High... Slow Down, Bruh 😁');
                } else {
                    // When the second guess is higher and the previous guess is higher than our random number
                    displayMessage('Still Too High... Let the Sky Fall 😉');
                }
                previousComparison = "higher";
                previousGuess = guess;
            } else {
                // When the second guess is lower than our random number
                if (previousComparison === "higher") {
                    // When the second guess is lower and our previous guess is higher
                    displayMessage('Too Low... Higher 🧗‍♀️');
                } else {
                    // When the second guess is lower and our previous guess is lower
                    displayMessage('Still too low... More 🙄');
                }
                previousComparison = "lower";
                previousGuess = guess;
            }
        }
        // determining the game over
        if (result > 1) {
            result--

            if (hasWon) {
                result++;
            } else {
                document.querySelector('.result').textContent = result;
            }

            // checking if the entered number is repetitive or not

        } else {
            if (randomNumber !== guess) {
                displayMessage("Game Over!");
                document.querySelector('.result').textContent = 0;
                document.querySelector('.check').disabled = true;

                showGameOverPopup();
            }
        }
    }
    else {
        // No number has been entered
        displayMessage('🤨 Please Enter A Number!');
    }
}

// restart button
function restartButton() {
    const screenWidth = window.innerWidth;
    if (hasWon) {
        enteredNumber.value = null;

        const keyframesRestart = `@keyframes undoRotateAnimation {
        0% { transform: rotate(45deg); }
        100% { transform: rotate(0deg); }
        }`;

        const style = document.createElement('style');
        style.innerHTML = keyframesRestart;
        document.head.appendChild(style);

        displayMessage('Start Guessing...');
        document.querySelector('.title').textContent = 'Try To Guess The Number';

        document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(2, 7, 53, 1) 0%, rgba(25, 13, 53, 1) 28%, rgba(29, 36, 31, 1) 48%, rgba(63, 40, 40, 1) 75%, rgba(56, 56, 56, 1) 100%)';

        if (screenWidth > 1600) {
            document.querySelector('.number').style.cssText = 'width: 16rem; border-radius: 50% 50% 10% 10%; color: #2c2c2c; text-shadow: none; transition: width .4s ease-in-out, border-radius .3s ease-in , color .3s ease-out, text-shadow .3s ease-out;';
            document.querySelector('.line').style.marginTop = '10rem';
        } else if (screenWidth < 1600 && screenWidth > 850) {
            document.querySelector('.number').style.cssText = 'width: 13rem; border-radius: 50% 50% 10% 10%; color: #2c2c2c; text-shadow: none; transition: width .4s ease-in-out, border-radius .3s ease-in , color .3s ease-out, text-shadow .3s ease-out;';
            document.querySelector('.line').style.marginTop = '7rem';
            document.getElementsByTagName('main')[0].style.marginTop = '0';
            document.querySelector('.restart').style.top = '4rem';
            document.querySelector('.restart').style.left = '3rem';
        }

        document.querySelector('.line').style.transition = 'margin-top .4s ease-in-out';
        document.getElementsByTagName('main')[0].style.transition = 'margin-top .4s ease-in-out';
        document.querySelector('.restart').style.animation = 'undoRotateAnimation .5s ease-in-out forwards';

        // enabling the guess button after winning the game
        document.querySelector('.check').disabled = false;

        // resetting the result value after winning the game
        document.querySelector('.result').textContent = newResultDifficulty;
        result = newResultDifficulty;
        previousGuess = null;
        previousComparison = null;

        // generating a new randomNumber after winning the game
        randomNumber = Math.trunc(Math.random() * 100) + 1;
        // replacing the number value with the new random number generated
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.number').textContent = '?';

        hasWon = false;

        if (screenWidth < 850 && screenWidth > 550) {
            document.querySelector('.line').style.marginTop = '12rem';
            document.querySelector('.restart').style.left = '4rem';
            document.querySelector('.restart').style.top = '3rem';
        } else if (screenWidth < 350) {
            document.querySelector('.restart').style.left = '1rem'
            document.querySelector('.restart').style.top = '2rem';;
        } else {
            document.querySelector('.restart').style.left = '4rem';
        }
    } else {
        enteredNumber.value = null;

        displayMessage('Start Guessing...');
        document.querySelector('.title').textContent = 'Try To Guess The Number';

        document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(2, 7, 53, 1) 0%, rgba(25, 13, 53, 1) 28%, rgba(29, 36, 31, 1) 48%, rgba(63, 40, 40, 1) 75%, rgba(56, 56, 56, 1) 100%)';

        document.querySelector('.line').style.transition = 'margin-top .4s ease-in-out';
        // document.querySelector('.restart').style.animation = 'undoRotateAnimation .5s ease-in-out forwards';
        document.querySelector('.restart').style.top = '4rem';

        // enabling the guess button after winning the game
        document.querySelector('.check').disabled = false;

        // resetting the result value after winning the game
        document.querySelector('.result').textContent = newResultDifficulty;
        result = newResultDifficulty;
        previousGuess = null;
        previousComparison = null;

        // generating a new randomNumber after winning the game
        randomNumber = Math.trunc(Math.random() * 100) + 1;
        // replacing the number value with the new random number generated
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.number').textContent = '?';

        if (screenWidth > 1600) {
            document.querySelector('.number').style.cssText = 'width: 16rem; border-radius: 50% 50% 10% 10%; color: #2c2c2c; text-shadow: none; transition: width .4s ease-in-out, border-radius .3s ease-in , color .3s ease-out, text-shadow .3s ease-out;';
            document.querySelector('.line').style.marginTop = '10rem!important';
        } else if (screenWidth < 1600 && screenWidth > 850) {
            document.querySelector('.number').style.cssText = 'width: 13rem; border-radius: 50% 50% 10% 10%; color: #2c2c2c; text-shadow: none; transition: width .4s ease-in-out, border-radius .3s ease-in , color .3s ease-out, text-shadow .3s ease-out;';
            document.querySelector('.line').style.marginTop = '7rem';
            document.querySelector('.restart').style.marginLeft = '4rem';
            document.querySelector('.restart').style.top = '3rem';
        }

        if (screenWidth < 850 && screenWidth > 550) {
            document.querySelector('.line').style.marginTop = '12rem';
            document.querySelector('.restart').style.left = '4rem';
            document.querySelector('.restart').style.top = '3rem';
        } else if (screenWidth < 350) {
            document.querySelector('.restart').style.left = '1rem'
            document.querySelector('.restart').style.top = '2rem';;
        } else {
            document.querySelector('.restart').style.left = '4rem';
        }
    }
}

// restart button after for when the popup container is up
function closePopup() {
    const popupContainer = document.querySelector('.popup-container');
    if (popupContainer) {
        popupContainer.classList.remove('active');
        setTimeout(function () {
            popupContainer.remove();
        }, 800);
    }
}

// Difficulty
function changeDifficulty() {
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    const popupMessage = document.createElement('div');
    popupMessage.className = 'popup-message';
    popupMessage.innerHTML = `
    <span style="color: #2c2c2c; font-size: 3rem; text-shadow: 0px 0px 6px #808000;">Difficulty</span>
    <br><br>
    <span style="color: #116f57; border-bottom: 2px solid #116f57; display: inline-block; height: 50px; cursor: pointer;transition: color 0.4s;" onmouseover="this.style.color='#ff80aa'" onmouseout="this.style.color='#116f57'" onclick="setDifficulty('easy')">Easy</span>
    <br>
    <span style="color: #116f57; border-bottom: 2px solid #116f57; display: inline-block; height: 50px; cursor: pointer; transition: color 0.4s;" onmouseover="this.style.color='#ff8c1a'" onmouseout="this.style.color='#116f57'" onclick="setDifficulty('normal')">Normal</span>
    <br>
    <span style="color: #116f57; display: inline-block; height: 50px; cursor: pointer; transition: color 0.4s;" onmouseover="this.style.color='#cc0000'" onmouseout="this.style.color='#116f57'" onclick="setDifficulty('hard')">Hard</span>
    <br><br>
    <button style="color: red; cursor: pointer; transition: color 0.3s, background .3s; border: 2px solid red; border-radius: 5px; padding: 10px 20px; font-family: Kablammo; font-size: 2rem; background: transparent;" onmouseover="this.style.color='#fff'; this.style.background='red'" onmouseout="this.style.color='red'; this.style.background='#fff'" onclick="closePopup()">Close</button>`;

    popupContainer.appendChild(popupMessage);
    document.body.appendChild(popupContainer);

    // Trigger the transition by adding the "active" class
    setTimeout(function () {
        popupContainer.classList.add('active');
        popupMessage.classList.add('active');
    }, 30); // Use a small delay to ensure transition effect is applied
}

function setDifficulty(difficulty) {
    if (difficulty === 'easy') {
        result = 15;
        highscore = 0;

        document.querySelector('.difficulty-level').textContent = ': Easy';
    } else if (difficulty === 'normal') {
        result = 10;
        highscore = 0;

        document.querySelector('.difficulty-level').textContent = ': Normal';
    } else if (difficulty === 'hard') {
        result = 7;
        highscore = 0;

        document.querySelector('.difficulty-level').textContent = ': Hard';
    }

    // New result value based on the difficulty selected
    newResultDifficulty = result;
    // resetting record when the difficulty has changed
    document.querySelector('.highscore').textContent = 0;

    // Update the result value displayed on the page
    document.querySelector('.result').textContent = result;

    closePopup();
}

difficulty.addEventListener('click', changeDifficulty);

// Event handlers
document.querySelector('.check').addEventListener('click', getValueOfCheckButton);
document.querySelector('.guess').addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.querySelector('.check').click();
    }
})
document.querySelector('.restart').addEventListener('click', restartButton);
