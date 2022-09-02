import { body, hamburger, menu } from "./menu.js"

const userIcon = document.querySelector('.user-menu__icon')
const userMenu = document.querySelector('.user-menu__list')

export const handleUserMenu = () => {
    userIcon.addEventListener('click', () => {
        userMenu.classList.toggle('_show')
        if (userMenu.classList.contains('_show')) {
            menu.classList.remove('_show')
            hamburger.classList.remove('_active')
            body.classList.remove('_lock')
        }
    })
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.user-menu')) {
            userMenu.classList.remove('_show')
        }
    })
}
