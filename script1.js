// script.js

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Reset the position to the correct slide
    const offset = -index * 100; // Each slide takes 100% of width
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    // Update current index
    currentIndex = index;
}

// Function to go to the next slide
function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const nextIndex = (currentIndex + 1) % totalSlides; // Loop back to first
    showSlide(nextIndex);
}

// Function to go to the previous slide
function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to last
    showSlide(prevIndex);
}

// Show the first slide on load
showSlide(currentIndex);

