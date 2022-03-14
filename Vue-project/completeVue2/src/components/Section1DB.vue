<template>
  <div>
          <div class="headerBlog">
        <div class="textBlog">
        
                <p style="color: white;background-color: rgb(197, 100, 140);padding:5px;display: inline-block;">TIPS & IDEA</p><br><span style="font-size: 45px;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;line-height: 35px;">Edible Favorites<br> for Your Cutting<br> Garden<br></span>
                <p style="margin-top: 8px;"><span style="opacity: 0.7;">BY</span>&nbsp;CORY VAUGHN &nbsp; &nbsp; <span style="opacity: 0.7;">| &nbsp;&nbsp; MAY 22, 2020</span></p>
         
        
        </div>

    </div>
  </div>
</template>

<script>
export default {
name:"Section1DB"
}
</script>

<style scoped>
.headerBlog {
    background-image: url("../assets/images/imgenew.jpg");
    background-position: center;
    background-size: cover;
    height: 700px;
    position: relative;
}
.textBlog {
    background-color: white;
    padding: 10px 90px 10px 90px;
    text-align: center;
    position: absolute;
    top: 35%;
    left: 31%;
}
@media screen and (max-width:1100px) {
    .mainBlog {
        flex-direction: column;
    }
    .textBlog {
        background-color: white;
        padding: 10px 90px 10px 90px;
        text-align: center;
        position: absolute;
        top: 35%;
        left: 15%;
        right: 10%;
    }
    .rightBlog {
        margin-bottom: 250px;
    }
}

@media screen and (max-width:580px) {
    .mainBlog {
        flex-direction: column;
    }
    .textBlog {
        background-color: white;
        padding: 10px 90px 10px 90px;
        text-align: center;
        position: absolute;
        top: 35%;
        left: 5%;
        right: 10%;
    }
    .middleBlog {
        flex-direction: column;
    }
    .rightBlog {
        margin-bottom: 200px;
    }
}
</style>