<template>
  <div>
 
    <Section1blog />
    <Section2blog />
    <Section3blog />
    <Section4blog />
  </div>
</template>

<script>

import Section1blog from '@/components/Section1blog.vue'
import Section2blog from '@/components/Section2blog.vue'
import Section3blog from '@/components/Section3blog.vue'
import Section4blog from '@/components/Section4blog.vue'

export default {
 
  components: {
   
    Section1blog,
    Section2blog,
    Section3blog,
    Section4blog,
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
