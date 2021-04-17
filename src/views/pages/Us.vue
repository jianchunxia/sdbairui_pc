<template>
  <div class="contact">
    <!-- banner -->
    <div class="banner">
      <img :src="ban" alt="" />
    </div>
    <!-- 内容 -->
    <div class="con">
      <div class="top">
        <div class="left">
          <p v-for="(item, index) in lianxi" :key="index">
            <img :src="item.img" /><span>{{ item.text }}</span>
          </p>
        </div>
        <div class="right">
          <p class="liuy"><img :src="liuyan" />{{ liuy }}</p>
          <form>
            <input type="text" v-model="name" placeholder="姓名:" />
            <input
              class="email"
              type="email"
              v-model="email"
              placeholder="邮箱:"
            />
            <input class="tel" type="tel" v-model="tel" placeholder="电话:" />
            <textarea rows="10" placeholder="请输入留言..."></textarea>
            <input class="sub" type="submit" />
          </form>
        </div>
      </div>
      <div class="bom">
        <p>详细地图:</p>
        <div class="map">
          <baidu-map
            class="bmView"
            :scroll-wheel-zoom="true"
            :center="location"
            :zoom="zoom"
            @click="getLocationPoint"
            ak="YOUR_APP_KEY"
          >
            <bm-view style="width: 100%; height: 500px; flex: 1"></bm-view>
            <bm-local-search
              :keyword="addressKeyword"
              :auto-viewport="true"
              style="display: none"
            ></bm-local-search>
          </baidu-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BaiduMap from "vue-baidu-map/components/map/Map.vue";
// import BmView from "vue-baidu-map/components/map/MapView.vue";
// import BmLocalSearch from "vue-baidu-map/components/search/LocalSearch.vue";
export default {
  name: "Contact",
  components: {},
  data() {
    return {
      location: { lng: 116.8087874398422, lat: 36.5170277099317 },
      zoom: 16,
      ban: require("../assets/conban.png"),
      lianxi: [
        { img: require("../assets/lianxi.png"), text: "联系我们" },
        {
          img: require("../assets/qiye.png"),
          text: "山东柏瑞软件科技有限公司",
        },
        { img: require("../assets/tel.png"), text: "0538-2110108" },
        { img: require("../assets/email.png"), text: "wf18661349342@163.com" },
        {
          img: require("../assets/dizhi.png"),
          text: "济南市长清区崮云湖街道芙蓉路中国创新谷西城软件园A3楼503室",
        },
      ],
      liuyan: require("../assets/liuy.png"),
      liuy: "填写留言",
    };
  },
  methods: {
    getLocationPoint(e) {
      this.lng = e.point.lng;
      this.lat = e.point.lat;
      /* 创建地址解析器的实例 */
      //  let geoCoder = new BMap.Geocoder();
      //  /* 获取位置对应的坐标 */
      //  geoCoder.getPoint(this.addressKeyword, point => {
      //      this.selectedLng = point.lng;
      //      this.selectedLat = point.lat;
      //  });
      //  /* 利用坐标获取地址的详细信息 */
      //  geocoder.getLocation(e.point, res=>{
      //      console.log(res);
      //     })
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  .banner img {
    width: 100%;
  }

  .con {
    height: 1027px;
    margin-top: 1rem;
    font-size: 17px;
    color: #333333;
    padding-bottom: 2rem;

    .top {
      margin: 0 auto;

      .left {
        p {
          width: 100%;
          line-height: 2rem;
          overflow: hidden;

          img {
            vertical-align: middle;
            margin-right: 2%;
            float: left;
            margin-top: 0.5rem;
          }

          span {
            display: block;
            float: left;
          }
        }
      }

      .right {
        .liuy {
          img {
            vertical-align: middle;
            width: 4%;
            margin-right: 1%;
          }
        }

        form {
          width: 100%;

          input {
            height: 40px;
            border: 1px solid #818181;
            border-radius: 10px;
            text-indent: 0.5em;
            margin-top: 0.5rem;
            outline: none;
          }

          .email {
            margin: 0 2%;
          }

          textarea {
            width: 100%;
            margin: 2rem 0;
            border-radius: 10px;
            text-indent: 1em;
            padding-top: 0.5rem;
            outline: none;
          }

          .sub {
            width: 136px;
            height: 40px;
            text-align: center;
            background: #20b09f;
            border-radius: 10px;
            color: #fff;
            border: 1px solid #20b09f;
          }
        }
      }
    }

    .bom {
      width: 94%;
      margin: 0 auto;
      margin-top: 4rem;

      .map {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }

  @media screen and (min-width: 1085px) {
    .banner img {
      height: 558px;
    }

    .con {
      max-width: 1284px;
      margin: 2rem auto;
      box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.35);

      .top {
        width: 94%;
        justify-content: space-around;
        display: flex;

        .left {
          width: 42%;
          padding-top: 0.85rem;

          p {
            img {
              width: 4%;
            }

            span {
              width: 94%;
            }
          }
        }

        .right {
          width: 52%;
          padding-top: 1rem;

          form {
            input {
              width: 135px;
            }

            .tel {
              width: 314.5px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .banner img {
      height: 318px;
    }

    .con {
      width: 100%;
      box-shadow: none;

      .top {
        width: 95%;
        display: block;

        .left {
          width: 70%;
          padding: 0.5rem 15%;
          box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.35);
          border-radius: 10px;

          p {
            img {
              width: 5%;
            }

            span {
              width: 92%;
            }
          }
        }

        .right {
          width: 92%;
          margin: 2rem auto;
          padding: 1rem 4%;
          box-shadow: 0px 2px 35px 0px rgba(106, 106, 106, 0.35);
          padding-top: 1rem;
          border-radius: 10px;

          form {
            input {
              width: 90px;
            }

            .tel {
              width: 150px;
            }
          }
        }
      }
    }
  }
}
</style>