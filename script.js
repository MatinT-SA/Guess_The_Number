function getValueOfCheckButton() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = '🙄 Please Enter A Number!';
    }
}

document.querySelector('.check').addEventListener('click', getValueOfCheckButton);