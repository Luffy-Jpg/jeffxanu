// ... your existing script.js ...

document.addEventListener('DOMContentLoaded', function() {
  const showGalleryBtn = document.getElementById('show-gallery-btn');
  const imageGallery = document.getElementById('image-gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const galleryImages = imageGallery.querySelectorAll('img');

  showGalleryBtn.addEventListener('click', function() {
    imageGallery.classList.toggle('hidden');
    if (!imageGallery.classList.contains('hidden')) {
      showGalleryBtn.textContent = 'Close Photos';
    } else {
      showGalleryBtn.textContent = 'Show Our Photos';
    }
  });

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
