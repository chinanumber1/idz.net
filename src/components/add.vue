<template>
    <div id="address" class="layouts">

        <div class="infor_header">

            <div class="arrow" @click="routerBack">
                <router-link to="/">
                    <img :src="src"/>
                </router-link>

            </div>

            <h1>{{message}}</h1>
        </div>


        <ul>
            <li v-for="user in users" class="user_li">

                <label class="front"> {{user.name}}</label>

                <div class="active_img"><img :src="user.src"/></div>

                <input type="text" name="" :value="user.value" class="user_input">


            </li>

        </ul>
        <div class="submit">
            <button class="submit_button">新增加地址</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'address',
        data() {
            return {
                message: '增加地址管理',
                users: [


                    {name: '姓名', value: '赖连庄'},
                    {name: '电话', value: '18815154008'},
                    {name: '地址', valuedi: '浙江省温州市鳌江镇古鳌南路36号'}
                ],

                src: "static/images/arrow.png",


            }
        },

        mounted: function () {

            this.bus.$emit('hide');

        },
        methods: {

            routerBack() {
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
