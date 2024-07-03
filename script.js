const toggleIcon = document.getElementById("toggle-icon");
const homeP = document.getElementById("home-p");
const aboutP = document.getElementById("about-p");
const cvBtn = document.getElementById("cv-btn");

let body = document.body;

toggleIcon.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleIcon.src = "moon.png";
        homeP.style.color = "black";
        aboutP.style.color = "black";
        cvBtn.style.color = "black"; // Adjusting color for CV button if needed
    } else {
        toggleIcon.src = "sun.png";
        homeP.style.color = "white";
        aboutP.style.color = "white";
        cvBtn.style.color = "white"; // Adjusting color for CV button if needed
    }
});
