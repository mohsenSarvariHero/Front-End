<template>
  <div >

      

  <Section1service />
  <Section2service />
  <br>
  <Section3service />
  <Section4service />
  </div>
</template>

<script>

import Section1service from '@/components/Section1service.vue'
import Section2service from '@/components/Section2service.vue'
import Section3service from '@/components/Section3service.vue'
import Section4service from '@/components/Section4service.vue'

export default {

  components: {

    Section1service,
    Section2service,
    Section3service,
    Section4service
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
