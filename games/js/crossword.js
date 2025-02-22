// crossword.js
class CrosswordGame {
    constructor(data) {
        this.data = data;
        this.grid = data.grid;
        this.words = data.words;
        this.currentInput = null;
        this.startTime = Date.now();
        this.timer = null;
        this.selectedClue = null;

        this.initializeGrid();
        this.initializeClues();
        this.initializeControls();
        this.startTimer();
    }

    initializeGrid() {
        const gridContainer = document.getElementById('crossword-grid');
        gridContainer.style.gridTemplateColumns = `repeat(${this.grid[0].length}, 1fr)`;

        this.grid.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement('div');
                cellElement.className = `grid-cell ${cell === 0 ? 'black' : ''}`;

                if (cell === 1) {
                    const input = document.createElement('input');
                    input.maxLength = 1;
                    input.dataset.row = rowIndex;
                    input.dataset.col = colIndex;
                    
                    input.addEventListener('focus', () => this.handleCellFocus(input));
                    input.addEventListener('input', (e) => this.handleCellInput(e, input));
                    input.addEventListener('keydown', (e) => this.handleKeyNavigation(e, input));

                    cellElement.appendChild(input);

                    // Add cell number if needed
                    this.addCellNumber(cellElement, rowIndex, colIndex);
                }

                gridContainer.appendChild(cellElement);
            });
        });
    }

    addCellNumber(cellElement, row, col) {
        const horizontalWord = this.words.horizontal.find(
            word => word.row === row && word.col === col
        );
        const verticalWord = this.words.vertical.find(
            word => word.row === row && word.col === col
        );

        if (horizontalWord || verticalWord) {
            const number = document.createElement('span');
            number.className = 'number';
            number.textContent = horizontalWord?.number || verticalWord?.number;
            cellElement.appendChild(number);
        }
    }

    initializeClues() {
        const horizontalClues = document.getElementById('horizontal-clues');
        const verticalClues = document.getElementById('vertical-clues');

        this.words.horizontal.forEach(word => {
            const clueElement = this.createClueElement(word, 'horizontal');
            horizontalClues.appendChild(clueElement);
        });

        this.words.vertical.forEach(word => {
            const clueElement = this.createClueElement(word, 'vertical');
            verticalClues.appendChild(clueElement);
        });
    }

    createClueElement(word, direction) {
        const clueElement = document.createElement('div');
        clueElement.className = 'clue-item';
        clueElement.textContent = `${word.number}. ${word.clue}`;
        clueElement.addEventListener('click', () => this.highlightWord(word, direction));
        return clueElement;
    }

    highlightWord(word, direction) {
        // Remove previous highlighting
        document.querySelectorAll('.grid-cell input').forEach(input => {
            input.parentElement.style.backgroundColor = '';
        });

        // Highlight current word
        const cells = this.getWordCells(word, direction);
        cells.forEach(cell => {
            cell.parentElement.style.backgroundColor = '#e3f2fd';
        });

        // Focus first empty cell in word
        const emptyCell = cells.find(cell => !cell.value);
        if (emptyCell) emptyCell.focus();
    }

    getWordCells(word, direction) {
        const cells = [];
        const length = word.answer.length;

        for (let i = 0; i < length; i++) {
            const row = direction === 'horizontal' ? word.row : word.row + i;
            const col = direction === 'horizontal' ? word.col + i : word.col;
            const input = document.querySelector(`input[data-row="${row}"][data-col="${col}"]`);
            if (input) cells.push(input);
        }

        return cells;
    }

    handleCellInput(event, input) {
        const value = event.data;
        if (value) {
            input.value = value.toUpperCase();
            const nextInput = this.findNextCell(input);
            if (nextInput) nextInput.focus();
        }
    }

    handleKeyNavigation(event, input) {
        const row = parseInt(input.dataset.row);
        const col = parseInt(input.dataset.col);

        switch (event.key) {
            case 'ArrowRight':
                this.moveFocus(row, col + 1);
                break;
            case 'ArrowLeft':
                this.moveFocus(row, col - 1);
                break;
            case 'ArrowUp':
                this.moveFocus(row - 1, col);
                break;
            case 'ArrowDown':
                this.moveFocus(row + 1, col);
                break;
            case 'Backspace':
                if (!input.value) {
                    this.moveFocus(row, col - 1);
                }
                break;
        }
    }

    moveFocus(row, col) {
        const input = document.querySelector(`input[data-row="${row}"][data-col="${col}"]`);
        if (input) input.focus();
    }

    findNextCell(currentInput) {
        const row = parseInt(currentInput.dataset.row);
        const col = parseInt(currentInput.dataset.col);
        return document.querySelector(`input[data-row="${row}"][data-col="${col + 1}"]`);
    }

    initializeControls() {
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('check-btn').addEventListener('click', () => this.checkAnswers());
        document.getElementById('reset-btn').addEventListener('click', () => this.resetGrid());
    }

    showHint() {
        // Implementation of hint functionality
    }

    checkAnswers() {
        let allCorrect = true;
        const cells = document.querySelectorAll('.grid-cell input');

        cells.forEach(input => {
            input.parentElement.classList.remove('correct', 'incorrect');
            // Check if input is part of any word and verify its correctness
            // Add appropriate classes based on correctness
        });

        if (allCorrect) {
            this.showModal('Félicitations!', 'Vous avez complété la grille avec succès!');
            this.stopTimer();
        }
    }

    resetGrid() {
        document.querySelectorAll('.grid-cell input').forEach(input => {
            input.value = '';
            input.parentElement.classList.remove('correct', 'incorrect');
        });
        this.startTime = Date.now();
    }

    startTimer() {
        const timerDisplay = document.getElementById('crossword-timer');
        this.timer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            timerDisplay.textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
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
}

// Initialize game when data is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof crosswordData !== 'undefined') {
        new CrosswordGame(crosswordData);
    } else {
        console.error('Crossword data not found!');
    }
});