<template>
  <div >
   
   
    <Section1shop />
    <Section2shop />
    <Section3shop />
    <Section4shop />
  </div>
</template>

<script>

import Section1shop from '@/components/Section1shop.vue'
import Section2shop from '@/components/Section2shop.vue'
import Section3shop from '@/components/Section3shop.vue'
import Section4shop from '@/components/Section4shop.vue'


export default {
 
  components: {

    Section1shop,
    Section2shop,
    Section3shop,
    Section4shop
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
