// navigation.js

// Check if we are on the landing page or the player page
const isLandingPage = window.location.pathname === '/index.html';

if (isLandingPage) {
    // If on the landing page, add event listener to navigate to the player page
    const playerLink = document.querySelector('a');
    playerLink.addEventListener('click', () => {
        window.location.href = 'public/player.html';
    });
} else {
    // If on the player page, add event listener to navigate back to the landing page
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
}
