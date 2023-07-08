const randomNumber = Math.trunc(Math.random() * 100) + 1;
document.querySelector('.number').textContent = randomNumber;

function getValueOfCheckButton() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = '🙄 Please Enter A Number!';
    } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = '🎀 CORRECT... Congratulations 🎀';
    } else if (guess > randomNumber) {
        document.querySelector('.message').textContent = 'Too High... Slow Down, Bruh 😁';
    } else {
        document.querySelector('.message').textContent = 'Too Low... Higher 🧗‍♀️'
    }
}

document.querySelector('.check').addEventListener('click', getValueOfCheckButton);