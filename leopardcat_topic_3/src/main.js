import Vue from 'vue'
import App from './App.vue'
import VueImageCompare from 'vue-image-compare';
Vue.use(VueImageCompare);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
