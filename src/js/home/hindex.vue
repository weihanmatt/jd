<template>
  <div>
    
    <Slider/>
    <Noviece/>
    <Borrow/>
    <Money/>
    <Product/>

  </div>
</template>

<script>

import Slider from './hslider'
import Noviece from './noviece'
import Borrow from './borrow'
import Money from './money'
import Product from './product'


export default {
  components:{

    Slider,
    Noviece,
    Borrow,
    Money,
    Product,

  },
}
</script>>
<style lang="scss">
@import "../../css/reset.scss";

</style>
