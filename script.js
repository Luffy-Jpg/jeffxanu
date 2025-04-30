document.addEventListener('DOMContentLoaded', function() {
  const showGalleryBtn = document.getElementById('show-gallery-btn');
  const imageGallery = document.getElementById('image-gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const galleryImages = imageGallery.querySelectorAll('img');
  const music = document.getElementById('bg-music');
  const heartButton = document.querySelector('.center-heart');
  const popup = document.getElementById('popup-message');
  let isMusicPlaying = false;

  if (heartButton) {
    heartButton.addEventListener('click', function() {
      if (music.paused) {
        music.play();
        isMusicPlaying = true;
      } else {
        music.pause();
        isMusicPlaying = false;
      }
      popup.style.opacity = 1;
      setTimeout(() => {
        popup.style.opacity = 0;
      }, 2000);
    });
  }

  if (showGalleryBtn) {
    showGalleryBtn.addEventListener('click', function() {
      imageGallery.classList.toggle('hidden');
      if (!imageGallery.classList.contains('hidden')) {
        showGalleryBtn.textContent = 'Close Photos';
      } else {
        showGalleryBtn.textContent = 'Show Our Photos';
      }
    });
  }

  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      lightboxImage.src = this.dataset.full;
      lightbox.classList.remove('hidden');
    });
  });
});

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}
