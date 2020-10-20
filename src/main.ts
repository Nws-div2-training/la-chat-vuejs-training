import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import TitleApp from './views/component/TitleApp.vue'

Vue.config.productionTip = false
Vue.component('app-title', TitleApp)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
