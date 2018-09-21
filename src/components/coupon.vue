<template>
    <div id="coupon" class="layouts">

        <div class="infor_header">

            <div class="arrow" @click="routerBack">
                <router-link to="/">
                    <img :src="src" />
                </router-link>

            </div>

            <h1>{{message}}</h1>
        </div>


        <div class="coupon_content">
            <ul>



 <li v-for="coupon in coupons" class="coupon_li">
     <h1> {{coupon.title}}</h1>
     {{coupon.name}} <h1><span class="coupon_price_color">{{coupon.price}}</span></h1>
    <span class="coupon_time"> {{coupon.time}} </span>
 </li>




            </ul>
        </div>



    </div>
</template>

<script>

    export default {
        name: 'coupon',
        data(){
            return{
                message:'抵用券',
                coupons:'static/images/quan.png',

                users:[

                    {name: '头像',src:'static/images/title.png'},
                    {name: '昵称',value:'赖连庄'},
                    {name: '性别',value:'男'},
                    {name: '个性签名',value:'硅谷一朵花'}
                ],

                coupons:[

                    {title:'新手礼券',name: '2018春夏优惠',price:'￥50',time:'2018-03-15至2018-06-08'},
                    {title:'新手礼券',name: '2017春夏优惠',price:'￥60',time:'2018-03-15至2018-06-08'},
                    {title:'新手礼券',name: '2016春夏优惠',price:'￥70',time:'2018-03-15至2018-06-08'},
                    {title:'新手礼券',name: '2015春夏优惠',price:'￥100',time:'2018-03-15至2018-06-08'},
                ],

                src:"static/images/arrow.png",


            }
        },

        mounted: function () {
            this.bus.$emit('hide');
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
