<template>
    <div>
        <div class="mdui-progress" v-if="progress">
            <div class="mdui-progress-indeterminate" style="background: #ce156c"></div>
        </div>
        <div class="user-login">

            <div class="login-box">
                <div class="user-login-header">
                    <h2>自定义</h2>
                    <!--        <p>公交</p>-->
                </div>
                <div class="mdui-textfield mdui-textfield-floating-label" :class="userFalse?'mdui-textfield-invalid':''">
                    <i class="mdui-icon material-icons">account_circle</i>
                    <label class="mdui-textfield-label">User name</label>
                    <input class="mdui-textfield-input" type="text" v-model="user.username" required/>
                    <div class="mdui-textfield-error">用户名不能为空</div>
                </div>

                <!--            <div class="mdui-textfield mdui-textfield-floating-label">-->
                <!--                <label class="mdui-textfield-label">Email</label>-->
                <!--                <input class="mdui-textfield-input" type="email" required/>-->
                <!--                <div class="mdui-textfield-error">邮箱格式错误</div>-->
                <!--            </div>-->

                <div class="mdui-textfield mdui-textfield-floating-label" :class="passFalse?'mdui-textfield-invalid':''">
                    <i class="mdui-icon material-icons">lock</i>
                    <label class="mdui-textfield-label">Password</label>
                    <input class="mdui-textfield-input" type="password" v-model="user.password" pattern="^.*(?=.{6,}).*$" required/>
                    <div class="mdui-textfield-error">密码至少 6 位</div>
                </div>
                <div style="margin-top: 50px">
                    <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
                            style="margin-left: 50px">注册</button>
                    <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
                            style="margin-left: 50px;background-color: #ff4081" @click="onLogin" :disabled="disabled">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import './Login.less'

    export default {
        name: "Login",
        data: function() {
            return {
                user: {
                    username: '',
                    password: ''
                },
                userFalse:false,
                passFalse:false,
                progress:false,
                disabled:false,
            }
        },
        mounted() {

        },
        methods:{
            onLogin(){
                if (this.user.username===''){
                    this.userFalse = true
                    this.$Message.error('请输入用户名');
                }else if (this.user.password===''){
                    this.passFalse = true
                    this.$Message.error('请输入密码');
                }else {
                    this.$axios.post('/api/passport/signin?username='+this.user.username+'&password='+this.user.password).then((res) =>{
                        console.log(res,'res')
                        if (res.data.errCode===0){
                            this.progress = true
                            this.disabled = true
                            setTimeout(()=>{
                                sessionStorage.setItem("accessToken", 'token');
                                localStorage.setItem("accessToken", 'token');

                                localStorage.setItem("user", JSON.stringify(res.data.data));
                                this.progress = false
                                this.disabled = false
                                this.$router.push({name: 'index',params: { userLogin:'1' } })
                            },1000)
                        }else {
                            this.$Notice.error({
                                title: '登录失败！',
                                desc: true ? '' : 'Here is the notification description. Here is the notification description. '
                            });
                        }
                    }).catch(err=>{

                    })
                }
            },
            register(){
                this.$router.push('/register')
            },
        }
    }
</script>

<style scoped type="less">

    .user-login-header{
        text-align: center;
        padding: 20px;
    }
    .user-login-header h2{
        margin-bottom: 10px;
        font-weight: 300;
        font-size: 30px;
        color: #000;
    }
    .user-login-header p{
        font-weight: 300;
        color: #999;
        flex: 2;
    }
    .login-box{
        width: 375px;
        margin: 0 auto;
        box-sizing: border-box;
    }
    .login-footer{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        line-height: 30px;
        padding: 20px;
        text-align: center;
        box-sizing: border-box;
        /*color: rgba(0,0,0,.5);*/
        color: #fff;
    }

    .user-login{
        display: flex;
        height: 100vh;
        position: relative;
        padding-top: 20vh;
        box-sizing: border-box;
    }
    .user-login::before{
        display: block;
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: url(../static/img/login_bg.jpg);
        opacity: 0.08;
        background-size: cover;
        z-index: -8888;
    }
    .user-login .el-form-item{
        margin-bottom: 38px;
    }
</style>
