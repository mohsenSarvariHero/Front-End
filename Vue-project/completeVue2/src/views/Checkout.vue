<template>
  <div >

  <Section1checkout />
  <Section2checkout />
  <Section3checkout />
  <Section4checkout />
  </div>
</template>

<script>

import Section1checkout from '@/components/Section1checkout.vue'
import Section2checkout from '@/components/Section2checkout.vue'
import Section3checkout from '@/components/Section3checkout.vue'
import Section4checkout from '@/components/Section4checkout.vue'

export default {
  
  components: {
 
    Section1checkout,
    Section2checkout,
    Section3checkout,
    Section4checkout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>