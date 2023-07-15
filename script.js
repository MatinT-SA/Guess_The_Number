let result = 10;
const enteredNumber = document.querySelector('.guess');

const randomNumber = Math.trunc(Math.random() * 100) + 1;
let previousGuess = null;
let previousComparison = null;
document.querySelector('.number').textContent = randomNumber;

function showCongratulationsPopup() {
    setTimeout(function () {
        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';

        const popupMessage = document.createElement('div');
        popupMessage.className = 'popup-message';
        popupMessage.innerHTML = `<span style="color: #e75480; font-size: 5rem; text-shadow: 0px 0px 6px #ff99dd;">${randomNumber}</span><br><span style="color: #00b300;">Hooray! You finally guessed it</span><br><span style="color: #bb33ff; cursor: pointer;" onclick="restartButtonPopup()">Restart</span>`;

        const closeIcon = document.createElement('i');
        closeIcon.className = 'close-icon fa fa-times custom-close-icon'; // Add the appropriate CSS classes for the close icon
        closeIcon.style.cursor = 'pointer';
        closeIcon.addEventListener('click', function () {
            closePopup(popupContainer);
        });

        popupContainer.appendChild(popupMessage);
        popupContainer.appendChild(closeIcon);
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
        }, 6000);
    }, 1500);
}

function closePopup(popupContainer) {
    // Remove the "active" class to trigger the transition for disappearance
    popupContainer.classList.remove('active');

    // Remove the popup container after the transition completes
    setTimeout(function () {
        popupContainer.remove();
    }, 800); // Use the transition duration as the delay for removal
}

function getValueOfCheckButton() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

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

                document.querySelector('.message').textContent = '🎀 CORRECT... Congratulations 🎀';
                document.querySelector('.title').textContent = 'Try To Guess Another Number';

                document.querySelector('body').style.background = 'radial-gradient(circle at 50% 50%, rgba(3, 73, 25, 1) 0%, rgba(7, 130, 62, 1) 100%)';
                document.querySelector('.number').style.cssText = 'width: 22rem; border-radius: 10% 10% 50% 50%; color: white; text-shadow: 4px 8px 3px rgba(217, 8, 168, 1); transition: width .4s ease-in-out, border-radius .3s ease-in , color .3s ease-out, text-shadow .3s ease-out;';
                document.querySelector('.line').style.marginTop = '14rem';
                document.querySelector('.line').style.transition = 'margin-top .4s ease-in-out';
                document.querySelector('.restart').style.animation = 'rotateAnimation 1s ease-out forwards';
                document.querySelector('.restart').style.top = '5rem';
                // Call the function to show the popup after the user wins the match
                showCongratulationsPopup();

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
                document.querySelector('body').style.background = 'radial-gradient(ellipse at 50% 50%, rgba(50, 223, 23, 1) 0%, rgba(133, 95, 95, 1) 32%, rgba(81, 106, 140, 1) 70%, rgba(116, 210, 24, 1) 100%)';
                document.querySelector('.number').style.width = '22rem';
                document.querySelector('.number').style.borderRadius = '10% 10% 50% 50%';
                document.querySelector('.line').style.marginTop = '14rem';

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

// restart button after for when the popup container is up
function restartButtonPopup() {
    enteredNumber.value = null;
    const popupContainer = document.querySelector('.popup-container');
    if (popupContainer) {
        popupContainer.classList.remove('active');
        setTimeout(function () {
            popupContainer.remove();
        }, 800);
    }
}

// Event handlers
document.querySelector('.check').addEventListener('click', getValueOfCheckButton);
document.querySelector('.restart').addEventListener('click', restartButton);