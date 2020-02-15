<template>
  <div id="app">
    -----app-----{{$store.state.counter}}

    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {request} from './network/request'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      counter:'11'
    }
  },
  created(){
    request({
        url: '/headers',
        method: 'get'
    }).then(res=>{
      console.log(res);
      
    })
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
