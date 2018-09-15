<template>
    <div id="infor">

        <div class="infor_header">

        <div class="arrow" @click="routerBack">
            <router-link to="/">
            <img :src="src" />
            </router-link>

        </div>

        <h1>{{message}}</h1>
        </div>


        <ul>
            <li v-for="user in users" class="user_li">

               <label class="front"> {{user.name}}</label>

                <div class="active_img"> <img :src="user.src" /></div>

                <input type="text" name="" :value="user.value" class="user_input">



            </li>

        </ul>
    </div>
</template>

<script>

    export default {
        name: 'infor',
        data(){
            return{
                message:'个人信息',

                users:[

                    {name: '头像',src:'static/images/title.png'},
                    {name: '昵称',value:'赖连庄'},
                    {name: '性别',value:'男'},
                    {name: '个性签名',value:'硅谷一朵花'}
                ],

                src:"static/images/arrow.png",


            }
        },

        mounted: function () {

        },
        methods:{

            routerBack(){
                 this.bus.$emit('show');
                //this.$router.back(-1);

            }

        }
    }
</script>

<style>
    #info {

    }
</style>
