// quiz.js
class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = new Array(questions.length).fill(null);
        this.timer = null;
        this.timeLeft = 600; // 10 minutes in seconds

        this.shuffleArray(this.questions);
        this.initializeElements();
        this.initializeEventListeners();
        this.startTimer();
        this.displayQuestion();
    }

    initializeElements() {
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.querySelector('.options-container');
        this.progressFill = document.querySelector('.progress-fill');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.previousButton = document.getElementById('previous-btn');
        this.nextButton = document.getElementById('next-btn');
        this.feedbackMessage = document.querySelector('.feedback-message');
        
        this.totalQuestionsSpan.textContent = this.questions.length;
    }

    initializeEventListeners() {
        this.previousButton.addEventListener('click', () => this.previousQuestion());
        this.nextButton.addEventListener('click', () => this.nextQuestion());
    }

    startTimer() {
        const minutesSpan = document.getElementById('minutes');
        const secondsSpan = document.getElementById('seconds');

        this.timer = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                const minutes = Math.floor(this.timeLeft / 60);
                const seconds = this.timeLeft % 60;
                minutesSpan.textContent = minutes.toString().padStart(2, '0');
                secondsSpan.textContent = seconds.toString().padStart(2, '0');
            } else {
                this.endQuiz();
            }
        }, 1000);
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = question.question;
        this.optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index));
            this.optionsContainer.appendChild(optionElement);
        });

        this.updateProgress();
        this.updateNavigationButtons();
    }

    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        options[optionIndex].classList.add('selected');
        this.nextButton.disabled = false;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
    }

    updateNavigationButtons() {
        this.previousButton.disabled = this.currentQuestionIndex === 0;
        this.nextButton.disabled = !this.userAnswers[this.currentQuestionIndex];
        
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextButton.textContent = 'Terminer';
        } else {
            this.nextButton.textContent = 'Suivant';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.endQuiz();
        }
    }

    endQuiz() {
        clearInterval(this.timer);
        this.calculateScore();
        // Save score to localStorage
        localStorage.setItem('quizScore', this.score);
        // Redirect to results page
        window.location.href = 'results.html';
    }

    calculateScore() {
        this.score = this.userAnswers.reduce((total, answer, index) => {
            if (answer === this.questions[index].correctAnswer) {
                return total + 1;
            }
            return total;
        }, 0);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Initialize quiz when data is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof quizData !== 'undefined') {
        new Quiz(quizData);
    } else {
        console.error('Quiz data not found!');
    }
});