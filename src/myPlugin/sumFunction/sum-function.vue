<template>
    <div class = 'calulate'>
      <p>{{number1}} + {{number2}} = {{sum}}</p> 
      <div>
          <input class = 'border' type='text' v-model='number1' @blur="sumFunction">
          <span>+</span>
          <input class = 'border' type='text' v-model='number2' @blur="sumFunction">
          <span @click='sumFunction()'>=</span>
          <span >{{ sum }}</span>
          <span >{{ sum }}</span>
      </div>
    </div>
</template>
<script>
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
    method: {
        sumFunction(){
            let a = Number(this.number1);
            let b = Number(this.number2);
            console.log(a,b);
            if(isNaN(a) || idNaN(b)){
                return a;
            }else{
                this.sum = a + b;
                console.log('zzzzzzzzzzzzzzzzzzzzzzzz',this.num);
                this.$emit("getSumFromChild",this.sum);
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