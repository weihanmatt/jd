<template>
  <div>
    <Slider :items="items" :cname="$style.slider"/>
    <section :class="$style.list">
      <div :class="$style.item" v-for="(item,index) in enters" :key="index">
        <router-link :to="{ name: item.href}">
          <img :src="item.img" :alt="item.title">
          <h4>{{ item.title}}</h4>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
  components: {
    Slider,
  },
  data() {
    return {
      items:[{
        href: "App",
        src: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/103835/16/1563/88525/5dc23395E2d513e20/c49dfbf88de32903.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      },
      {
        href: "App",
        src: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/24046/10/6380/94217/5c511b9dEcc9ba39c/7913173ae5ed0617.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      },
      {
        href: "App",
        src: "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/45055/35/15168/115704/5dbf9bd3E53bcbcfb/a49a8beacd926951.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      }],
      enters: [{
        href: "App",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
        title: "优惠券"
      },
      {
        href: "App",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
        title: "抢福利"
      },
      {
        href: "App",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
        title: "抢钢镚"
      },
      {
        href: "App",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
        title: "白条提额"
      },
      {
        href: "App",
        img: "https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
        title: "优惠券"
      },],
    }
  },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.slider{
  margin-top: 120px;
  img{
    width: 100%;
  }
}
.list{
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a{
    text-decoration: none;
  }
  .item{
    text-align: center;
  }
  img{
    display: inline-block;
    width: 90px;
    height: 90px;
  }
  h4{
    font-size: 26px;
    margin-top: 12px;
    color: #666;
  }
}

</style>
