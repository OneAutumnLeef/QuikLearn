document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelectorAll('.carousel-item');
    let index = 0;
  
    function showSlide() {
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      slides[index].style.display = 'block';
    }
  
    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide();
    }
  
    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide();
    }
  
    showSlide();
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  });

  document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error fetching included content:', error));
});