
//menu
const menu = document.querySelector('.menu')
const menuList = document.querySelector('.menu__list')
const hamburger = document.querySelector('.hamburger-menu')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
   menu.classList.toggle('_show')
   hamburger.classList.toggle('_active')
   body.classList.toggle('_lock')
})


//navigation
var navLinks = document.querySelectorAll('.menu__link[data-goto]')

if (navLinks) {

   menu.addEventListener('click', navigationScroll)
}
document.querySelector('.menu__link[data-goto]').classList.add('_active')

function navigationScroll(event) {
   if (event.target.closest('.menu__link[data-goto]')) {
      const navLink = event.target.closest('.menu__link[data-goto]')
      var navLinkActive = document.querySelector('.menu__link._active')

      document.querySelectorAll('.menu__link').forEach(item => {
         item.classList.remove('_active')
      })

      navLink.classList.add('_active')

      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
         const scrollBlock = document.querySelector(navLink.dataset.goto)
         const scrollBlockValue = scrollBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight

         if (hamburger.classList.contains('_active')) {
            hamburger.classList.remove('_active')
            menu.classList.remove('_show')
            body.classList.remove('_lock')
         }


         window.scrollTo({
            top: scrollBlockValue,
            behavior: 'smooth'
         })
         event.preventDefault()
      }
   }

}


//userMenu
const user_icon = document.querySelector('.user-menu__icon')
const user_menu = document.querySelector('.user-menu__list')
user_icon.addEventListener('click', () => {
   user_menu.classList.toggle('_show')
   if (user_menu.classList.contains('_show')) {
      menu.classList.remove('_show')
      hamburger.classList.remove('_active')
      body.classList.remove('_lock')
   }

})

document.addEventListener('click', (event) => {
   if (!event.target.closest('.user-menu')) {
      user_menu.classList.remove('_show')
   }
})


//swiper
let swiper_intro = new Swiper('.intro__body', {
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
let swiper_lots = new Swiper('.lots__body', {
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
let swiper_quotes = new Swiper('.quotes__body', {
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

//slider refresh

const refresh = document.querySelector('.quotes__refresh')
refresh.addEventListener('click', (e) => {
   refresh.classList.add('_active')
   setTimeout(() => {
      refresh.classList.remove('_active')
   }, 700)
})
