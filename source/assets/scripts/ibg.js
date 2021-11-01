//ibg
const ibg = document.querySelectorAll('.ibg')
function checkibg() {
   for (let index = 0; index < ibg.length; index++) {
      const _ibg = ibg[index];
      if (_ibg.querySelector('img')) {
         const ibgImage = _ibg.querySelector('img')
         _ibg.style.backgroundImage = `url(../../${ibgImage.getAttribute('src')})`
      }
   }
}
checkibg()