// Fonction pour afficher les résultats
function displayResults() {
    // Récupérer les scores depuis localStorage
    const quizScore = localStorage.getItem('quizScore') || 0;

    // Afficher les scores
    document.getElementById('quiz-score').innerText = quizScore;

    // Vérifier et afficher les achievements
    const achievementsContainer = document.getElementById('achievements-container');

    // Vérifier les achievements et les ajouter dynamiquement
    if (quizScore >= 20) {
        achievementsContainer.innerHTML += createAchievementHTML(achievements.perfectScore);
    }
    if (localStorage.getItem('quizTime') < 300) { // 5 minutes en secondes
        achievementsContainer.innerHTML += createAchievementHTML(achievements.quickLearner);
    }
    if (localStorage.getItem('crosswordCompleted') === 'true') {
        achievementsContainer.innerHTML += createAchievementHTML(achievements.crosswordMaster);
    }
}

// Fonction pour créer le HTML d'un achievement
function createAchievementHTML(achievement) {
    return `
        <div class="achievement">
            <span>${achievement.icon}</span>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        </div>
    `;
}
// Fonction pour afficher les résultats
function displayResults() {
    const quizScore = localStorage.getItem('quizScore') || 0;
    const sudokuCompleted = localStorage.getItem('sudokuCompleted') === 'true';

    document.getElementById('quiz-score').innerText = quizScore;

    const achievementsContainer = document.getElementById('achievements-container');

    if (sudokuCompleted) {
        achievementsContainer.innerHTML += createAchievementHTML(achievements.crosswordMaster);
    }
}


// Appeler la fonction lors du chargement de la page
window.onload = displayResults;