<template>
        <ul class="mdui-list">
            <template v-for="(item,index) in MenuList">
                <template v-if="!item.children">
                    <router-link :to="{path:item.url}" :key="index">
                        <li class="mdui-list-item mdui-ripple">
                            <i class="mdui-list-item-icon mdui-icon material-icons">{{item.icon}}</i>
                            <div class="mdui-list-item-content">{{item.name}}</div>
                        </li>
                    </router-link>
                </template>

<!--                    暂时有bug-->
<!--                <template v-else>-->
<!--                        <li class="mdui-collapse-item mdui-collapse-item-open">-->
<!--                            <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">-->
<!--                                <i class="mdui-list-item-icon mdui-icon material-icons">{{item.icon}}</i>-->
<!--                                <div class="mdui-list-item-content">{{item.name}}</div>-->
<!--                                <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>-->
<!--                            </div>-->
<!--                            <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">-->
<!--                                <template v-for="(list,index) in item.children">-->
<!--                                    <router-link :to="{path:item.url}" :key="index">-->
<!--                                        <li class="mdui-list-item mdui-ripple">{{list.name}}</li>-->
<!--                                    </router-link>-->
<!--                                </template>-->
<!--                            </ul>-->
<!--                        </li>-->
<!--                    </template>-->
            </template>
        </ul>
</template>

<script>
    export default {
        name: "asideBer",
        data(){
            return{
                MenuList:[],
            }
        },
        mounted() {
            this.getMenu()
        },
        methods:{
          getMenu(){
              this.$store.dispatch('getMenuList');
              this.MenuList = this.$store.state.menuNav;
          }
        },
    }
</script>

<style scoped>

</style>
