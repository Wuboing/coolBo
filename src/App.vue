<template>
  <div id="app">
    <router-view/>
    <div class="mdui-fab-wrapper" id="exampleFab">
      <button class="mdui-fab mdui-ripple mdui-color-theme-accent">
        <!-- 默认显示的图标 -->
        <i class="mdui-icon material-icons">add</i>

        <!-- 在拨号菜单开始打开时，平滑切换到该图标，若不需要切换图标，则可以省略该元素 -->
        <i class="mdui-icon mdui-fab-opened material-icons">add</i>
      </button>
      <div class="mdui-fab-dial">
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-pink"><i class="mdui-icon material-icons">backup</i></button>
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-red"><i class="mdui-icon material-icons">bookmark</i></button>
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-orange"><i class="mdui-icon material-icons">access_alarms</i></button>
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-blue"><i class="mdui-icon material-icons">touch_app</i></button>
      </div>
    </div>

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
