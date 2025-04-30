const bgMusic = document.getElementById('bg-music');
const popup = document.getElementById('popup-message');

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }

  popup.style.opacity = 1;
  setTimeout(() => {
    popup.style.opacity = 0;
  }, 2000);
}
