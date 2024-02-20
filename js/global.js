// Sélectionner l'élément de la voiture
const car = document.getElementById('car');
// Définissez la position initiale de la voiture
car.style.left = '50%';

// Pour déplacer la voiture
function moveCar(event) {
    // Convertir la position actuelle en pixels pour le calcul
    const carRect = car.getBoundingClientRect();
    const gameContainerRect = car.parentElement.getBoundingClientRect();

    switch (event.keyCode) {
        case 37: // Flèche gauche
            if (carRect.left > gameContainerRect.left) {
                car.style.left = (car.offsetLeft - 10) + 'px';
            }
            break;
        case 39: // Flèche droite
            if (carRect.right < gameContainerRect.right) {
                car.style.left = (car.offsetLeft + 10) + 'px';
            }
            break;
        // more..?
    }
}

// Écoutez les événements de touche sur la fenêtre
window.addEventListener('keydown', moveCar);

// Déclaration des variables pour le défilement de fond
const gameContainer = document.getElementById('game-container');
const backgrounds = [
    '../images/highway-0.jpg', '../images/highway-1.jpg', '../images/highway-2.jpg',
    '../images/highway-3.jpg', '../images/highway-4.jpg', '../images/highway-5.jpg',
    '../images/highway-6.jpg', '../images/highway-7.jpg', '../images/highway-8.jpg',
    '../images/highway-9.jpg', '../images/highway-10.jpg', '../images/highway-11.jpg'
];
let currentBackgroundIndex = 0;
let positionX = 0;

// Fonction pour changer l'image de fond
function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    gameContainer.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    // Réinitialiser la position pour le nouvel arrière-plan
    positionX = 0;
}

// Fonction pour mettre à jour la position de fond pour créer l'effet de défilement
function updatePosition() {
    positionX -= 1; // Ajustez la vitesse de défilement ici
    gameContainer.style.backgroundPosition = `${positionX}px 0px`;

    // Si la position atteint la largeur de l'image, changez l'image de fond
    if (Math.abs(positionX) >= gameContainer.offsetWidth) {
        changeBackground();
    }
}

// Fonction pour commencer le défilement de fond
function scrollBackground() {
    // Mettez à jour la position toutes les 20 ms pour créer l'effet de défilement
    setInterval(updatePosition, 20);
}

// Fonction pour démarrer le jeu
function startGame() {
    scrollBackground();
    // Tout autre code d'initialisation du jeu irait ici
}

// Démarrage du jeu
startGame();
