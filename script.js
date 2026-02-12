// Simple animation on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.style.transform = "translateY(0)";
            card.style.opacity = "1";
        }
    });
});



const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel img");

let index = 0;
const visibleSlides = 3;
const slideWidth = slides[0].offsetWidth + 20; // image + gap

function moveCarousel() {
    index++;

    track.style.transform = `translateX(-${slideWidth * index}px)`;

    if (index >= slides.length - visibleSlides) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = "translateX(0)";
        }, 700);

        setTimeout(() => {
            track.style.transition = "transform 0.6s ease";
        }, 800);
    }
}

/* Auto slide every 3 seconds */
setInterval(moveCarousel, 3000);
