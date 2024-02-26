document.addEventListener('DOMContentLoaded', function() {
  const scrollUpButton = document.getElementById('scrollUpButton');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      scrollUpButton.style.display = 'block';
    } else {
      scrollUpButton.style.display = 'none';
    }
  });

  scrollUpButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  });
});