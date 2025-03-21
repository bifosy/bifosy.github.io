let score = 0;
let clickValue = 1;

const scoreDisplay = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');
const upgrade3Button = document.getElementById('upgrade3');

clickerButton.addEventListener('click', () => {
    score += clickValue;
    scoreDisplay.textContent = score;
    showConfetti(); // Função para mostrar confete
    updateUpgrades();
});

upgrade1Button.addEventListener('click', () => {
    if (score >= 10) {
        score -= 10;
        clickValue += 1;
        scoreDisplay.textContent = score;
        updateUpgrades();
    }
});

upgrade2Button.addEventListener('click', () => {
    if (score >= 50) {
        score -= 50;
        clickValue += 5;
        scoreDisplay.textContent = score;
        updateUpgrades();
    }
});

upgrade3Button.addEventListener('click', () => {
    if (score >= 100) {
        score -= 100;
        clickValue += 10;
        scoreDisplay.textContent = score;
        updateUpgrades();
    }
});

function updateUpgrades() {
    upgrade1Button.disabled = score < 10;
    upgrade2Button.disabled = score < 50;
    upgrade3Button.disabled = score < 100;
    upgrade4Button.disabled = score < 200;
}

// Função para mostrar confete
function showConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 3000);
}

// Initial call to set the correct state of upgrade buttons
updateUpgrades();
