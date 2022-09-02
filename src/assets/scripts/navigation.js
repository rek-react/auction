import { menu, hamburger, body } from "./menu.js"

var navLinks = document.querySelectorAll('.menu__link[data-goto]')
const navigationScroll = (event) => {
    if (event.target.closest('.menu__link[data-goto]')) {
        const navLink = event.target.closest('.menu__link[data-goto]')

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

export const handleNavigation = () => {
    if (navLinks) {
        menu.addEventListener('click', navigationScroll)
    }
}


//document.querySelector('.menu__link[data-goto]').classList.add('_active')

