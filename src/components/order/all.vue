<template>
    <div id="all" class="layouts_order">

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
        <ul>
 <li v-for="(item,index) in tabs" class="order_all_li" :class="{actives:index == num}" @click="tab(index)">
                {{item}}
            </li>
        </ul>
        <div class="tabCon">
            <div v-for='(itemCon,index) in tabContents' v-show="index == num" class="order_list_line">

                <ul class="shop">
                    <li>编号:{{itemCon.code}}</li>
                    <li> 时间:{{itemCon.time}}</li>
                    <li> 数量:{{itemCon.math}}</li>
                    <li> 价格: <span class="price_color">{{itemCon.price}}</span></li>
                    <li> 状态: <span class="state_color">{{itemCon.state}}</span></li>

                </ul>


            </div>
        </div>


    </div>


</template>

<script>

    export default {
        name: 'all',
        data() {
            return {
                message: '全部',
                title: '花格子衬衫',


                tabs: ["全部", "待付款", "待发货", "待收货", "待评论"],
                tabContents: [],
                num: 0,


                orders: [],

                alls: [

                    {name: '全部'},
                    {name: '待付款'},
                    {name: '待发货'},
                    {name: '待收货'},
                    {name: '待评论'},

                ],

                src: "static/images/arrow.png",


            }
        },

        mounted: function () {
            this.bus.$emit('hide');
            this.getAjax();
        },
        methods: {

            routerBack() {
                this.bus.$emit('show');
                //this.$router.back(-1);

            },
            tab(index) {
                this.num = index;
            },

            getAjax: function () {
                var that = this;
                var successCallback = (response) => {
                    console.log('服务器请求成功了')
                    console.log(that)
                    that.tabContents = response.data.data;

                }
                var errorCallback = (response) => {
                    console.log('服务器请求出错了')
                }
                this.$http.get('/static/api/all.json').then(successCallback, errorCallback);
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

    .order_list_line {
        border-bottom: 1px solid #e5e5e5;
    }

</style>
