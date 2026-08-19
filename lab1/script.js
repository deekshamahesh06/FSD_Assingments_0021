// Mobile menu

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Dark mode

function toggleTheme() {

    document.body.classList.toggle("dark");

}


// Project interaction

function showMessage(project) {

    alert("You selected: " + project);

}


// Contact form

function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been submitted.");

}