document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const description = card.getAttribute('data-description');
            const descriptionElement = card.querySelector('.movie-description');
            descriptionElement.textContent = description;
        });
    });
});
