import Vue from 'vue'
import HButton from './HButton.vue'
import HInput from './HInput.vue'

new Vue({
  render: h => h(
    'div',
    [
      h(HButton, ['test']),
      h(HInput)
    ]
  ),
}).$mount('#app')
