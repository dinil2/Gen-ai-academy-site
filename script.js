// Typewriter Effect
const phrases = [
    "AI Website Creation",
    "AI Image Prompts",
    "AI Video Prompts",
    "N8N Automations",
    "Prompt Engineering",
    "AI Automation",
    "Future Starts Here"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typewriterElement = document.getElementById('typewriter');

function type() {
    if (!typewriterElement) return;

    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause before deleting
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typeSpeed = 400; // Pause before typing new phrase
    }

    setTimeout(type, typeSpeed);
}

// Start typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    if (typewriterElement) {
        setTimeout(type, 1000);
    }
});

// Sticky Navbar box shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Contact Form stub submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Emulate sending data and show success message
        formSuccess.style.display = 'block';
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    });
}

// Intersection Observer for fade-in animations on scroll
const fadeElements = document.querySelectorAll('.fade-in-section');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});
