class SudokuGame {
    constructor(data) {
        this.data = data;
        this.grid = data.grid;
        this.solution = data.solution;
        this.startTime = Date.now();
        this.timer = null;
        this.gridWidth = 450; // Default width in pixels

        this.initializeGrid();
        this.startTimer();
    }

    initializeGrid() {
        const gridContainer = document.getElementById('sudoku-grid');
        gridContainer.innerHTML = ''; // Clear any previous cells

        this.grid.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement('div');
                cellElement.className = 'sudoku-cell';

                // Small clues
                if (cell === 0) {
                    const clues = this.getClues(rowIndex, colIndex);
                    clues.forEach(clue => {
                        const clueElement = document.createElement('div');
                        clueElement.className = 'clue';
                        clueElement.textContent = clue;
                        cellElement.appendChild(clueElement);
                    });

                    const input = document.createElement('input');
                    input.maxLength = 1;
                    input.dataset.row = rowIndex;
                    input.dataset.col = colIndex;

                    input.addEventListener('input', (e) => this.handleCellInput(e, input));
                    cellElement.appendChild(input);
                } else {
                    cellElement.textContent = cell; // pre-filled
                }

                gridContainer.appendChild(cellElement);
            });
        });
    }

    // New methods for resizing the grid width
    increaseGridWidth() {
        this.gridWidth += 50; // Increase width by 50 pixels
        this.updateGridSize();
    }
    
    decreaseGridWidth() {
        if (this.gridWidth > 300) { // Prevent width from going below 300 pixels
            this.gridWidth -= 50; // Decrease width by 50 pixels
            this.updateGridSize();
        }
    }

    updateGridSize() {
        const gridElement = document.getElementById('sudoku-grid');
        gridElement.style.width = `${this.gridWidth}px`;
    }

    getClues(rowIndex, colIndex) {
        // Logic to determine and return small clues for the cell
        // This is a placeholder; you can implement a specific logic here
        return [];
    }

    handleCellInput(event, input) {
        const value = event.data;
        if (value && /^[1-9]$/.test(value)) {
            input.value = value;
        } else {
            input.value = ''; // remove if invalid
        }
    }

    startTimer() {
        const timerDisplay = document.getElementById('sudoku-timer');
        this.timer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            timerDisplay.textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    checkAnswers() {
        // Logic for checking answers against the solution
        this.showModal('Félicitations!', 'Vous avez complété le Sudoku avec succès!');
    }

    showModal(title, message) {
        const modal = document.getElementById('modal');
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-message').textContent = message;
        modal.style.display = 'block';

        const closeModal = () => {
            modal.style.display = 'none';
        };

        document.querySelector('.close-modal').onclick = closeModal;
        document.getElementById('modal-btn').onclick = closeModal;
        window.onclick = (event) => {
            if (event.target === modal) closeModal();
        };
    }

    // Inside your SudokuGame class

resetGame() {
    const gridContainer = document.getElementById('sudoku-grid');
    const inputs = gridContainer.querySelectorAll('input');

    inputs.forEach(input => {
        input.value = ''; // Clear all input fields
        input.classList.remove('correct', 'incorrect'); // Remove any styling for correctness
    });

    this.grid = JSON.parse(JSON.stringify(sudokuData.grid)); // Reset to initial grid state
}

verifyAnswers() {
    const gridContainer = document.getElementById('sudoku-grid');
    const inputs = gridContainer.querySelectorAll('input');
    let isCorrect = true;

    inputs.forEach((input, index) => {
        const rowIndex = Math.floor(index / 9);
        const colIndex = index % 9;
        const value = parseInt(input.value, 10); // Ensure we are parsing as integer

        // Log the value and the expected solution for debugging
        console.log(`Input Value: ${value}, Expected: ${sudokuData.solution[rowIndex][colIndex]}`);

        if (value === sudokuData.solution[rowIndex][colIndex]) {
            input.classList.add('correct');
            input.classList.remove('incorrect'); // Ensure incorrect class is removed
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct'); // Ensure correct class is removed
            isCorrect = false;
        }
    });

    if (isCorrect) {
        this.showModal('Félicitations!', 'Vous avez complété le Sudoku avec succès!');
    } else {
        this.showModal('Erreur', 'Certaines réponses sont incorrectes.');
    }
}
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof sudokuData !== 'undefined') {
        const game = new SudokuGame(sudokuData);

        // Add event listeners for the size buttons
        document.getElementById('increase-size-btn').addEventListener('click', () => game.increaseGridWidth());
        document.getElementById('decrease-size-btn').addEventListener('click', () => game.decreaseGridWidth());

        // Add event listeners for reset and verify buttons
        document.getElementById('reset-btn').addEventListener('click', () => game.resetGame());
        document.getElementById('check-btn').addEventListener('click', () => game.verifyAnswers());
    } else {
        console.error('Sudoku data not found!');
    }
});