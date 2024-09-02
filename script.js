// script.js

document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultMessage = document.getElementById('resultMessage');
    
    const getComputerChoice = () => {
        const options = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    };

    const determineWinner = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        }
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        }
        return 'Computer wins!';
    };

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);
            resultMessage.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
        });
    });
});
