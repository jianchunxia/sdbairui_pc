<template>
    <div class="php">
        <div class="banner">
            <img :src="ban">
        </div>
        <div class="con">
            <div class="first">
                <p class="title">{{kecheng}}</p>
                <p class="text">{{text}}</p>
            </div>
            <div class="second">
                <p class="title">{{title1}}</p>
                <div class="nei" v-for="(item, index) in list" :key="index" >
                    <p class="title">{{item.title}}</p>
                    <p><img :src="item.img"></p>
                </div>
            </div>
            <div class="third">
                <p class="title">{{title2}}</p>
                <p class="text" v-for="(item, index) in num" :key="index" >
                    <span>{{item.tit}}</span>
                    {{item.text}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Php",
    components: {},
    data(){
        return{
            ban:require('../assets/phpban.png'),
            kecheng:'课程介绍',
            text:'PHP即“超文本预处理器”，是一种通用开源脚本语言。PHP是在服务器端执行的脚本语言，与C语言类似，是常用的网站编程语言。PHP独特的语法混合了C、Java、Perl以及 PHP自创的语法。利于学习，使用广泛，主要适用于Web开发领域。PHP作为服务器端的脚本语言，其跨平台性以及丰富的函数库成为网站开发的主流语言，而作为网站必不可少的数据库，轻量、开源、性能优良、简单易用的MySQL得到各个中小型企业的青睐。所以，PHP访问数据库技术就成为网站开发的一项基本且重要的工作。今天，网络技术正以突飞猛进的速度发展，而企业也要与时俱进，只有高度重视并充分利用网络技术，才能在实际运行过程中，让网络成为企业发展的助力。PHP语言作为网站开发的通用语言，简单易行，可移植性好，应用空间广泛，逐渐受到网站开发人员的欢迎。因此，在行业网站建设过程中，具有良好的应用前景。',
            title1:'php课程内容',
            img1:require('../assets/uicon.png'),
            title2:'就业方向',
            num:[
                {tit:'1、网站开发工程师',text:'网站开发工程师拥有很好的职业前景。设计良好的网站，是提升企业的品牌和企业的影响力。对网页制作及网站开发人员的需求量正急速增加，目前国内严重缺乏优秀的网站设计与开发人员。'},
                {tit:'2、PHP后端工程师',text:'后端工程师隶属于软件研发工程师，是从事软件开发相关工作人员，其主要职责是平台设计、接口设计和功能实现。平台设计主要是搭建后端的支撑服务容器;接口设计主要针对于不同行业进行相应的功能接口设计，通常一个平台有多套接口;功能实现则是完成具体的业务逻辑实现。'},
                {tit:'3、数据库开发工程师',text:'数据库开发工程师的职业发展主要分为两条线:技术方向和管理方向。技术方向:根据研究领域的不同，主要分为数据库架构师和数据库运维技术专家两个方向。管理方向:从数据库开发工程师开始持续发展，积累了一定技术深度，并且通过与业务部门交互沟通锻炼了较强的协调和推进能力，可以转型为管理岗位。管理岗位的常见发展路径包括经理、总监、CTO、CEO等，往往在小型创业公司管理岗位发展迅速，在中大型公司的发展速度相对较慢'},
            ],
            list:[
                {title:'基础',img:require('../assets/phpcon1.png')},
                {title:'高级',img:require('../assets/phpcon2.png')},
                {title:'项目实战',img:require('../assets/phpcon3.png')},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .php {

        .banner img {
            width: 100%;
        }

        .con {
            width: 100%;
            padding-bottom: 4rem;

            .first {
                max-width: 1200px;
                margin: 0 auto;
                margin-top: 3rem;

                p {
                    width: 80%;
                    margin: 0 auto;
                }

                .title {
                    text-align: center;
                }

                .text {
                    margin-top: 2rem;
                    text-indent: 2em;
                    line-height: 2rem;
                }
            }

            .second {
                margin-top: 2rem;
                background-color: #F4F4F4;
                padding: 4rem 0;

                .title {
                    font-weight: bold;
                    text-align: center;
                }

                .nei {
                    margin-top: 3rem;

                    .title {
                    font-weight: bold;
                    font-size: 20px;
                    text-align: center;
                    }

                    img {
                        width: 100%;
                        margin-top: 2rem;
                    }
                }

                p {
                    max-width: 1200px;
                    margin: 0 auto;
                    
                    img {
                        width: 100%;
                        margin-top: 4rem;
                    }
                }
            }

            .third {
                max-width: 1200px;
                margin: 0 auto;
                margin-top: 3rem;

                p {
                    width: 80%;
                    margin: 0 auto;
                }

                .title {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .text {
                    // margin-top: 2rem;
                    text-indent: 2em;
                    line-height: 2rem;

                    span {
                        font-weight: bold;
                    }
                }
            }    
        }

        @media screen and (min-width: 1085px) {
            .con {

                .first {

                    .title {
                        font-size: 28px;
                    }
                }

                .second {

                    .title {
                        font-size: 20px;
                    }
                }

                .third {

                    .title {
                        font-size: 28px;
                    }
                }
            }
        }

        @media screen and (max-width: 1080px) {
            .banner img {
                height: 14rem;
            }
            .con {
                font-size: 14px;

                .first {

                    .title {
                        font-size: 24px;
                    }
                }

                .second {

                    .title {
                        font-size: 18px;
                    }
                }

                .third {

                    .title {
                        font-size: 26px;
                    }
                }
            }
        }
    }
</style>