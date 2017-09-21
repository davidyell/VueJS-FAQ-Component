import Vue from 'vue'
import Faqs from './faqs.vue'

window.Sortable = require('sortablejs');

new Vue({
  el: '#app',
  render: h => h(Faqs)
})
