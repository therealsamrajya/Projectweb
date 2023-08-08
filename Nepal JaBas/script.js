const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const button = document.getElementById('carousel-button');

let currentIndex = 0;

function showSlide(index) {
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    showSlide(currentIndex);
}

button.addEventListener('click', () => {
    // Replace 'another-page.html' with the actual URL of the page you want to navigate to
    window.location.href = 'index history.html';
});

// Start the carousel
showSlide(currentIndex);
setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
