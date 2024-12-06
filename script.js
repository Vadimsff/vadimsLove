let clickCount = 0;
const clickGoal = 10;
let startTime;

function handleClick() {
    if (clickCount === 0) {
        startTime = new Date();
    }

    clickCount++;
    const remainingClicks = clickGoal - clickCount;

    // Update the counter text
    document.getElementById('counter').textContent = `${remainingClicks} clicks remaining`;

    // Update progress bar
    document.getElementById('progress-bar').value = clickCount;

    // Play click sound
    playClickSound();

    // When 10 clicks are reached, display the final message, photo, and animations
    if (clickCount >= clickGoal) {
        displayFinalMessage();
    }
}

function playClickSound() {
    const clickSound = document.getElementById('click-sound');
    clickSound.play();
}

function playCelebratorySound() {
    const celebratorySound = document.getElementById('celebration-sound');
    celebratorySound.play();
}

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.3;
    backgroundMusic.play();
}

function displayFinalMessage() {
    document.getElementById('final-message').style.display = 'block';
    document.getElementById('photo-container').style.display = 'block';
    document.getElementById('share-button').style.display = 'inline-block';
    document.body.style.background = 'linear-gradient(to bottom, #ffcccc, #ffe6e6)'; // Celebratory background

    // Play celebratory sound
    playCelebratorySound();

    // Show confetti
    showConfetti();

    // Track time to reach goal
    trackTime();
}

function showConfetti() {
    // Confetti animation using CanvasConfetti library
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff0000', '#ffcc00']
    });
}

function shareLove() {
    const message = "Nastja loves Vadim so much! 💖 Come join the fun: [URL]";
    if (navigator.share) {
        navigator.share({
            title: 'Nastja Loves Vadim',
            text: message,
            url: window.location.href
        });
    } else {
        alert("Sharing isn't supported on your device. Copy and paste this message: " + message);
    }
}

function trackTime() {
    const endTime = new Date();
    const timeDiff = (endTime - startTime) / 1000; // Time in seconds
    alert(`You reached the goal in ${timeDiff.toFixed(2)} seconds!`);
}

// Start background music when the page loads
window.onload = playBackgroundMusic;
