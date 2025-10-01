document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let current = 'home';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight - 50;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
                current = lastSection.getAttribute('id');
            }
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    const revealSections = () => {
        const sectionsToReveal = document.querySelectorAll('.content-section');
        sectionsToReveal.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', revealSections);
    revealSections();

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const email = contactForm.querySelector('input[name="email"]');
            const name = contactForm.querySelector('input[name="nama"]');
            const subject = contactForm.querySelector('input[name="subjek"]');
            const message = contactForm.querySelector('textarea[name="pesan"]');
            let isValid = true;
            if (!name.value.trim() || !email.value.match(/^\S+@\S+\.\S+$/) || !subject.value.trim() || !message.value.trim()) {
                isValid = false;
            }
            if (!isValid) {
                e.preventDefault();
                alert('Harap isi semua kolom dengan benar!');
            }
        });
    }

    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
});