<template>
    <div id="wish" class="layouts">

        <div class="infor_header">

            <div class="arrow" @click="routerBack">
                <router-link to="/">
                    <img :src="src" />
                </router-link>

            </div>

            <h1>{{message}}</h1>
        </div>


        <ul>
            <li v-for="photo in photos" class="wish_li">
                <img :src="photo.src" />
                 <div> {{photo.name}}</div>

                <div class="wish_price"> {{photo.price}}</div>

            </li>

        </ul>
    </div>
</template>

<script>

    export default {
        name: 'wish',
        data(){
            return{
                message:'愿望清单',

                photos:[


                    {name: '带定制春夏款式',src:'/static/images/1.jpg',price:'$122'},
                    {name: '乔顿致品科技',src:'/static/images/1.jpg',price:'$152'},

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
