<template>
  <div id="app">
    <Heador />
    <Slider/>
    <Noviece/>
    <Borrow/>
    <Money/>
    <Product/>
    <Footer/>
    <Navbar/>
  </div>
</template>

<script>
import Heador from './js/public/header'
import Slider from './js/home/hslider'
import Noviece from './js/home/noviece'
import Borrow from './js/home/borrow'
import Money from './js/home/money'
import Product from './js/home/product'
import Footer from './js/public/footer'
import Navbar from './js/public/navbar'

export default {
  components:{
    Heador,
    Slider,
    Noviece,
    Borrow,
    Money,
    Product,
    Footer,
    Navbar
  },
}
</script>>
<style lang="scss">
@import "/css/reset.scss";

</style>
