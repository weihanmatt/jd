<template>
  <Panel :class="$style.panel" title="公司信息">
    <ul :class="$style.content">
      <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
      <li>投资有风险，购买需谨慎</li>
      <li>京东金融平台服务协议</li>
      <li>京东金融隐私政策</li>
    </ul>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components:{
    Panel
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .panel{
    @include panel;
    &>h4{
      display: none;
    }
    .content{
      @include flex;
      li{
        background-color: #f5f5f5;
        height: 86px;
        line-height: 86px;
        font-size: 24px;
        color: rgb(158, 154, 154);
        text-align: center;
        border-top: 1px solid rgb(158, 154, 154);
      }
    }
  }
</style>
