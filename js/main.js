const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');
navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
});


const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        }
    }
});

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
});

sr.reveal('.hero__text', {
    origin: 'top',
})
sr.reveal('.steps__step', {
    distance: '100px',
    interval: 100
})
sr.reveal('.about__text', {
    origin: 'left',
})
sr.reveal('.about__img', {
    origin: 'right',
    delay: 800
})
sr.reveal('.testimonial__bg', {
    delay: 800
})
sr.reveal('.testimonial__title', {
    delay: 800
})
sr.reveal('.testimonial__slider', {
    delay: 1000
})
sr.reveal('.brands__img', {
    delay: 600,
    interval: 100,
    distance: '100px'
})
sr.reveal('.work__title')
sr.reveal('.work__subtitle', {
    delay: 800
})
sr.reveal('.work__grid', {
    delay: 100
})
sr.reveal('.stats')
sr.reveal('.stats__item', {
    distance: '100px',
    interval: 100
})
sr.reveal('.news__title')
sr.reveal('.news__subtitle', {
    delay: 800
})
sr.reveal('.news__item', {
    distance: '100px',
    interval: 100,
    delay: 1000
})

sr.reveal('.contact__container')
sr.reveal('.contact__text', {delay:800})