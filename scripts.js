// Script to change the main image based on the thumbnail clicked
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', function() {
    const newImage = thumbnail.getAttribute('data-image');
    mainImage.src = newImage;
  });
});
