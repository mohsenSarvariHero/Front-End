<template>
  <div> 
       <div class="headerAbout">
        <h1>About us</h1>
        <h5> <span id="aboutSpanh5">HOME</span> | ABOUT</h5>
    </div>

  </div>
</template>

<script>
export default {
name:"Sectionabout1"
}
</script>

<style scoped>
.headerAbout {
    background-image: url("../assets/images/kaboompics_Branches\ covered\ with\ fresh\ snow\ \(1\).jpg");
    background-position: center;
    background-size: cover;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.headerAbout h1 {
    font-size: 60px;
}

#aboutSpanh5 {
    color: rgb(134, 24, 24);
}

</style>