document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide start screen and show the next part of the game
    document.getElementById('startScreen').classList.remove('active');
    // Show the next game section here
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('Hello Kitty believes in love! Try again!');
});
