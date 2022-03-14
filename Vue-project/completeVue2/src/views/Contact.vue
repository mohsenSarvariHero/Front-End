<template>
  <div>
  
    <Section1contact/>
    <Section2contact/>
    <Section3contact/>
    <Section4contact/>
  </div>
</template>

<script>

import Section1contact from '@/components/Section1contact.vue'
import Section2contact from '@/components/Section2contact.vue'
import Section3contact from '@/components/Section3contact.vue'
import Section4contact from '@/components/Section4contact.vue'

export default {

  components: {
   
    Section1contact,
    Section2contact,
    Section3contact,
    Section4contact
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