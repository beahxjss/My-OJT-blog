// Image Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel-images');
    
    carousels.forEach(carousel => {
        const week = carousel.dataset.week;
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll(`.carousel-dots[data-week="${week}"] .dot`);
        const prevBtn = document.querySelector(`.prev-btn[data-week="${week}"]`);
        const nextBtn = document.querySelector(`.next-btn[data-week="${week}"]`);
        
        let currentSlide = 0;
        
        // Function to show specific slide
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show current slide
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentSlide = index;
        }
        
        // Next button functionality
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
        
        // Previous button functionality
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        });
        
        // Auto-play functionality (optional - uncomment to enable)
        /*
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000); // Change slide every 5 seconds
        */
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile navigation toggle (if you want to add mobile menu functionality)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});