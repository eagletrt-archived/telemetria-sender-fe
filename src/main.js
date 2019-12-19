import Vue from 'vue'
import App from './App.vue'
import VueSpinners from 'vue-spinners'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
 
Vue.use(VueSpinners)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
