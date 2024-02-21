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
function scrollBackground() {
    if (isMoving) {
        let currentBackgroundPos = parseInt(window.getComputedStyle(gameContainer).backgroundPositionX) || 0;
        gameContainer.style.backgroundPositionX = (currentBackgroundPos - 1) + 'px';
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
