

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================= CONTACT FORM =================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// ================= TYPING EFFECT =================

const words = [
    "AI Enthusiast",
    "Web Developer",
    "Python Developer",
    "ML Learner",
    "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (charIndex < words[wordIndex].length) {

        typingElement.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(deleteEffect, 1500);

    }

}


function deleteEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteEffect, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}


// Start typing

typingElement.textContent = "";

typeEffect();
