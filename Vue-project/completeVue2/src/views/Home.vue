<template>
  <div class="home">

   <SlideShow />
   <Section3 />
   <Section4 />
   <Section5 />
   <Section6 />
   <Section7 />
   <Section8 />
   <Section9 />
   <Section10 />
   
  </div>
</template>

<script>

import SlideShow from '@/components/SlideShow.vue'
import Section3 from '@/components/Section3.vue'
import Section4 from '@/components/Section4.vue'
import Section5 from '@/components/Section5.vue'
import Section6 from '@/components/Section6.vue'
import Section7 from '@/components/Section7.vue'
import Section8 from '@/components/Section8.vue'
import Section9 from '@/components/Section9.vue'
import Section10 from '@/components/Section10.vue'
export default {
  name: 'Home',
  components: {

    SlideShow,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
    Section10
  }
}
</script>

<style scoped>

</style>



<!-- <template>
//   <div class="home">
//     <img alt="Vue logo" src="../assets/logo.png">
//     <HelloWorld msg="Welcome to Your Vue.js App"/>
//   </div>
// </template>

// <script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
// </script>-->
