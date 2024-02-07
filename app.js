function filterImages(category) {
  const images = document.querySelectorAll('.boxx');

  images.forEach(image => {
    if (category === 'all') {
      image.classList.remove('hidden');
    } else if (image.classList.contains(category)) {
      image.classList.remove('hidden');
    } else {
      image.classList.add('hidden');
    }
  });
}


