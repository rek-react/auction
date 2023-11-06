import { Navigation, Swiper } from 'swiper'

export const handleSwiper = () => {

    Swiper.use([Navigation])
    const swiperIntroBody = new Swiper('.intro__body', {
        slidesPerView: 1,
        observer: true,
        observerParent: true,
        speed: 600,
        loop: true,
        simulateTouch: false,
        breakpoints: {
            270: {
                autoHeight: true,
            },
            767: {
                autoHeight: false,
            }
        },
        navigation: {
            nextEl: '.slider__arrow-next',
            prevEl: '.slider__arrow-prev',
        }
    })


    const swiperLotsBody = new Swiper('.lots__body', {
        slidesPerView: 3,
        simulateTouch: false,
        observer: true,
        observerParent: true,
        loop: true,
        spaceBetween: 50,
        breakpoints: {
            270: {
                slidesPerView: 1,
            },
            525: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1024: {
                spaceBetween: 50,
            }
        },
        navigation: {
            prevEl: '.lots__arrow_prev span',
            nextEl: '.lots__arrow_next span'
        },

    })


    const swiperQuotesBody = new Swiper('.quotes__body', {
        simulateTouch: false,
        observer: true,
        observerParent: true,
        loop: true,
        speed: 700,
        slidesPerView: 1,
        navigation: {
            nextEl: '.quotes__refresh'
        },
    })
}