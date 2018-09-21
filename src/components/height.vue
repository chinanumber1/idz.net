<template>
    <div id="height" class="layouts">

        <div class="infor_header">

            <div class="arrow" @click="routerBack">
                <router-link to="/">
                    <img :src="src" />
                </router-link>

            </div>

            <h1>{{message}}</h1>
        </div>


        <div class="size_content">

        <ul>




            <li v-for="size in sizes" class="user_li">

                <label class="front"> {{size.name}}</label>


                <input type="text" name="" :value="size.value" class="user_input">



            </li>


            <li>

                <div class="size_select">
                穿衣习惯

            <input type="radio" id="one" value="One">
            <label for="one">修身</label>

            <input type="radio" id="two" value="Two">
            <label for="two">舒适</label>

                </div>

            </li>

        </ul>

        </div>

        <div class="submit"><button class="submit_button">提交</button></div>
    </div>
</template>

<script>

    export default {
        name: 'height',
        data(){
            return{
                message:'身高数据',



                sizes:[


                    {name: '身高',value:'174CM'},
                    {name: '体重KG',value:'70KG'},
                    {name: '中腰CM',value:'32英寸/82.5CM'},

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
    #height {

    }
</style>
