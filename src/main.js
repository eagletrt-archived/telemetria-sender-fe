import Vue from 'vue'
import App from './App.vue'
import VueSpinners from 'vue-spinners'
 
Vue.use(VueSpinners)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
