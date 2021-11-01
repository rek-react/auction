//globe
const parent = document.querySelector('.menu')
const parent__original = document.querySelector('.aseption-header')
const item = document.querySelector('.aseption-header__region')


function move() {
   if (window.innerWidth < 525) {
      if (!item.classList.contains('_done')) {
         parent.append(item)
         item.classList.add('_done')
      }
   } else {
      if (item.classList.contains('_done')) {
         parent__original.prepend(item)
         item.classList.remove('_done')
      }
   }
}
move()
window.addEventListener('resize', move)

