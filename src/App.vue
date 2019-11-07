<template>
  <div>
    <Heador />
    <router-view></router-view>
    <Footer/>
    <Navbar/>
  </div>
</template>

<script>
import Heador from './js/public/header'
import Footer from './js/public/footer'
import Navbar from './js/public/navbar'

export default {
  components:{
    Heador,
    Footer,
    Navbar
  },
}
</script>>
<style lang="scss">
@import "/css/reset.scss";

</style>
