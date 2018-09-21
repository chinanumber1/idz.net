<template>
    <div id="member" class="layouts_order">

        <div class="infor_header_order">

            <div class="arrow" @click="routerBack">
                <router-link to="/">
                    <img :src="src"/>
                </router-link>

            </div>

            <h1>{{message}}</h1>
        </div>

        <div class="center">

        </div>


        <div class="member_list">


            <ul>
                <li v-for="member in members" class="member">

                    有效期:{{member.name}}

                    <h1>会籍价格:{{member.price}}</h1>


                </li>

            </ul>

        </div>



        <div class="submit_order">

            <button class="submit_button">立即开通会员</button>

        </div>


    </div>


</template>

<script>

    export default {
        name: 'member',

        data() {
            return {
                message: '开通会员',

                itemList: [],


                orders: [],

                src: "static/images/arrow.png",

                members:[
                    {name:'12个月', price:'588.00元',}
                ]


            }
        },

        mounted: function () {
            this.bus.$emit('hide');
            this.getAjax();
        },
        methods: {

            routerBack() {
                this.bus.$emit('show');


            },

            getAjax: function () {
                var that = this;
                var successCallback = (response) => {
                    console.log('服务器请求成功了')
                    console.log(that)
                    that.orders = response.data.data;

                }
                var errorCallback = (response) => {
                    console.log('服务器请求出错了')
                }
                this.$http.get('/static/api/order.json').then(successCallback, errorCallback);
            },

        }
    }
</script>

<style>
    .center {
        background: url("/static/images/banner.png") no-repeat;
        background-position: center;
        background-size: contain;
        height: 8rem;
        line-height: 8rem;
        color: #fff;
        padding-left: 3rem;
    }

    .infor_header_order {
        padding-left: 3rem;
        padding-right: 3rem;
        padding-top: 3rem;
        padding-bottom: 1rem;

    }

    .order_list_c {
        padding-left: 3rem;
        padding-right: 3rem;
        padding-bottom: 3rem;
    }

</style>
