import Vue from 'vue'
import HButton from './HButton.vue'

new Vue({
  render: h => h(HButton, ['test']),
}).$mount('#app')
