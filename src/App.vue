<template>
  <div id="app">

      <div id="wrapper" v-if="show">
    <div id="header">


      <div class="sub_header">

          <div class="square"><img src="/static/images/logo.png" /></div>
          <div class="servers">

<ul>
          <li v-for="user of users" class="user">
              {{user}}</li>
</ul>

          </div>


          <div class="email">
              <a href="#"><img :src="imgurl" /></a>
          </div>


      </div>




      <div class="orders">



          <ul>
              <li v-for="image in images" class="pic">

                  <div class="picture">
 <img :src="image.src" />
                  </div>

              </li>
          </ul>

      <ul class="order_list">
        <li v-for="order in orders">
            <div class="index_font">
          {{order.name}}
            </div>

        </li>

      </ul>



      </div>


    </div>

  <div id="container">

      <div class="vip">
          <p><img src="static/images/member.png" />{{msg}}</p>

      </div>



      <div id="main">


      <div id="one" class="c_bg" v-bind:class="{ active: isActive }">




        <ul>
            <li v-for="icon in icons">
           <div class="layout_one">
<img :src="icon.ico" />
           </div>
            </li>
        </ul>


        <ul>
        <li v-for="discount in discounts" class="voucher">
            <div class="layout_one">
 {{discount.name}}
            </div>
        </li>
        </ul>


    </div>


    <div id="two" class="c_bg">


        <ul>
            <li v-for="contact in info">
                <div class="layout"  @click="toggle">
                    <router-link :to="contact.url">
                    <img :src="contact.src" />
                    </router-link>
                </div>


            </li>

        </ul>




        <ul>
            <li v-for="infor in infors">
                <div class="layout" @click="toggle">

                    <router-link :to="infor.url">  {{infor.name}}</router-link>



                </div>
            </li>

        </ul>



    </div>



    <div id="three" class="c_bg">


<div class="three_left" v-html="content"> </div>



        <div class="three_right">
<ul class="step">

    <li>选择款式 </li>
    <li>选择面料 </li>
    <li>个性化DIY </li>
</ul>



        </div>

    </div>



    <div id="four" class="c_bg">

        <ul>
            <li v-for="online in index">
                <div class="layout_two">
                <img :src="online.src" />
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


      <router-view>   </router-view>


  </div>
</template>

<script>


    import Header from "./components/wish";
    import Foot from "./components/foot";

    import Contact from "./components/contact/contact";
    import Address from "./components/address";
    import Info from "./components/info/info";
    import Order from "./components/order/order";

export default {
  name: 'App',
    components: {
        Contact,
        Address,
        Header,
        Foot,
         Info,
        Order

    },

    data () {
        return {
            msg: '开通VIP特权',
            orders:[
                {name: '全部订单' },
                {name: '待付款' },
                {name: '待发货' },
                {name: '已完成' },
                {name: '维修' }
            ],

            discounts:[
                {name: '抵用劵' },
                {name: '交易纪律' },
                {name: '会员特权' }
            ],

            images:[
                {src:'./static/images/icon.png'},
                {src:'./static/images/icon1.png'},
                {src:'./static/images/icon2.png'},
                {src:'./static/images/icon3.png'},
                {src:'./static/images/icon4.png'}
            ],

            icons:[
                {ico:'./static/images/icon5.png'},
                {ico:'./static/images/icon6.png'},
                {ico:'./static/images/icon7.png'}
            ],

            infors:[
                {name: '个人信息',url:'/info' },
                {name: '地址管理',url:'/address' },
                {name: '交易记录',url:'/order' },
                {name: '愿望清单',url:'/wish' }
            ],
            info:[
                {src:'./static/images/icon12.png',url:'/info'},
                {src:'./static/images/icon13.png',url:'/address'},
                {src:'./static/images/icon14.png',url:'/order'},
                {src:'./static/images/icon15.png',url:'/wish'},
            ],

            site:[
                {name: '人工客服' },
                {name: '在线反馈' },
                {name: '帮助' },
                {name: '关于我们' }
            ],



            index:[
                {src:'./static/images/icon8.png'},
                {src:'./static/images/icon9.png'},
                {src:'./static/images/icon10.png'},
                {src:'./static/images/icon11.png'},
            ],

            users:{
               name:"赖连庄",
                tel:"18815154008"
            },
            isActive: true,
            content:"私人定制<br />规则",
            imgurl: "./static/images/mail.png ",
            show:true


        }
    },
    created(){
      var that = this;
       this.bus.$on('show',function () {
          that.show = true;
      })
    },
    mounted: function () {

    },

    methods:{
        toggle:function () {
             this.show=!this.show
        },



    }


}


</script>

<style>



</style>
