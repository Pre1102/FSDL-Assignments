console.log("Personal Profile Website Loaded Successfully!");

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        console.log("Navigating to " + link.textContent);
    });

});

const button = document.querySelector(".btn");

button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
});