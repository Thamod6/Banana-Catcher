document.addEventListener('DOMContentLoaded', () => {
    const musicButton = document.querySelector('.music-button');
    const gameMusic = document.getElementById('gameMusic');
    let isMuted = true;

    // Set initial volume
    gameMusic.volume = 0.5;

    musicButton.addEventListener('click', () => {
        if (isMuted) {
            gameMusic.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
            musicButton.classList.remove('muted');
        } else {
            gameMusic.pause();
            musicButton.classList.add('muted');
        }
        isMuted = !isMuted;
    });
}); 