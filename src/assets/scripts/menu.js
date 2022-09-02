export const menu = document.querySelector('.menu')
export const hamburger = document.querySelector('.hamburger-menu')
export const body = document.querySelector('body')

export const handlerMenu = () => {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('_show')
        hamburger.classList.toggle('_active')
        body.classList.toggle('_lock')
    })
}

