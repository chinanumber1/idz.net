<template>
    <div id="submit" class="layouts_order">

        <div class="infor_header_order">

            <div class="arrow" @click="routerBack">
                <router-link to="/">
                    <img :src="src"/>
                </router-link>

            </div>

            <h1>{{message}}</h1>
        </div>

        <div class="center">
            订单号：3752454
        </div>


        <div class="order_lists order_list_c">

<ul class="order_index">
    <li>姓名：{{name}}</li>
    <li>手机：{{phone}}</li>
</ul>
            <div class="submit_address">
              <div class="submit_address_left"> 地址 ：{{address}}</div>
                <div class="submit_address_right"><button class="submit_button">增加</button> </div>

            </div>

            <div class="submit_size">

                <div class="submit_size_left">  身体码数：{{size}}</div>
                <div class="submit_size_right"> <button class="submit_button">增加</button> </div>
            </div>


            <ul>
                <li v-for="order in orders" class="order">
                    <h2>标题:{{order.title}}</h2>
                    <div>订单编号:{{order.code}}</div>
                    <div>款号:{{order.time}}</div>

                    <div> DIY:{{order.diy}}</div>
                    <span class="order_price"> 金额:{{order.price}}</span>



                </li>

            </ul>

        </div>


        <div class="submit_order">

            <button class="submit_button">提交订单</button>

        </div>


    </div>


</template>

<script>

    export default {
        name: 'submit',

        data() {
            return {
                message: '订单列表',
                title: '花格子衬衫',
                itemList: [],
                 address:'温州平阳',
                size:'174cm/70kg/32英寸/',
                orders: [],
                name:'赖连庄',
                phone:'18815154008',
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
