<template>
    <div id="app">

        <div id="wrapper" v-show="show">
            <div id="header">


                <div class="sub_header">

                    <div class="square"><img src="/static/images/logo.png"/></div>
                    <div class="servers">

                        <ul>
                            <li v-for="user of users" class="user">
                                {{user}}
                            </li>
                        </ul>

                    </div>


                    <div class="email">
                        <a href="#"><img :src="imgurl"/></a>
                    </div>


                </div>


                <div class="orders">


                    <ul>
                        <li v-for="image in images" class="pic">

                            <div class="picture" @click="toggle">
                                <router-link :to="image.url"><img :src="image.src"/></router-link>
                            </div>

                        </li>
                    </ul>

                    <ul class="order_list">
                        <li v-for="order in orders">
                            <div class="index_font" @click="toggle">
                                <router-link :to="order.url"> {{order.name}}</router-link>
                            </div>

                        </li>

                    </ul>


                </div>


            </div>

            <div id="container">

                <div class="vip">
                    <p><img src="static/images/member.png"/>{{msg}}</p>

                </div>


                <div id="main">


                    <div id="one" class="c_bg" v-bind:class="{ active: isActive }">


                        <ul>
                            <li v-for="icon in icons">
                                <div class="layout_one">
                                    <router-link :to="icon.url"><img :src="icon.ico"/></router-link>
                                </div>
                            </li>
                        </ul>


                        <ul>

                            <li v-for="discount in discounts" class="voucher">
                                <div class="layout_one">
                                    <router-link :to="discount.url"> {{discount.name}}</router-link>
                                </div>
                            </li>

                        </ul>


                    </div>


                    <div id="two" class="c_bg">


                        <ul>
                            <li v-for="contact in info">
                                <div class="layout" @click="toggle">
                                    <router-link :to="contact.url">
                                        <img :src="contact.src"/>
                                    </router-link>
                                </div>


                            </li>

                        </ul>


                        <ul>
                            <li v-for="infor in infors">
                                <div class="layout" @click="toggle">

                                    <router-link :to="infor.url"> {{infor.name}}</router-link>


                                </div>
                            </li>

                        </ul>


                    </div>


                    <div id="three" class="c_bg">


                        <div class="three_left" v-html="content"></div>


                        <div class="three_right">
                            <ul class="step">

                                <li>选择款式</li>
                                <li>选择面料</li>
                                <li>个性化DIY</li>
                            </ul>


                        </div>

                    </div>


                    <div id="four" class="c_bg">

                        <ul>
                            <li v-for="online in index">
            <div class="layout_two">
                <router-link :to="online.url"><img :src="online.src"/></router-link>
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <li v-for="server in site">
                                <div class="layout_two">
                                    {{server.name}}
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>


            <div id="footer">
            </div>

        </div>


        <router-view></router-view>


    </div>
</template>

<script>


    import Header from "./components/wish";
    import Foot from "./components/foot";

    import Contact from "./components/contact/contact";
    import Address from "./components/address";
    import Info from "./components/info/info";
    import Order from "./components/order/order";
    import Height from "./components/height";

    export default {
        name: 'App',
        components: {
            Contact,
            Address,
            Header,
            Foot,
            Info,
            Order,
            Height

        },

        data() {
            return {
                msg: '开通VIP特权',
                orders: [
                    {name: '全部订单', url: '/all'},
                    {name: '待付款', url: '/all'},
                    {name: '待发货', url: '/all'},
                    {name: '待收货', url: '/all'},
                    {name: '维修', url: '/all'}
                ],

                discounts: [
                    {name: '抵用劵', url: '/coupon'},
                    {name: '身高数据', url: '/height'},
                    {name: '会员特权', url: '/member'}
                ],

                images: [
                    {src: './static/images/icon.png', url: '/all'},
                    {src: './static/images/icon1.png', url: '/all'},
                    {src: './static/images/icon2.png', url: '/all'},
                    {src: './static/images/icon3.png', url: '/all'},
                    {src: './static/images/icon4.png', url: '/all'}
                ],

                icons: [
                    {ico: './static/images/icon5.png', url: '/coupon'},
                    {ico: './static/images/icon6.png', url: '/height'},
                    {ico: './static/images/icon7.png', url: '/member'}
                ],

                infors: [
                    {name: '个人信息', url: '/info'},
                    {name: '地址管理', url: '/address'},
                    {name: '交易记录', url: '/order'},
                    {name: '愿望清单', url: '/wish'}
                ],
                info: [
                    {src: './static/images/icon12.png', url: '/info'},
                    {src: './static/images/icon13.png', url: '/contact'},
                    {src: './static/images/icon14.png', url: '/order'},
                    {src: './static/images/icon15.png', url: '/wish'},
                ],

                site: [
                    {name: '人工客服'},
                    {name: '在线反馈'},
                    {name: '帮助'},
                    {name: '关于我们'}
                ],


                index: [
                    {src: './static/images/icon8.png', url: '/size'},
                    {src: './static/images/icon9.png', url: '/size'},
                    {src: './static/images/icon10.png', url: '/size'},
                    {src: './static/images/icon11.png', url: '/submit'},
                ],

                users: {
                    name: "赖连庄",
                    tel: "18815154008"
                },
                isActive: true,
                content: "私人定制<br />规则",
                imgurl: "./static/images/mail.png ",
                show: true,


            }
        },
        created() {
            var that = this;
            this.bus.$on('show', function () {
                that.show = true;
            });

            this.bus.$on('hide', function () {
                that.show = false;
            });
        },
        mounted: function () {

        },

        methods: {
            toggle: function () {
                this.show = !this.show

            },


        }


    }


</script>

<style>


</style>
