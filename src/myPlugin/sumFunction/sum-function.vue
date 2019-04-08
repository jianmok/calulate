<template>
    <div class = 'calulate'>
      <p>{{number1}} + {{number2}} = {{sum}}</p> 
      <div>
          <input class = 'border' type='text' v-model='number1'>
          <span>+</span>
          <input class = 'border' type='text' v-model='number2'>
          <button @click='sumFunction'>=</button>
          <span >{{ sum }}</span>
      </div>
    </div>
</template>
<script>
// <!-- 
//     传值： string number boolean
//     引用： array object (更改一个地方则所有都会发生变化)
// -->
export default {
    props: ['number1', 'number2'],
    name: 'sumFunction',
    data() {
        return{
            number1: this.number1?this.number1: 0,
            number2: this.number2?this.number2: 0,
            sum: 0
        }
    },
    mouthed() {
        this.sumFunction();
    },
    methods: {
        sumFunction: function(){
            let a = Number(this.number1);
            let b = Number(this.number2);
            if(isNaN(a) || isNaN(b)){
                return a;
            }else{
                this.sum = a + b;
                this.$emit("getSumFromChild",this.sum);
                return this;
            }
        }
    }
}
</script>
<style>
.calculate{
  width: 100%;
  line-height: 26px;
}
.border {
    width: 30px;
    text-align: center;
}
</style>