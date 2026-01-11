document.addEventListener('DOMContentLoaded', () => {
    // ===== Skills Animation =====
    const skillCards = document.querySelectorAll('.skill-card');
    const skillObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    skillObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );
    skillCards.forEach((card, index) => {
        card.classList.add(index % 2 === 0 ? 'slide-right' : 'slide-left');
        skillObserver.observe(card);
    });

    // ===== Services Animation =====
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

    // ===== Projects Animation =====
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

    // ===== About Me Animation =====
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

    // ===== Career Section Animation =====
    const careerItems = document.querySelectorAll('.career-timeline .timeline-item');
    const careerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    careerObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );
    careerItems.forEach((item, index) => {
        item.classList.add(index % 2 === 0 ? 'slide-left' : 'slide-right');
        careerObserver.observe(item);
    });

    // ===== Contact Section Animation =====
    const contactItems = document.querySelectorAll('.contact-section .contact-text, .contact-section .contact-card');
    const contactObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    contactObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );
    contactItems.forEach((item, index) => {
        item.classList.add(index % 2 === 0 ? 'slide-left' : 'slide-right');
        contactObserver.observe(item);
    });

    // ===== Scroll Spy =====
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.right-menu ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
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

    // ===== Hamburger Toggle =====
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".right-menu");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        menu.classList.toggle("open");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            toggle.classList.remove("open");
            menu.classList.remove("open");
        });
    });

    const heroImage = document.querySelector(".hero-image-wrapper");
    const heroText = document.querySelector(".hero-text");

    setTimeout(() => {
      heroImage.classList.add("visible"); // image zoom-out & slide-up
    }, 200);

    setTimeout(() => {
      heroText.classList.add("visible"); // text slide-down
    }, 400);
});
