// Global state for slide indices.
// First position corresponds to first slideshow,
// second position correspond to second slideshow deck, etc.
var slideIndex = [1, 1];

// Slide classes to select.
var slideClasses = ["bestCutterSlides", "worstCutterSlides"]
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, slideshowNumber) {
    showSlides(slideIndex[slideshowNumber] += n, slideshowNumber);
}

// Thumbnail image controls
function currentSlide(slideNumber, slideshowNumber) {
    showSlides(slideIndex[slideshowNumber] = slideNumber, slideshowNumber);
}

function showSlides(slideNumber, slideshowNumber) {
    // slideNumber = slide number
    // slideshowNumber = slideClasses index
    var i;
    console.log(slideClasses[slideshowNumber]);
    var slides = document.getElementsByClassName(slideClasses[slideshowNumber]);
    console.log(slides);
    // var dots = document.getElementsByClassName("dot");

    if (slideNumber > slides.length) { slideIndex[slideshowNumber] = 1 }
    if (slideNumber < 1) { slideIndex[slideshowNumber] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    console.log(slides[slideIndex[slideshowNumber] - 1])
    slides[slideIndex[slideshowNumber] - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}