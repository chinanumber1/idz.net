<template>
    <div id="size">

        <div class="infor_header">

            <div class="arrow" @click="routerBack">
                <router-link to="/">
                    <img :src="src"/>
                </router-link>

            </div>

            <h1 class="size_box_title">{{message}}</h1>
        </div>


        <div class="size_top">

            <ul class="size_ul">

                <li><label>姓名:</label> <input type="text" name="message" value="" class="grid"></li>

                <li><label>身高(CM): </label> <input type="text" name="message" value="" class="grid"></li>

                <li><label>体重(CM):</label> <input type="text" name="message" value="" class="grid"></li>
            </ul>

        </div>

        <div class="size_container">
            <span class="box_title"> 胸型 <em class="star">*</em></span>

            <ul>
                <li v-for="(word,index) in words" class="body_leg" @click="tab(index)">
                    <div class="heath" :class="{active_size:index == num}"><img :src="word.src"/></div>


                    <div class="heath"><span class="size_title">{{word.name}}</span><br/>
                        {{word.content}}
                    </div>
                </li>


            </ul>


        </div>


        <div class="tab_content" v-show="isShow">


            <ul>
                <li v-for='(itemCon,idx) in tabContents' v-show="idx == num" class="body_leg_box">
                    <h1>{{itemCon.title}}</h1>


                    <div class="heath_box" v-for='(item,index5) in itemCon.data'>

                        <span @click="tab5(index5)" :class="{active_size:index5 == num5&&item.src}"><img :src="item.src"/>


                        </span>
                        <div>

                            <div :class="{active_name:!item.src,active_size1:index5 == num5&&!item.src}"> {{item.name}} </div><br/>
                        <!-- <label v-html="itemCon.content"></label> -->
                      {{item.content}}
                        </div>
                    </div>





                </li>


            </ul>


        </div>


        <div class="size_container">
            <span class="box_title">  肩型  <em class="star">*</em></span>



            <ul>
                <li v-for="(heath,index2) in heaths" class="body_leg" @click="tab2(index2)">

                    <div class="heath" :class="{active_size:index2 == num2}"><img :src="heath.src"/>
                    </div>

                    <div class="heath"><span class="size_title">{{heath.name}}</span><br/>
                        {{heath.content}}
                    </div>
                </li>
            </ul>






        </div>


        <div class="tab_content" v-show="isShow2">


            <ul>




                <li v-for='(itemCons,index2) in tabContents_box' v-show="index2 == num2">

                    {{itemCons.title}}

                    <span class="size_title">{{itemCons.name}}</span><br/>

                     <div v-for='(item,index6) in itemCons.data' class="diy">



                    <span v-html="item.content" class="box_heath_title" :class="{active_size2:index6 == num6}" @click="tab6(index6)"></span>

                         <span v-html="item.sizes" class="box_heath_title" :class="{active_size2:index6 == num6}" @click="tab6(index6)"></span>

                     </div>


                </li>




            </ul>


        </div>


        <div class="size_container">
            <span class="box_title">  腹型  <em class="star">*</em></span>
            <ul>
                <li v-for="(abdominal,index4) in abdominals" class="body_leg" @click="tab4(index4)">
                    <div class="heath" :class="{active_size:index4 == num4}"><img :src="abdominal.src"/></div>


                    <div class="heath"><span class="size_title">{{abdominal.name}}</span><br/>
                        {{abdominal.content}}
                    </div>
                </li>
            </ul>


        </div>


        <div class="size_container">
            <span class="box_title"> 背部  <em class="star">*</em></span>
            <ul>
                <li v-for="(back,index3) in backs" class="body_leg" @click="tab3(index3)">
                    <div class="heath" :class="{active_size:index3 == num3}"><img :src="back.src"/></div>


                    <div class="heath"><span class="size_title">{{back.name}}</span><br/>
                        {{back.content}}
                    </div>
                </li>
            </ul>


        </div>


        <div class="tab_content" v-show="isShow3">


            <ul>
                <li v-for="(itemConsr,index3) in tabContentss" v-show="index3 == num3" class="body_leg_box">
                    {{itemConsr.name}} <br/> <span v-html="itemConsr.content" class="box_heath_title"></span>


                    <div class="heath_box" v-for='(item,index7) in itemConsr.data'>

                        <span @click="tab7(index7)" :class="{active_size:index7 == num7&&item.src}"><img :src="item.src"/></span>

                        <h1>{{item.name}}</h1> <br/>

                       <div :class="{active_name:!item.src,active_size1:index7 == num7&&!item.src}">{{item.content}}</div>


                    </div>










                </li>


            </ul>


        </div>


        <div class="size_center">
            <h1>如有以下身体特征，请选择(选填)</h1>
            <ul class="size_big">
                <li class="btn" v-for="(list,index) in checkList" @click="check(list,index)"
                    :class="{'active1':list.active}">


                    {{list.name}}
                </li>


            </ul>

            <div class="size_round">

                您的裤腰围 <input type="text" class="size_text" value="列如2.2"/> 尺

            </div>

            <h3 @click="toggle" class="arrowDown">备注：</h3>

            <div v-show="isShowtext">
                <textarea rows="10" cols="45" class="text_say">

</textarea>

            </div>

        </div>


        <div class="size_footer">
            <h1>上传您的全身照或半身照(选填)</h1>
            <h3>如果您有意向购买单西和大衣，上传照片将有利于尺寸测量</h3>
            <h1>图列</h1>


            <ul>
                <li v-for="pic in pics" class="body_leg pics">
                    <div class="heath"><img :src="pic.src"/></div>


                    <div class="heath"> {{pic.name}}<br/>
                        {{pic.content}}
                    </div>
                </li>
            </ul>


        </div>


        <div class="upload">
            请上传文件（最多5个，限制每个5M以内
            <input type="file" name="pic" class="file">
        </div>


        <div class="size_mobi">

            <input type="radio" id="one" value="One">
            <label for="one">设置为默认尺寸</label>

        </div>


        <div class="submit_body">


            <button class="submit_button">完成新增</button>
        </div>


    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'address',
        data() {
            return {
                message: '身型选择',
                isShow: false,
                isShow2: false,
                isShow3: false,
                isShowtext: false,
                num: -1,
                num2: -1,
                num3: -1,
                num4: -1,
                num5: -1,
                num6: -1,
                num7: -1,
                isChoose: false,
                activeRadio: false,
                checkList: [{
                    check: ''
                },
                    {
                        check: ''
                    },
                    {
                        check: ''
                    }
                ],

                checkList: [
                    {name: '背部厚实'},
                    {name: '溜肩严重'},
                    {name: '脖子粗'},
                    {name: '胸部肌肉特别多'},
                    {name: '手颈特别长'},
                    {name: '手颈特别长'},

                ],
                chests: [


                    {name: '昵称', src: 'static/images/content/01.jpg'},
                    {name: '电话', src: 'static/images/content/01.jpg'},
                    {name: '地址', src: 'static/images/content/01.jpg'}
                ],

                pics: [


                    {name: '正面照', src: 'static/images/content/01.jpg'},
                    {name: '侧面照', src: 'static/images/content/01.jpg'},
                    {name: '背面照', src: 'static/images/content/01.jpg'}
                ],


                tabContents: [


                    {
                        title: '大臂情况',
                        data: [
                            {name: '大臂肌肉明显', content: '明显肌肉线条健身达人', src: 'static/images/content/3.jpg'},
                            {name: '大肌肉一般', content: '正常手臂', src: 'static/images/content/15.jpg'},
                        ]
                    },





                         {name: '', content: '', src: ''},




                    {
                        title: '脂肪严重程度',

                        data: [
                            {name: '一般'},
                            {name: '中肥'},
                            {name: '超肥'},
                        ],



                    },

                ],


                tabContentss: [


                    {
                        name: '你平时走路特别按手挺胸么',

                        data: [
                            {content: '是'},
                            {content: ' 否'},

                        ],



                    },





                    {name: '', content: '', src: ''},






                    {
                        title: '大臂情况',
                        data: [
                            {name: '微驼', content: '上背部有微小弯曲', src:'static/images/content/12.jpg'},
                            {name: '中驼', content: '背部有明显突出', src: 'static/images/content/13.jpg'},

                            {name: '重驼', content: '上身无法直力', src: 'static/images/content/14.jpg'},
                        ]
                    },




                ],


                tabContents_box: [

                    {title: '平肩严重程度',

                    data:[

                        {content: '<lable>严重</lable>'} ,
                        {sizes:'<lable>一般</lable>'},

                        ]
                    },



                    {name: '', content: '',},


                    {title: '溜肩严重程度',

                        data:[

                            {content: '<lable>严重</lable>'} ,
                            {sizes:'<lable>一般</lable>'},

                        ]
                    },






                ],


                imgfours: [
                    {src: 'static/images/content/02.jpg'},
                    {src: 'static/images/content/02.jpg'},
                    {src: 'static/images/content/02.jpg'},
                    {src: 'static/images/content/02.jpg'},
                    {src: 'static/images/content/02.jpg'},
                ],


                words: [


                    {name: '肌肉', content: '健身达人胸部有明显肌肉轮廓', src: 'static/images/content/3.jpg'},
                    {name: '平躺', content: '少量肌肉或脂肪，正常体态', src: 'static/images/content/2.jpg'},
                    {name: '肥大', content: '有明显脂肪堆积', src: 'static/images/content/1.jpg'}
                ],


                heaths: [


                    {name: '平肩', content: '稳稳挂住单肩包', src: 'static/images/content/4.jpg'},
                    {name: '常规', content: '偶尔挂住单肩包', src: 'static/images/content/5.jpg'},
                    {name: '溜肩', content: '完全挂不住单肩包', src: 'static/images/content/6.jpg'}
                ],

                backs: [


                    {name: '挺腰', content: '平时走路特别按首挺胸', src: 'static/images/content/12.jpg'},
                    {name: '直背', content: '正常体态或微驼', src: 'static/images/content/13.jpg'},
                    {name: '驼背', content: '背部有明显驼背', src: 'static/images/content/14.jpg'}
                ],


                abdominals: [


                    {name: '凹陷', content: '腹部往里并获完全', src: 'static/images/content/7.jpg'},
                    {name: '平坦', content: '摸起来稍有幅度', src: 'static/images/content/8.jpg'},
                    {name: '微凸', content: '小肚腩', src: 'static/images/content/9.jpg'},
                    {name: '中凸', content: '腹部突出明显', src: 'static/images/content/10.jpg'},
                    {name: '重凸', content: '站立时无法看到脚', src: 'static/images/content/11.jpg'}
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

            },

            selectTar() {

            },

            toggle() {
                this.isShowtext = !this.isShowtext

            },

            tab(index) {
                this.num = index;
                this.isShow = true;

            },

            tab2(index2) {
                this.num2 = index2;
                this.isShow2 = true;
            },

            tab3(index3) {
                this.num3 = index3;
                this.isShow3 = true;
            },

            tab4(index4) {
                this.num4 = index4;

            },

            tab5(index5) {
                this.num5 = index5;


            },


            tab6(index6) {
                this.num6 = index6;


            },

            tab7(index7) {
                this.num7 = index7;


            },


            fun(_idx) {
                //e.target.style.backgroundColor =  "#"+Math.floor(Math.random()*0xffffff).toString(16);
                var data = this.tabContents;
                data.forEach(o => {
                    o.active = false;
                })
                data[_idx].active = true;
                console.log(_idx)
                this.tabContents = [].concat(data);
            },


            togglePay: function () {
                this.isChoose = !this.isChoose
            },

            selectRadio(list, index) {
                this.$nextTick(function () {
                    this.radioList.forEach(function (list) {
                        Vue.set(list, 'active', false);
                    });
                    Vue.set(list, 'active', true);
                });


            },

            check(list, index) {
                if (list.active) {
                    Vue.set(list, 'active', false);
                } else {
                    Vue.set(list, 'active', true);
                }
            }


        }
    }
</script>

<style>

</style>
