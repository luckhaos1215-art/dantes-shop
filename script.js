document.addEventListener('DOMContentLoaded', function() {
    
    // CTA Button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Obrigado por seu interesse! Em breve você será redirecionado para nosso catálogo completo.');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Animation on Scroll
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.benefit-item, .footer-item, .platform-icon').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
/* CTA Buttons Container */
.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

/* Discord Button */
.cta-button.discord {
    background: linear-gradient(135deg, #7289DA 0%, #5a75c2 100%);
    color: #ffffff;
    border: 2px solid #7289DA;
    padding: 20px 50px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 5px 20px rgba(114, 137, 218, 0.4);
    text-decoration: none;
    display: inline-block;
}

.cta-button.discord:hover {
    background: linear-gradient(135deg, #5a75c2 0%, #4a65b2 100%);
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(114, 137, 218, 0.6);
}

@media (max-width: 768px) {
    .cta-buttons {
        flex-direction: column;
        gap: 15px;
    }

    .cta-button,
    .cta-button.discord {
        width: 100%;
    }
}
