// Sélectionner l'élément de la voiture
const car = document.getElementById('car');
car.style.left = '50%'; // Position initiale de la voiture

// Pour déplacer la voiture
function moveCar(event) {
    const carRect = car.getBoundingClientRect();
    const gameContainerRect = car.parentElement.getBoundingClientRect();

    if (event.key === 'ArrowLeft' && carRect.left > gameContainerRect.left) {
        car.style.left = (car.offsetLeft - 5) + 'px';
    } else if (event.key === 'ArrowRight' && carRect.right < gameContainerRect.right) {
        car.style.left = (car.offsetLeft + 5) + 'px';
    }
}

// Écoutez les événements de touche sur la fenêtre
window.addEventListener('keydown', moveCar);

// Variables pour le défilement de fond
const gameContainer = document.getElementById('game-container');
let isMoving = false;

// Fonction pour démarrer et arrêter le défilement de fond
function toggleScroll(event) {
    if (event.key === 'ArrowUp') {
        isMoving = true;
        window.requestAnimationFrame(scrollBackground);
    } else if (event.key === 'ArrowDown') {
        isMoving = false;
    }
}

// Fonction pour mettre à jour la position de fond pour créer l'effet de défilement
// inclure checkCollision
function scrollBackground() {
    if (isMoving) {
        let currentBackgroundPos = parseInt(window.getComputedStyle(gameContainer).backgroundPositionX) || 0;
        gameContainer.style.backgroundPositionX = `${currentBackgroundPos - 1}px`;
        checkCollision(); // Vérifier si la voiture heurte l'obstacle
        window.requestAnimationFrame(scrollBackground);
    }
}

// Écouter les événements de touche pour démarrer/arrêter le défilement
window.addEventListener('keydown', toggleScroll);
window.addEventListener('keyup', toggleScroll);

// Instructions pour l'utilisateur
document.addEventListener('DOMContentLoaded', () => {
    alert("Utilise les flèches gauche et droite pour te déplacer. Appuie sur la flèche haut pour commencer à rouler et sur la flèche bas pour freiner et arrêter.");
});

document.getElementById('start').addEventListener('click', () => isMoving = true);
document.getElementById('stop').addEventListener('click', () => isMoving = false);

// Ajout d'une fonction pour détecter la collision avec l'obstacle
function checkCollision() {
    const carRect = car.getBoundingClientRect();
    const obstacle = document.getElementById('obstacle');
    const obstacleRect = obstacle.getBoundingClientRect();

    if (carRect.left < obstacleRect.right && carRect.right > obstacleRect.left &&
        carRect.top < obstacleRect.bottom && carRect.bottom > obstacleRect.top) {
        // Collision détectée
        alert("Collision ! Jeu terminé.");
        isMoving = false; // Arrêter le jeu
    }
}


