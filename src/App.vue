<template>
  <div id="app">
    <h1>calculate</h1>
    <sumFunction :number1="number1" :number2="number2" v-on:getSumFromChild="receiveChildSum"></sumFunction>
    
    <p>从子组件获取到的值：{{sumFromChild}}</p>
  </div>
</template>

<script>
//局部注册主件
import sumFunction from '../src/myPlugin/sumFunction/sum-function'; // 引入子组件
export default {
  name: 'app',
  data () {
    return {
      number1: 4,
      number2: 5,
      sumFromChild:0,
    }
  },
  components:{ //注册组件
    sumFunction //将组件隐射为标签
  },
  methods:{
    receiveChildSum(sum){ //自定义事件，接收子组件的和
      this.sumFromChild = sum;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>