<template>
  <div>
  
  <Section1DB />
  <Section2BD />
  <Section3BD />
  <Section4BD />
  </div>
</template>

<script>


import Section1DB from "@/components/Section1DB.vue"
import Section2BD from "@/components/Section2BD.vue"
import Section3BD from "@/components/Section3BD.vue"
import Section4BD from "@/components/Section4BD.vue"
export default {
  components: {
Section1DB,
Section2BD,
Section3BD,
Section4BD
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
