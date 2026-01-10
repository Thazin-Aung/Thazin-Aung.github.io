document.addEventListener('DOMContentLoaded', () => {
    // Skills animation
    const skillCards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );
    skillCards.forEach((card, index) => {
        card.classList.add(index % 2 === 0 ? 'slide-right' : 'slide-left');
        observer.observe(card);
    });

    // Services animation
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    serviceObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    serviceCards.forEach((card) => serviceObserver.observe(card));

    // Projects animation
    const projectCards = document.querySelectorAll('.project-card');
    const projectObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    projectObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    projectCards.forEach((card) => projectObserver.observe(card));

    // Animate About Me photo & text
    const aboutPhoto = document.querySelector('.about-photo');
    const aboutText = document.querySelector('.about-text');

    const aboutObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    aboutObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    aboutObserver.observe(aboutPhoto);
    aboutObserver.observe(aboutText);

    // Scroll spy for active menu
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.right-menu ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // adjust offset
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
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

});
