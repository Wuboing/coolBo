<template>
  <div>
    <div class="mdui-progress" v-if="progress">
      <div class="mdui-progress-indeterminate" style="background: #ce156c"></div>
    </div>
    <div class="mdui-toolbar mdui-color-theme" style="background: cadetblue;position: fixed;top:0;left:0;">
      <a href="javascript:;"  id="toggle" @click="abc" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
      <span class="mdui-typo-title">Wuboing</span>
      <div class="mdui-toolbar-spacer"></div>
      <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
      <a href="javascript:;" @click="refresh" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
      <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a>
    </div>
    <div>
      <div class="mdui-drawer" id="drawer" style="background: darkgray;margin-top: 56px;float: left">
        <ul class="mdui-list">
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
            <div class="mdui-list-item-content">Inbox</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">star</i>
            <div class="mdui-list-item-content">Starred</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">send</i>
            <div class="mdui-list-item-content">Sent mail</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">drafts</i>
            <div class="mdui-list-item-content">Drafts</div>
          </li>
          <li class="mdui-subheader">Subheader</li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">email</i>
            <div class="mdui-list-item-content">All mail</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
            <div class="mdui-list-item-content">Trash</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">error</i>
            <div class="mdui-list-item-content">Spam</div>
          </li>
        </ul>
      </div>
      <div style="margin-left: 300px;margin-top: 56px;float: left">
        <div class="mdui-textfield mdui-textfield-floating-label">
          <label class="mdui-textfield-label">User name</label>
          <input class="mdui-textfield-input" type="text" required/>
          <div class="mdui-textfield-error">用户名不能为空</div>
        </div>

        <div class="mdui-textfield mdui-textfield-floating-label">
          <label class="mdui-textfield-label">Email</label>
          <input class="mdui-textfield-input" type="email" required/>
          <div class="mdui-textfield-error">邮箱格式错误</div>
        </div>

        <div class="mdui-textfield mdui-textfield-floating-label">
          <label class="mdui-textfield-label">Password</label>
          <input class="mdui-textfield-input" type="text" pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" required/>
          <div class="mdui-textfield-error">密码至少 6 位，且包含大小写字母</div>
        </div>
      </div>
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
        abc(){
          var inst = new mdui.Drawer('#drawer');
          document.getElementById('toggle').addEventListener('click', function () {
            inst.toggle();
          });
        },
      }
    }
</script>

<style scoped>

</style>
