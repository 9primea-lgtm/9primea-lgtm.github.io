// Portfolio Loaded
console.log("Cyberpunk Portfolio Loaded");

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Vittu's Portfolio");
});

// Neon Glow Effect
const headings = document.querySelectorAll("h1");

headings.forEach((heading) => {
    heading.addEventListener("mouseover", () => {
        heading.style.textShadow =
            "0 0 20px #00f5ff, 0 0 40px #00f5ff";
    });

    heading.addEventListener("mouseout", () => {
        heading.style.textShadow =
            "0 0 10px #00f5ff";
    });
});

// Button Animation
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.innerText = "Sending...";
    });
});

// Simple Scroll Effect
window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;
    console.log("Scroll:", scrollValue);
});
