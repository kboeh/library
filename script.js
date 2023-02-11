const hamburger = document.querySelectorAll(".hamB, .nav-links-list li, .overlay");
const navLinks = document.querySelector(".nav-links-list");
const links = document.querySelectorAll(".nav-links-list li");

// activates the listener when a link is clicked within the dropdown menu
hamburger.forEach((hamburger) => {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        //toggles hamB transform
        document.body.classList.toggle("open");
    });
});