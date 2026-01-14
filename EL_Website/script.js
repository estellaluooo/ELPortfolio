// ===========================
// NAVIGATION
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLLING
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
    }

    lastScroll = currentScroll;
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll('.film-card, .event-card, .brand-card, .writing-card, .section-header');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===========================
// FILM CARD INTERACTIONS
// ===========================

const filmCards = document.querySelectorAll('.film-card');

filmCards.forEach(card => {
    card.addEventListener('click', function() {
        const category = this.dataset.category;
        const videoPath = this.dataset.video;
        const audioPath = this.dataset.audio;
        const pdfPath = this.dataset.pdf;

        // If video file exists, create a video player modal
        if (videoPath) {
            openVideoModal(videoPath, this.querySelector('h3').textContent);
        } else if (audioPath) {
            openAudioModal(audioPath, this.querySelector('h3').textContent);
        } else if (pdfPath) {
            // Open PDF in new tab
            window.open(pdfPath, '_blank');
        } else if (category) {
            console.log(`Opening ${category} reel...`);
            alert(`${category.charAt(0).toUpperCase() + category.slice(1)} reel coming soon! You can link this to your actual video content.`);
        }
    });

    // Add hover effect for cursor
    card.style.cursor = 'pointer';
});

// Film Item Interactions (new row-based layout)
const filmItems = document.querySelectorAll('.film-item[data-video], .film-item[data-audio]');

filmItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const videoPath = this.dataset.video;
        const audioPath = this.dataset.audio;
        const title = this.querySelector('.film-item-title')?.textContent || 'Media';

        if (videoPath) {
            openVideoModal(videoPath, title);
        } else if (audioPath) {
            openAudioModal(audioPath, title);
        }
    });
});

// Film Item Compact Interactions (single page layout)
const filmItemsCompact = document.querySelectorAll('.film-item-compact[data-video], .film-item-compact[data-audio]');

filmItemsCompact.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const videoPath = this.dataset.video;
        const audioPath = this.dataset.audio;
        const title = this.querySelector('.film-item-title')?.textContent || 'Media';

        if (videoPath) {
            openVideoModal(videoPath, title);
        } else if (audioPath) {
            openAudioModal(audioPath, title);
        }
    });
});

// Video Modal Function
function openVideoModal(videoPath, title) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-modal-content">
            <div class="video-modal-header">
                <h3>${title}</h3>
                <button class="video-modal-close">&times;</button>
            </div>
            <video controls autoplay>
                <source src="${videoPath}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.video-modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Audio Modal Function
function openAudioModal(audioPath, title) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-modal-content audio-modal">
            <div class="video-modal-header">
                <h3>${title}</h3>
                <button class="video-modal-close">&times;</button>
            </div>
            <div class="audio-player-container">
                <audio controls autoplay>
                    <source src="${audioPath}" type="audio/wav">
                    Your browser does not support the audio element.
                </audio>
                <div class="audio-visualizer">
                    <div class="audio-wave"></div>
                    <div class="audio-wave"></div>
                    <div class="audio-wave"></div>
                    <div class="audio-wave"></div>
                    <div class="audio-wave"></div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.video-modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    });

    // Animate audio waves
    const waves = modal.querySelectorAll('.audio-wave');
    waves.forEach((wave, index) => {
        wave.style.animationDelay = `${index * 0.1}s`;
    });
}

// ===========================
// CONTACT FORM
// ===========================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value;

    // Form validation
    if (!name || !email || !interest || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, interest, message });

    // Show success message
    showSuccessMessage();

    // Reset form
    contactForm.reset();
});

function showSuccessMessage() {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = '✓ Message Sent!';
    submitButton.style.background = '#4ECDC4';

    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.background = '';
    }, 3000);
}

// ===========================
// TYPING EFFECT FOR HERO (Optional)
// ===========================

const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.innerHTML;

    // Optional: Add typing effect on load
    // Uncomment below to enable

    /*
    heroTitle.innerHTML = '';
    let i = 0;
    const typeSpeed = 50;

    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }

    setTimeout(typeWriter, 500);
    */
}

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================

const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// STATS COUNTER ANIMATION
// ===========================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Observe stat numbers and animate when visible
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const targetText = entry.target.textContent;
            const number = parseInt(targetText.replace(/[^0-9]/g, ''));

            if (!isNaN(number)) {
                entry.target.dataset.animated = 'true';
                // For simplicity, just keep the original text
                // You can implement counter animation if needed
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statObserver.observe(stat);
});

// ===========================
// WRITING SAMPLES LINKS
// ===========================

const writingLinks = document.querySelectorAll('.writing-link');

writingLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const category = this.closest('.writing-card').querySelector('h3').textContent;

        // Replace with actual links to your writing samples
        console.log(`Opening ${category}...`);
        alert(`${category} samples coming soon! You can link this to a dedicated page or PDF.`);
    });
});

// ===========================
// PARALLAX EFFECT (Subtle)
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// ===========================
// PHOTO GALLERY (Brand Case Study)
// ===========================

const photoGallery = document.getElementById('photoGallery');

if (photoGallery) {
    // Enable drag scrolling for the gallery
    let isDown = false;
    let startX;
    let scrollLeft;

    photoGallery.addEventListener('mousedown', (e) => {
        isDown = true;
        photoGallery.style.cursor = 'grabbing';
        startX = e.pageX - photoGallery.offsetLeft;
        scrollLeft = photoGallery.scrollLeft;
    });

    photoGallery.addEventListener('mouseleave', () => {
        isDown = false;
        photoGallery.style.cursor = 'grab';
    });

    photoGallery.addEventListener('mouseup', () => {
        isDown = false;
        photoGallery.style.cursor = 'grab';
    });

    photoGallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - photoGallery.offsetLeft;
        const walk = (x - startX) * 2;
        photoGallery.scrollLeft = scrollLeft - walk;
    });

    // Set initial cursor style
    photoGallery.style.cursor = 'grab';
}

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log('%c👋 Welcome to EL Portfolio!', 'font-size: 20px; font-weight: bold; color: #6C63FF;');
console.log('%cLooking for something? Feel free to explore the code!', 'font-size: 14px; color: #718096;');

// ===========================
// LAZY LOADING FOR IMAGES
// ===========================

// If you add images later, uncomment this to enable lazy loading
/*
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});
*/

// ===========================
// SCROLL TO TOP BUTTON (Optional)
// ===========================

// Uncomment to add a scroll-to-top button
/*
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
*/
