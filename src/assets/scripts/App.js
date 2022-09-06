import { checkibg } from './ibg.js'
import { handlerMenu } from './menu.js'
import { handleNavigation } from './navigation.js'
import { handleUserMenu } from './userMenu.js'
import { handleSliderRefresh } from './sliderRefresh.js'
import { handleSwiper } from './swiper.js'
import dynamicAdapt from './dynamicAdapt.js'


class App {
   init() {
      dynamicAdapt.init()
      checkibg()
      handlerMenu()
      handleNavigation()
      handleUserMenu()
      handleSliderRefresh()
      handleSwiper()
   }
}
const app = new App()
app.init()
