document.addEventListener('DOMContentLoaded', () => {
    const crosswordCard = document.querySelector('.product-card:nth-child(1)');
    const sudokuCard = document.querySelector('.product-card:nth-child(2)');

    crosswordCard.addEventListener('mouseenter', () => {
        crosswordCard.querySelector('.product-image').src = 'images/CrosswordExplain.jpg'; // Change to hover image
    });

    crosswordCard.addEventListener('mouseleave', () => {
        crosswordCard.querySelector('.product-image').src = 'images/CrosswordCover.jpg'; // Change back to original image
    });

    sudokuCard.addEventListener('mouseenter', () => {
        sudokuCard.querySelector('.product-image').src = 'images/SudokuExplain.jpg'; // Change to hover image
    });

    sudokuCard.addEventListener('mouseleave', () => {
        sudokuCard.querySelector('.product-image').src = 'images/sudokuCover.jpg'; // Change back to original image
    });
});