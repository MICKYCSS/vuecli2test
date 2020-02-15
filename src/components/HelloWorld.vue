<template>
<div>
  <div>------hello{{$store.state.test}}----</div>
  <!-- <div>{{$store.getters.more20stu}}</div> -->
  <!-- <div>{{$store.getters.more20stulength}}</div> -->
  <!-- <div>{{$store.getters.moreAgestu(30)}}</div> -->
  <button @click="add">+5</button>
  <button @click="sub">-</button>
  <div>{{$store.state.a.module}}</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    add(count){
      this.$store.dispatch('aUpdateInfo','携带信息').then(msg=>{console.log(msg);
      })
      // this.$store.commit('addCount',count)
      // this.$store.commit({
      //   type:'addCount',
      //   count
      // })
    },
    sub(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
