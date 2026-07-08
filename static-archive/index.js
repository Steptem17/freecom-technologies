document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.our-function');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            icon.style.color="white";
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            icon.style.color="black";
        }
    });
    
    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.our-function a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.repair-item');
    const pagination = document.querySelector('.carousel-pagination');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    let autoSlideInterval;

    // Create pagination dots
    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.addEventListener('click', () => goToSlide(index));
        if (index === 0) dot.classList.add('active');
        pagination.appendChild(dot);
    });

    // Update carousel display
    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });

        // Update pagination
        document.querySelectorAll('.carousel-pagination button').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        resetAutoSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Event listeners
    leftArrow.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    rightArrow.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    // Initialize
    updateCarousel();
    startAutoSlide();

    // Pause on hover
    const carousel = document.querySelector('.what-we-repair');
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carousel.addEventListener('mouseleave', startAutoSlide);
});


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.reviews-slider');
    const reviews = document.querySelectorAll('.review');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 1; // Start with second review active
    let reviewWidth = reviews[0].offsetWidth + 32; // width + gap
    let autoSlideInterval;
    
    function centerActiveReview() {
        const containerWidth = slider.parentElement.offsetWidth;
        const activeReview = reviews[currentIndex];
        const activePosition = activeReview.offsetLeft;
        const centerOffset = (containerWidth / 2) - (activeReview.offsetWidth / 2);
        const transformValue = centerOffset - activePosition;
        
        slider.style.transform = `translateX(${transformValue}px)`;
        
        // Update active states
        reviews.forEach((review, index) => {
            review.classList.toggle('active', index === currentIndex);
            review.style.transform = index === currentIndex ? 'scale(1.05)' : 'scale(0.95)';
            review.style.opacity = index === currentIndex ? '1' : '0.8';
        });
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % reviews.length;
        centerActiveReview();
        resetAutoSlide();
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        centerActiveReview();
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNext, 3000); 
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    // Pause auto-slide on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    slider.addEventListener('mouseleave', startAutoSlide);

    // Initialize
    centerActiveReview();
    startAutoSlide();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        reviewWidth = reviews[0].offsetWidth + 32;
        centerActiveReview();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-us-container form');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Your message has been sent successfully! We will get back to you soon.';
    form.parentNode.insertBefore(successMessage, form.nextSibling);
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset previous error states
      clearErrors();
      
      // Validate form
      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const complaintInput = form.querySelector('textarea');
      
      let isValid = true;
      
      // Name validation
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
      }
      
      // Email validation
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }
      
      // Complaint validation
      if (complaintInput.value.trim() === '') {
        showError(complaintInput, 'Complaint message is required');
        isValid = false;
      } else if (complaintInput.value.trim().length < 10) {
        showError(complaintInput, 'Message should be at least 10 characters long');
        isValid = false;
      }
      
      if (isValid) {
        // In a real application, you would send the form data to a server here
        // For demonstration, we'll just show the success message
        form.reset();
        successMessage.classList.add('show');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 5000);
      }
    });
    
    function showError(input, message) {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error-message show';
      errorMessage.textContent = message;
      
      input.classList.add('error');
      input.parentNode.insertBefore(errorMessage, input.nextSibling);
      
      // Focus on the first invalid field
      if (!input.parentNode.querySelector('.error-message.show:first-of-type')) {
        input.focus();
      }
    }
    
    function clearErrors() {
      // Remove all error messages
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      
      // Remove error classes from inputs
      document.querySelectorAll('.error').forEach(el => {
        el.classList.remove('error');
      });
      
      // Hide success message
      successMessage.classList.remove('show');
    }
    
    function isValidEmail(email) {
      // Simple email validation regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    // Add input event listeners to clear errors when typing
    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          this.classList.remove('error');
          const errorMsg = this.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
          }
        }
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links in footer
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (document.body.classList.contains('menu-open')) {
                    document.body.classList.remove('menu-open');
                }
            }
        });
    });
    
    // Store locator animation
    const storeLocator = document.querySelector('.store-locator');
    if (storeLocator) {
        storeLocator.addEventListener('mouseenter', function() {
            this.querySelector('::after').style.transform = 'translateX(5px)';
        });
        
        storeLocator.addEventListener('mouseleave', function() {
            this.querySelector('::after').style.transform = 'translateX(0)';
        });
    }
    
    // Dynamic year update for copyright
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }
    
    // Intersection Observer for footer animations
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.footer-container > div').forEach(section => {
        footerObserver.observe(section);
    });
    
    // Social media share functionality
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className.split('fa-')[1];
            let shareUrl = '';
            
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out Freecom Technology')}`;
                    break;
                case 'instagram':
                    // Instagram doesn't support direct sharing, so we'll just link to their profile
                    shareUrl = 'https://www.instagram.com/freecomtech/';
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('Freecom Technology')}`;
                    break;
                default:
                    return;
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
});

