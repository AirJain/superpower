/*
 * @Author: your name
 * @Date: 2021-12-07 10:23:17
 * @LastEditTime: 2021-12-09 10:19:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \superpower\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router' 
Vue.config.productionTip = false 
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
//import 'swiper/swiper-bundle.css'

// // import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
