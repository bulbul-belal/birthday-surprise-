// =========================
// Typing Effect
// =========================

const text = "Happy Birthday!";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (typing && i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
    }
}

// =========================
// Page Load
// =========================

window.onload = () => {

    // প্রথমে Main Website লুকিয়ে রাখবে
    const mainWebsite = document.getElementById("mainWebsite");

    if (mainWebsite) {
        mainWebsite.style.display = "none";
    }

    typeWriter();

};

// =========================
// Open Surprise Button
// =========================

const button = document.getElementById("startBtn");
const gallery = document.getElementById("gallery");
const message = document.getElementById("message");

if (button) {

    button.addEventListener("click", () => {

        gallery.classList.remove("hidden");
        message.classList.remove("hidden");

        gallery.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// =========================
// Fade Animation
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

// =========================
// Cinematic Intro
// =========================

const enterBtn = document.getElementById("enterSite");
const intro = document.getElementById("intro");
const mainWebsite = document.getElementById("mainWebsite");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        intro.style.transition = "opacity 1s ease";
        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            mainWebsite.style.display = "block";

            typing.innerHTML = "";
            i = 0;
            typeWriter();

        }, 1000);

    });

}
