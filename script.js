let randomNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
const submitButton = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const playAgainButton = document.querySelector('.playAgain');

function checkGuess() {
    const userGuess = Number(guessField.value);
    attempts++;

    if (attempts === 1) {
        lastResult.textContent = 'Previous guesses: ';
    }
    lastResult.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = '🎉 Congratulations! You got it right! 🎉';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (attempts >= 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = userGuess < randomNumber ? 'Last guess was too low!' : 'Last guess was too high!';
    }

    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    submitButton.disabled = true;
    playAgainButton.style.display = 'block';
}

function resetGame() {
    attempts = 0;
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    playAgainButton.style.display = 'none';
    guessField.disabled = false;
    submitButton.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 20) + 1;
}

submitButton.addEventListener('click', checkGuess);
playAgainButton.addEventListener('click', resetGame);
