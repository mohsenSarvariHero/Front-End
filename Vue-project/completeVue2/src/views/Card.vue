<template>
  <div>
  
    <Section1card />
    <Section2card />
    <Section3card />
    <Section4card />
  </div>
</template>

<script>

import Section1card from "@/components/Section1card.vue"
import Section2card from "@/components/Section2card.vue"
import Section3card from "@/components/Section3card.vue"
import Section4card from "@/components/Section4card.vue"

export default {
  
  components: {

  Section1card,
  Section2card,
  Section3card,
  Section4card
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