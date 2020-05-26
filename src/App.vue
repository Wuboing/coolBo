<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      progress: false
    }
  },
  methods:{
    // 刷新
    refresh(){
      this.progress = true
      setTimeout(()=>{
        this.progress = false
      },1000)
      // location.reload()
    },
  }
}
</script>

<style>
  html{
    width: 100%;
    height: 100%;
  }
</style>
