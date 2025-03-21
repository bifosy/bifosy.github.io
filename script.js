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
}

// Initial call to set the correct state of upgrade buttons
updateUpgrades();
