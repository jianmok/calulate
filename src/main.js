import Vue from 'vue'
import App from './App.vue'
// import SumFunctionpp from '../src/myPlugin/sumFunction/sum-Function.vue'

//全局注册主件
// Vue.component('sumFunction',SumFunction);
new Vue({
  el: '#app',
  render: h => h(App)
});