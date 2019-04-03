<template>
    <div class = 'calulate'>
      <p>{{number1}} + {{number2}} = {{sum}}</p> 
      <div>
          <input class = 'border' type='text' v-model='number1'>
          <span>+</span>
          <input class = 'border' type='text' v-model='number2'>
          <span @click='sumFunction'>=</span>
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
    // mouthed() {
    //     this.sumFunction();
    // },
    // computed: {
    //     sumFunction(){
    //         this.number1 = Number(this.number1);
    //         this.number2 = Number(this.number2);
    //         console.log(a,b);
    //         if(isNaN(this.number1) || idNaN(this.number2)){
    //             return;
    //         }else{
    //             this.sum = this.number1 + this.number2;
    //             this.$emit("getSumFromChild",this.sum);
    //         }
    //     }
    // }
    methods: {
        sumFunction: function(){
            let a = Number(this.number1);
            let b = Number(this.number2);
            console.log(a,b);
            if(isNaN(a) || idNaN(b)){
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