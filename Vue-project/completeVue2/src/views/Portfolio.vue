<template>
  <div>

    <Section1port />
    <Section2port />
    <Section3port />
    <Section4port />
    
  </div>
</template>

<script>

import  Section1port from "@/components/Section1port.vue"
import  Section2port from "@/components/Section2port.vue"
import  Section3port from "@/components/Section3port.vue"
import  Section4port from "@/components/Section4port.vue"

export default {

  components: {
   
    Section1port,
    Section2port,
    Section3port,
    Section4port
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
