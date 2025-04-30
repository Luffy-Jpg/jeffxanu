function playMusic() {
  const music = document.getElementById('bg-music');
  const popup = document.getElementById('popup-message');

  if (music.paused) {
    music.play();
  }

  popup.style.opacity = 1;
  setTimeout(() => {
    popup.style.opacity = 0;
  }, 2000);
}
