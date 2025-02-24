// You can add interactive elements here, for example, a slideshow for the hero image.
//  This is a basic example, expand as needed.

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("hero-slide"); // Add this class to your img elements if using multiple slides.
    if (slides && slides.length > 0) {  // Check if slides exist
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
}