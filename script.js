// ===========================
// PRIMEHUB 3.0
// ===========================

console.log("Welcome to PrimeHub 🚀");

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Welcome message
window.onload = function () {
    console.log("PrimeHub Loaded Successfully!");
};