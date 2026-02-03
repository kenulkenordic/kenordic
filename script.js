// Smooth scroll for nav links and buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for sticky nav
                behavior: 'smooth'
            });
        }
    });
});

// Pulse effect interaction or tracking
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', () => {
        console.log("Contact action initiated by lead.");
    });
});