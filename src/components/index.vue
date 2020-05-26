<template>
  <div>
    <div class="mdui-progress" v-if="progress" style="position: relative;z-index: 1000">
      <div class="mdui-progress-indeterminate" style="background: #ce156c"></div>
    </div>
    <div class="mdui-toolbar mdui-color-theme" style="background: cadetblue;position: fixed;top:0;left:0;">
      <a  id="toggle" @click="abc" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
      <span class="mdui-typo-title">XXXXXXX</span>
      <div class="mdui-toolbar-spacer"></div>
      <a class="mdui-textfield mdui-textfield-expandable">
        <button class="mdui-textfield-icon mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></button>
        <input class="mdui-textfield-input" type="text" placeholder="Search"/>
        <button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>
      </a>
<!--      <a class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>-->
      <a  @click="refresh" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
      <li class="mdui-list-item mdui-ripple" mdui-menu="{target: '#example-1'}">
        <div class="mdui-list-item-avatar"><img src="../assets/head.jpg"/></div>
        <div class="mdui-list-item-content">WuBoing</div>
      </li>
        <ul class="mdui-menu" id="example-1">
          <li class="mdui-menu-item">
            <a  class="mdui-ripple"><i class="mdui-icon material-icons">&#xe8d3;</i>个人中心</a>
          </li>
          <li class="mdui-menu-item">
            <a  class="mdui-ripple"><i class="mdui-icon material-icons">&#xe1ad;</i>账户设置</a>
          </li>
          <li class="mdui-menu-item">
            <a @click="quitLogin"  class="mdui-ripple"><i class="mdui-icon material-icons">&#xe8ac;</i>退出登录</a>
          </li>
        </ul>
    </div>
    <div>
      <div class="mdui-drawer" id="drawer" style="background: darkgray;margin-top: 56px;float: left">
        <aside-ber></aside-ber>
      </div>
      <div style="margin-top: 56px;float: left" :style="startWidth?'margin-left:240px;':'margin-left:0;'">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import asideBer from "./asideBer/asideBer";
    export default {
      name: "index",
      components:{asideBer},
      data(){
        return{
          progress: false,
          startWidth: true,
        }
      },
      created() {
        if (this.$route.params.userLogin){
          this.$Notice.success({
            title: '登陆成功！',
            desc: '登陆成功欢迎回来!',
            render: h => {
              return h('span', [
                '登陆成功欢迎回来!'
              ])
            }
          });
        }

      },
      mounted() {
        this.$axios.post('/api/roles/findUserAll').then(res=>{
          console.log(res)
        })
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
        abc(){
          var inst = new mdui.Drawer('#drawer');
          inst.toggle();
          this.startWidth = false
        },
        quitLogin(){
          this.$Notice.success({
            title: '已退出登录！',
            desc: true ? '' : 'Here is the notification description. Here is the notification description. '
          });
          this.$router.push('/login')
        },
      }
    }
</script>

<style scoped>
  .mdui-textfield-expandable.mdui-textfield-expanded{
    width: 300px;
  }
</style>
