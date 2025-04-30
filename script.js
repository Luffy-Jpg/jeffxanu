function playMusic() {
  const music = document.getElementById('bg-music');
  const popup = document.getElementById('popup-message');

  if (music.paused) {
    music.play();
  } else {
    music.play(); // Ensure it plays even if it was somehow playing already but didn't trigger the 'play' event properly.
  }

  popup.style.opacity = 1;
  setTimeout(() => {
    popup.style.opacity = 0;
  }, 2000);
}

// Autoplay the music when the page loads (some browsers might block this)
document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('bg-music');
  music.play().catch(error => {
    console.error("Autoplay prevented:", error);
    console.warn("The music might not play automatically due to browser autoplay policies. User interaction (like clicking the heart) is usually required.");
  });
});
