<template>
  <div id="list">
    <div class="width center">
      <div class="con" v-for="(item, index) in list" :key="index">
        <div class="left">
          <div class="time">
            {{ item.create_time }}
            <img src="../../assets/list1.png" alt="" class="pos" />
          </div>
        </div>
        <div class="right">
          <dl>
            <dt><img :src="item.image" alt="" /></dt>
            <div>
              <dd class="title">
                {{ item.title }}
              </dd>
              <dd class="text">
                {{ item.content }}
              </dd>
              <dd class="cha" @click="go(index)">查看全文</dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="page">
        <!-- <el-pagination layout="prev, pager, next" :total="50">
        </el-pagination> -->
        <div class="page-bar">
          <ul>
            <li v-if="cur > 1">
              <a v-on:click="cur--, pageClick()"></a>
            </li>
            <li v-if="cur == 1"><a class="banclick"></a></li>
            <li
              v-for="index in indexs"
              v-bind:class="{ active: cur == index }"
              :key="index"
            >
              <a v-on:click="btnClick(index)">{{ index }}</a>
            </li>
            <li v-if="cur != all">
              <a v-on:click="cur++, pageClick()">></a>
            </li>
            <li v-if="cur == all"><a class="banclick">></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getindexnewsXq} from "../../api/http.js";
export default {
  data() {
    return {
      all: 6, //总页数
      cur: 1, //当前页码
      totalPage: 0, //当前条数
      // list: [
      //   {
      //     time: "2021-03-25",
      //     src: require("../../assets/List2.png"),
      //     title: "山东柏瑞 | 淄博校区学习经验分享（一）",
      //     content:
      //       " 为了更好地教育学生、服务学生、影响学生，提高教师师资水平及综合素养迫在眉睫且任重道远。为此，特制定全员学习、整体提升计划。",
      //     url: "https://mp.weixin.qq.com/s/P2v5bv4Vl0wsEuAK-1JLtg",
      //   },
      //   {
      //     time: "2021-03-25",
      //     src: require("../../assets/List2.png"),
      //     title: "山东柏瑞 | 淄博校区学习经验分享（一）",
      //     content:
      //       " 为了更好地教育学生、服务学生、影响学生，提高教师师资水平及综合素养迫在眉睫且任重道远。为此，特制定全员学习、整体提升计划。",
      //     url: "https://mp.weixin.qq.com/s/P2v5bv4Vl0wsEuAK-1JLtg",
      //   },
      //   {
      //     time: "2021-03-25",
      //     src: require("../../assets/List2.png"),
      //     title: "山东柏瑞 | 淄博校区学习经验分享（一）",
      //     content:
      //       " 为了更好地教育学生、服务学生、影响学生，提高教师师资水平及综合素养迫在眉睫且任重道远。为此，特制定全员学习、整体提升计划。",
      //     url: "https://mp.weixin.qq.com/s/P2v5bv4Vl0wsEuAK-1JLtg",
      //   },
      //   {
      //     time: "2021-03-25",
      //     src: require("../../assets/List2.png"),
      //     title: "山东柏瑞 | 淄博校区学习经验分享（一）",
      //     content:
      //       " 为了更好地教育学生、服务学生、影响学生，提高教师师资水平及综合素养迫在眉睫且任重道远。为此，特制定全员学习、整体提升计划。",
      //     url: "https://mp.weixin.qq.com/s/P2v5bv4Vl0wsEuAK-1JLtg",
      //   },
      //   {
      //     time: "2021-03-25",
      //     src: require("../../assets/List2.png"),
      //     title: "山东柏瑞 | 淄博校区学习经验分享（一）",
      //     content:
      //       " 为了更好地教育学生、服务学生、影响学生，提高教师师资水平及综合素养迫在眉睫且任重道远。为此，特制定全员学习、整体提升计划。",
      //     url: "https://mp.weixin.qq.com/s/P2v5bv4Vl0wsEuAK-1JLtg",
      //   },
      // ],
    };
  },
  created(){
    this.setlist();
  },
  methods: {
    setlist(){
      var that = this;
      getindexnewsXq().then((res) => {
        that.list = res.data.data.data;
        console.log(that.list);
      });
    },
     go(index) {
      window.open(this.list[index].url);
    },
    //请求数据
    dataListFn: function (index) {
      this.$axios
        .get("http://127.0.0.1:8090/demand/selectListByPage", {
          params: {
            page: index,
            limit: "10",
            state: 0,
          },
        })
        .then((res) => {
          if (res.data.message == "success") {
            this.dataList = [];
            for (let i = 0; i < res.data.data.length; i++) {
              this.dataList.push(res.data.data[i]);
            }
            this.all = res.data.totalPage; //总页数
            this.cur = res.data.pageNum;
            this.totalPage = res.data.totalPage;
          }
        });
    },
    //分页
    btnClick: function (data) {
      //页码点击事件
      if (data != this.cur) {
        this.cur = data;
      }
      //根据点击页数请求数据
    //   this.dataListFn(this.cur.toString());
    },
    pageClick: function () {
      //根据点击页数请求数据
      // this.dataListFn(this.cur.toString());
    },
  },
  computed: {
    //分页
    indexs: function () {
      var left = 1;
      var right = this.all;
      var ar = [];
      if (this.all >= 5) {
        if (this.cur > 3 && this.cur < this.all - 2) {
          left = this.cur - 2;
          right = this.cur + 2;
        } else {
          if (this.cur <= 3) {
            left = 1;
            right = 5;
          } else {
            right = this.all;
            left = this.all - 4;
          }
        }
      }
      while (left <= right) {
        ar.push(left);
        left++;
      }
      return ar;
    },
  },
};
</script>
<style scoped lang="scss">
.page-bar {
  margin: 40px auto;
  margin-top: 150px;
}
ul,
li {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.page-bar li:first-child > a {
  margin-left: 0px;
}
.page-bar a {
  // border: 1px solid #ddd;
  text-decoration: none;
  position: relative;
  float: left;
  padding: 4px 6px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #999;
  cursor: pointer;
  margin-right: 20px;
}
.page-bar a:hover {
  background-color: #eee;
}
.page-bar a.banclick {
  cursor: not-allowed;
}
.page-bar .active a {
  color: #20b09f;
  cursor: default;
  border-bottom: 1px solid #20b09f;
}
.page-bar i {
  font-style: normal;
  color: #d44950;
  margin: 0px 4px;
  font-size: 12px;
}

.width {
  max-width: 1200px;
  margin: 0 auto;
}
#list {
  background: #f5f5f5;
  padding: 27px 0px;
  .center {
    background: #fff;
    padding: 20px 0px 50px 0px;
    box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.17);
    .con {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .left {
        width: 14%;
        .time {
          width: 60%;
          text-align: center;
          color: #666666;
          padding: 4px 0px;
          background: #f5f5f5;
          border-radius: 14px;
          // background: #F5F5F5;
          margin: 0 auto;
          position: relative;
          .pos {
            position: absolute;
            top: -1%;
            // bottom: 50%;
            left: 154%;
            width: 56px;
            height: 30px;
          }
        }
      }
      .right {
        width: 80%;
        margin: 0 auto;
        border-left: 1px solid #a7a7a7;
        box-sizing: border-box;
        padding-left: 5%;
        dl {
          width: 90%;
          display: flex;
          justify-self: unset;
          justify-content: space-between;
          flex-wrap: wrap;
          dt {
            width: 39%;
            img {
              width: 100%;
            }
          }
          div {
            width: 50%;
            .title {
              font-size: 20px;
              line-height: 40px;
              font-weight: 700;
              margin: 0 ;
            }
            .text {
              font-size: 16px;
              line-height: 26px;
              margin: 0 ;
            }
            .cha {
              margin: 0 ;
              width: 115px;
              background: #dadada;
              font-size: 16px;
              line-height: 24px;
              color: #333333;
              text-align: center;
              margin-top: 10px;
              padding: 4px 0px;
              border-radius: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .page {
    width: 36%;
    margin: 0 auto;
    // padding: 30px 0px;
    padding-bottom: 30px;
  }
  @media screen and (max-width:1080px) {
    .center {
      background: #fff;
      padding: 20px 0px 50px 0px;
      box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.17);
      .con {
        display: flex;
        justify-content: space-around;
        align-items: stretch;
        position: relative;
        .left {
          width: 44%;
          .time {
            width: 90%;
            text-align: center;
            color: #666666;
            padding: 10px 0px;
            background: #f5f5f5;
            border-radius: 14px;
            // background: #F5F5F5;
            margin: 0 auto;
            position: relative;
            .pos {
              display: none;
            }
          }
        }
        .right {
          width: 80%;
          margin: 0 auto;
          border-left: 1px solid #a7a7a7;
          box-sizing: border-box;
          padding-left: 5%;
          dl {
            width: 90%;
            display: flex;
            justify-self: unset;
            justify-content: space-between;
            dt {
              width: 98%;
              position: relative;
              left: 0%;
              bottom: 0;
              img {
                width: 100%;
              }
            }
            div {
              .title {
                font-size: 16px;
                line-height: 40px;
                font-weight: 700;
              }
              .text {
                font-size: 12px;
                line-height: 26px;
              }
              .cha {
                width: 88px;
                font-size: 12px;
                line-height: 24px;
              }
            }
          }
        }
      }
    }
    .page {
      width: 78%;
      margin: 0 auto;
      // padding: 30px 0px;
      padding-bottom: 30px;
    }
  }
}
</style>