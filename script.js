// =========================
// Typing Effect
// =========================

const text = "Happy Birthday!";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 120);

    }

}

window.onload = () => {

    typeWriter();

};

// =========================
// Open Surprise Button
// =========================

const button = document.getElementById("startBtn");

const gallery = document.getElementById("gallery");

const message = document.getElementById("message");

button.addEventListener("click", () => {

    gallery.classList.remove("hidden");

    message.classList.remove("hidden");

    gallery.scrollIntoView({

        behavior: "smooth"

    });

});

// =========================
// Simple Fade Animation
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll("#gallery,#message").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});
