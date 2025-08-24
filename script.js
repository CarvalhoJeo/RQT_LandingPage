const images = [
    'images/foto1.jpg',
    'images/foto2.jpg',
    'images/foto3.jpg'
];

let current = 0;
let showingFirst = true;

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

bg1.style.backgroundImage = `url('${images[0]}')`;
bg1.style.opacity = 1;
bg2.style.opacity = 0;

current = 1;

function changeBackground() {
    const nextImage = `url('${images[current]}')`;

    if (showingFirst) {
        bg2.style.backgroundImage = nextImage;
        bg2.style.opacity = 1;
        bg1.style.opacity = 0;
    } else {
        bg1.style.backgroundImage = nextImage;
        bg1.style.opacity = 1;
        bg2.style.opacity = 0;
    }

    showingFirst = !showingFirst;
    current = (current + 1) % images.length;
}

setInterval(changeBackground, 3500);

const links = document.querySelectorAll('.hero-navigation a');

let currentPath = window.location.pathname.split("/").pop();

if (currentPath === "" || currentPath === "/") {
    currentPath = "index.html";
}

links.forEach(link => {
    const linkHref = link.getAttribute('href');

    if (linkHref === currentPath) {
        link.classList.add('active');
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}