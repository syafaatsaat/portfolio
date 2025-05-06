window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // when user scrolls down 50px
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

// Toggle mobile menu
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
let showMenu = false;

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('active');

    if (showMenu) {
        toggle.classList.remove("close");
    }
    else {
        toggle.classList.add("close");
    }
    showMenu = !showMenu;
});

// Smooth scroll adjustment to offset fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = document.getElementById('navbar').offsetHeight;
        const top = target.offsetTop - offset;

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });

        // Close menu if open (on mobile)
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
    });
});