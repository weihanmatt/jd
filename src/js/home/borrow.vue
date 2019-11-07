<template>
  <Panel title="极速借贷" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{name: 'home'}">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdszfhp5jC7HL0PDKFpxitG1WKcuNGYB0MYTOq4EXoX9IaXyq&s" alt="">
      </router-link>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
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
  .content{
    padding-bottom: 40px;
    img{
      display: block;
      width: 100%;
    }
  }
}

</style>
