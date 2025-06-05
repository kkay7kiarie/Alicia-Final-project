
// Smooth scrolling function
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Toggle FAQ answers
function toggleAnswer(button) {
    const parent = button.parentElement;
    const answer = parent.querySelector('.faq-answer');
    
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        button.classList.remove('rotated');
    } else {
        answer.classList.add('show');
        button.classList.add('rotated');
    }
}



// Testimonial navigation (placeholder functions)
function nextTestimonial() {
    // Add logic to show next testimonial
    console.log('Next testimonial');
}

function previousTestimonial() {
    // Add logic to show previous testimonial
    console.log('Previous testimonial');
}

// Contact form submission
function sendMessage() {
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;
    
    if (email && message) {
        alert('Thank you for your message! We will get back to you within 12 hours.');
        document.getElementById('user-email').value = '';
        document.getElementById('user-message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main-navigation');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('#home-section, #about-section, #services-section,.service-features-section,.delivery-support-section, #resources-section, #contact-section, .testimonials-section, .partnerships-section, .resource-cards-section, .community-section, .faq-section, .contact-intro-section, .main-footer');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects to service boxes
document.addEventListener('DOMContentLoaded', function() {
    const serviceBoxes = document.querySelectorAll('#box3, #box4, .box2A, .box2B, .box2C');
    
    serviceBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.Hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${5 + Math.random() * 10}s infinite linear`;
        particle.style.zIndex = '1';
        hero.appendChild(particle);
    }
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', createParticles);

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navbar = document.querySelector('.main-navigation');
    navbar.classList.toggle('mobile-active');
}

// Add click events to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-navigation a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.toLowerCase();
            
            switch(text) {
                case 'home':
                    scrollToSection('#home-section');
                    break;
                case 'about':
                    scrollToSection('#about-section');
                    break;
                case 'services':
                    scrollToSection('#services-section');
                    break;
                case 'track package':
                    alert('Package tracking feature coming soon!');
                    break;
                case 'resources':
                    scrollToSection('#resources-section');
                    break;
                case 'contact':
                    scrollToSection('#contact-section');
                    break;
            }
        });
    });
});
