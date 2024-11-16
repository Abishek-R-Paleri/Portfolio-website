function toggleMenu(){
    const menu  = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const image = document.getElementById("pro");

        image.addEventListener("click", () => {
            image.classList.toggle("greyscale"); // Toggle grayscale class on click
        })