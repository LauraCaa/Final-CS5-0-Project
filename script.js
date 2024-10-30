import Modal from "./components/modal.js";

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-button');
    const roundsSelect = document.getElementById('rounds');

    let currentPlayer = "X";
    let board = Array(9).fill(null);
    let totalRounds = 1;
    let currentRound = 1;
    let scores = { X: 0, O: 0 };

    const xIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
    `;

    const oIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        </svg>
    `;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const modal = new Modal('win-modal', 'modal-message', 'close');

    roundsSelect.addEventListener('change', (e) => {
        totalRounds = parseInt(e.target.value);
        resetGame();
    });

    function handleCellMark(e) {
        const cellIndex = e.target.getAttribute('data-index');

        if (board[cellIndex] || checkWinner()) return;

        board[cellIndex] = currentPlayer;
        e.target.innerHTML = currentPlayer === "X" ? xIcon : oIcon;

        if (checkWinner()) {
            scores[currentPlayer]++;
            if (currentRound < totalRounds) {
                modal.open(
                    `Player ${currentPlayer} wins this round!`,
                    './images/win.png'
                );
                currentRound++;
                resetBoard();
            } else {
                declareFinalWinner();
            }
        } else if (board.every(cell => cell)) {
            modal.open("It's a draw!", './images/draw.png');
            if (currentRound < totalRounds) {
                currentRound++;
                resetBoard();
            } else {
                declareFinalWinner();
            }
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    function checkWinner() {
        return winningCombinations.some(combination =>
            combination.every(index => board[index] === currentPlayer)
        );
    }

    function declareFinalWinner() {
        let finalMessage;
        if (scores.X > scores.O) {
            finalMessage = `Player X wins the game with ${scores.X} rounds!`;
        } else if (scores.O > scores.X) {
            finalMessage = `Player O wins the game with ${scores.O} rounds!`;
        } else {
            finalMessage = "It's a draw!";
        }
        modal.open(finalMessage, './images/winner.png');
        resetGame();
    }

    function resetBoard() {
        board.fill(null);
        currentPlayer = "X";
        cells.forEach(cell => {
            cell.innerHTML = '';
            cell.classList.remove('marked');
        });
    }

    function resetGame() {
        resetBoard();
        scores = { X: 0, O: 0 };
        currentRound = 1;
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellMark));
    resetButton.addEventListener('click', resetGame);
});
