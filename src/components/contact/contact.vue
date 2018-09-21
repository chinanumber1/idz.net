<template>
    <div id="contact" class="layouts">

        <div class="infor_header">

            <div class="arrow" @click="routerBack">
                <router-link to="/">
                    <img :src="src"/>
                </router-link>

            </div>

            <h1>{{message}}</h1>
        </div>

<div class="contact">
        <ul>
            <li v-for="user in users" class="user_li">

                <label class="contact_name"> {{user.name}}</label>

                <label class="contact_phone"> {{user.phone}}</label>

                <div class="contact_address"> {{user.address}}</div>


            </li>

        </ul>

</div>

        <div class="submit">
            <router-link to="/add">  <button class="submit_button">新增加地址</button></router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'contact',
        data() {
            return {
                message: '增加地址管理',
                users: [


                    {name: '赖连庄', phone: '18815154008',address:'杭州市上城区解放路'},
                    {name: '赖连庄', phone: '18815154008',address:'杭州市上城区解放路'},
                    {name: '赖连庄', phone: '18815154008',address:'杭州市上城区解放路'},

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
