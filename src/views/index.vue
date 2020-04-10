<template>
  <div>
    <div class="mdui-progress" v-if="progress">
      <div class="mdui-progress-indeterminate" style="background: #ce156c"></div>
    </div>
    <div class="mdui-toolbar mdui-color-theme" style="background: cadetblue;">
      <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
      <span class="mdui-typo-title">Wuboing</span>
      <div class="mdui-toolbar-spacer"></div>
      <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
      <a href="javascript:;" @click="refresh" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
      <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "index",
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

<style scoped>

</style>
