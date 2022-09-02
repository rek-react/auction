const refresh = document.querySelector('.quotes__refresh')

export const handleSliderRefresh = () => {
    refresh.addEventListener('click', (e) => {
        refresh.classList.add('_active')
        setTimeout(() => {
            refresh.classList.remove('_active')
        }, 700)
    })
}
