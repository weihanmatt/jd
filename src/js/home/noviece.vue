<template>
  <Panel :class="$style.panel" title="新手特权">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
        <p :class="$style.grey">新手专享</p>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573116020494&di=a02fa10040b1db2357d859f403002c94&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F11%2F16%2Fbac41a11e64fb1d9a298886f1ab0bd9c.jpg" alt="">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573116157378&di=e47723e0a4b088a11c8ad8240b342ba2&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F171230%2F330721-1G23023153132.jpg" alt="">
            <h4>领128元<span :class="$style.red">新手礼包</span></h4>
            <p :class="$style.grey">立刻开通</p>
          </li>
          <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573116342745&di=eea7279278827da5eb80e89becb4b6c5&imgtype=0&src=http%3A%2F%2Fimg.tianyancha.com%2Fsogou%2FWeChat%2F397fbfd07e19cf6990605aceb14d0662.png%40%2521watermark01" alt="">
            <h4>打白条享免息</h4>
            <p :class="$style.grey">立刻开通享豪礼</p>
          </li>
          
        </ul>
      </div>
      
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
  components: {
    Panel
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .panel{
    @include panel;
    >h4{
      border-bottom: 1px solid #ddd; 
    }
    .content{
      @include list(row);
      .item{
        width: 50%;
        box-sizing: border-box;
        &:first-child{
          padding: 32px 20px;
          text-align: center;
          border-right: solid 1px #ddd;
          img{
            width: 132px;
            height: 132px;
            margin: 20px auto 0;
          }
        }
        h4{
          font-size: 26px;
          line-height: 40px;
          margin: 0;
        }
        .red{
          color: #F00;
        }
        .grey{
          color: #999;
          font-size: 24px;
          margin-top: 10px;
          margin-bottom: 0;
        }
        ul{
          width: 100%;
          margin: 0;          
          li{
            height: 144px;
            width: 100%;
            padding: 32px 28px;
            box-sizing: border-box;
            list-style: none;
            &:first-child{
            border-bottom: solid 1px #ddd;
            }
            h4{
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: left
            }
            img{
              width: 80px;
              height: 80px;
              float: right;
            }
          }
        }
      }
    }
  }
</style>
