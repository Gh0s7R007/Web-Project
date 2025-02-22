// data.js
const quizData = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Londres", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Océan Atlantique", "Océan Pacifique", "Océan Indien", "Océan Arctique"],
        correctAnswer: 1
    },
    {
        question: "Quel est le symbole de l'or en chimie ?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: 0
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Victor Hugo", "Marcel Proust", "Gustave Flaubert", "Émile Zola"],
        correctAnswer: 0
    },
        {
            question: "Quelle est la capitale de l'Allemagne ?",
            options: ["Berlin", "Munich", "Hambourg", "Francfort"],
            correctAnswer: 0
        },
        {
            question: "Quelle est la langue officielle du Brésil ?",
            options: ["Espagnol", "Français", "Portugais", "Italien"],
            correctAnswer: 2
        },
        {
            question: "Qui a peint la 'Mona Lisa' ?",
            options: ["Vincent van Gogh", "Leonard de Vinci", "Claude Monet", "Pablo Picasso"],
            correctAnswer: 1
        },
        {
            question: "Quel est l'élément chimique dont le symbole est 'O' ?",
            options: ["Oxygène", "Osmium", "Or", "Ozone"],
            correctAnswer: 0
        },
        {
            question: "En quelle année a eu lieu le premier atterrissage sur la Lune ?",
            options: ["1965", "1969", "1971", "1973"],
            correctAnswer: 1
        },
        {
            question: "Quel est le plus grand désert du monde ?",
            options: ["Désert du Sahara", "Désert de Gobi", "Désert d'Atacama", "Antarctique"],
            correctAnswer: 3
        },
        {
            question: "Quelle est la monnaie du Japon ?",
            options: ["Yuan", "Yen", "Ringgit", "Won"],
            correctAnswer: 1
        },
        {
            question: "Qui a écrit 'Roméo et Juliette' ?",
            options: ["William Shakespeare", "Molière", "Victor Hugo", "Oscar Wilde"],
            correctAnswer: 0
        },
        {
            question: "Quel est le plus grand animal terrestre ?",
            options: ["Éléphant d'Afrique", "Girafe", "Rhino", "Baleine bleue"],
            correctAnswer: 0
        },
        {
            question: "Quel pays a remporté la Coupe du Monde de football 2018 ?",
            options: ["Brésil", "Allemagne", "France", "Argentine"],
            correctAnswer: 2
        },
        {
            question: "Quel est l'organe responsable de la production d'insuline ?",
            options: ["Pancréas", "Foie", "Cœur", "Reins"],
            correctAnswer: 0
        },
        {
            question: "Quel est l'élément chimique dont le symbole est 'Na' ?",
            options: ["Néon", "Sodium", "Nickel", "Azote"],
            correctAnswer: 1
        },
        {
            question: "Combien de continents y a-t-il sur Terre ?",
            options: ["5", "6", "7", "8"],
            correctAnswer: 2
        },
        {
            question: "Quel est le plus long fleuve du monde ?",
            options: ["Amazonie", "Nil", "Mississippi", "Yangtsé"],
            correctAnswer: 0
        },
        {
            question: "Quelle est la capitale du Canada ?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montréal"],
            correctAnswer: 2
        },
        {
            question: "Qui est l'inventeur de l'ampoule électrique ?",
            options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"],
            correctAnswer: 1
        },
    
];



const crosswordData = {
    grid: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1]
    ],
    words: {
        horizontal: [
            {
                number: 1,
                clue: "Faire perdre de la hauteur",
                answer: "azertyui",
                row: 0,
                col: 0
            },
            {
                number: 2,
                clue: "Exprime un fort désintérêt. ⏹ Atomes chargés.",
                answer: "azertyu",
                row: 1,
                col: 0
            },
            {
                number: 3,
                clue: "Appareil de séchage.",
                answer: "azertyu",
                row: 2,
                col: 0
            },
            {
                number: 4,
                clue: "Sollicite le nez. ⏹ Club marseillais.",
                answer: "azertyu",
                row: 3,
                col: 0
            },
            {
                number: 5,
                clue: "Essence extraite de la fleur d'oranger.",
                answer: "HARPEpir",
                row: 4,
                col: 0
            }
            
        ],
        vertical: [
            {
                number: 1,
                clue: "Pardon de prêtre.",
                answer: "PARIS",
                row: 0,
                col: 0
            },
            {
                number: 2,
                clue: "Village isolé. ⏹ Article défini.",
                answer: "PACIFIQUE",
                row: 0,
                col: 1
            },
            {
                number: 3,
                clue: "Variation sonore de la langue. ⏹ Fut largement ouvert",
                answer: "PERROQUET",
                row: 0,
                col: 2
            },
            {
                number: 4,
                clue: "Vociférerions.",
                answer: "DOLPHIN",
                row: 2,
                col: 3
            },
            {
                number: 5,
                clue: "Chaîne de montagnes.",
                answer: "BLEU",
                row: 0,
                col: 4
            }
        ]
    }
};

// Données des achievements (nouvelle fonctionnalité)
const achievements = {
    quickLearner: {
        id: 'quickLearner',
        title: 'Apprenti Rapide',
        description: 'Terminez un quiz en moins de 5 minutes',
        icon: '⚡'
    },
    perfectScore: {
        id: 'perfectScore',
        title: 'Score Parfait',
        description: 'Obtenez 100% à un quiz',
        icon: '🌟'
    },
    crosswordMaster: {
        id: 'crosswordMaster',
        title: 'Maître des Mots Croisés',
        description: 'Complétez une grille sans utiliser d\'indices',
        icon: '🎯'
    },
    weeklyChallenger: {
        id: 'weeklyChallenger',
        title: 'Challenger Hebdomadaire',
        description: 'Participez à 5 défis hebdomadaires',
        icon: '🏆'
    }
};

const sudokuData = {
    grid: [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ],
    solution: [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ],
};