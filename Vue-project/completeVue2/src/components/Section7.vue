<template>
  <div>
        <div class="rowafterSlide2">

        <div class="row justify-content-between mb-5 mt-3">
            <div class="col-12 col-sm-4">
                <h4>LATEST POSTS</h4>
                <h3 id="beforeslide2Button">Florist tricks</h3>
            </div>
            <div id="slide2Button" class="col-auto  ">
                <a href="#">VIEW ALL POSTS</a>
            </div>
        </div>
        <div class="row  ">
            <div class="col-12 col-md-6 col-lg-4">
                <div id="space" class="space3">
                    <div class="afterSlide2image1">
                        <div class="afterSlide2Text">
                            <h5>TREND NEWS</h5>
                            <h3>8 Romantic Gifts to Celebrate Your<br> Wedding Anniversary</h3>
                            <p>Flowers have a language all their own. In Victorian times, receiving a…<br> MAY 22, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div id="space">
                    <div class="afterSlide2image2">
                        <div class="afterSlide2Text">
                            <h5>TIPS & IDEA</h5>
                            <h3>Red Rose - Flower of<br> love of Greek <br>Mythology</h3>
                            <p>Flowers have a language all their own. In Victorian times, receiving a…<br> MAY 22, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 ">
                <div id="space2">
                    <div class="afterSlide2image3">
                        <div class="afterSlide2Text">
                            <h5>DIY & CRAFTS</h5>
                            <h3>Beautiful Mandalas<br> Made From Flowers by<br> Kathy Klein</h3>
                            <p>Flowers have a language all their own. In Victorian times, receiving a…<br> MAY 22, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:"Section7"
}
</script>

<style scoped>
.rowafterSlide2 {
    background-color: white;
    margin: 20px 20px 270px 30px;
}

.rowafterSlide2 h4 {
    color: rgb(202, 25, 108);
    font-size: 20px;
}

#slide2Button {
    margin-right: 38px;
}

.afterSlide2image1 {
    background-image: url("../assets/images/imgenew.jpg");
    background-position: center;
    background-size: cover;
    height: 320px;
    width: 350px;
    position: relative;
}

.afterSlide2image2 {
    background-image: url("../assets/images/newimag.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 320px;
    width: 350px;
    position: relative;
}

.afterSlide2image3 {
    background-image: url("../assets/images/newimage.jpg");
    background-position: center;
    background-size: cover;
    height: 320px;
    width: 350px;
    position: relative;
}

.afterSlide2Text {
    position: absolute;
    text-align: center;
    bottom: -223px;
    box-shadow: 2px 1px 1px rgb(236, 234, 230), -2px 0px 1px rgb(206, 204, 201);
}

.afterSlide2Text h5 {
    background-color: black;
    color: white;
    display: inline-block;
    padding: 3px;
    margin-bottom: 20px;
}

.afterSlide2Text h3 {
    display: block;
    margin-bottom: 8px;
}

.afterSlide2image1:hover .afterSlide2Text h5 {
    background-color: rgb(230, 13, 121);
}

.afterSlide2image1:hover .afterSlide2Text h3 {
    text-decoration: underline;
    font-size: 30px;
}

.afterSlide2image2:hover .afterSlide2Text h5 {
    background-color: rgb(230, 13, 121);
}

.afterSlide2image2:hover .afterSlide2Text h3 {
    text-decoration: underline;
    font-size: 30px;
}

.afterSlide2image3:hover .afterSlide2Text h5 {
    background-color: rgb(230, 13, 121);
}

.afterSlide2image3:hover .afterSlide2Text h3 {
    text-decoration: underline;
    font-size: 30px;
}

#beforeslide2Button {
    font-size: 40px;
}

#slide2Button {
    border: 2px solid rgb(226, 7, 98);
    height: 40px;
    border-radius: 30px;
    padding: 5px;
}

#slide2Button a {
    text-decoration: none;
    color: black;
}
@media screen and (max-width:1000px) {
  
   
    #space2 {
        margin-top: 250px;
    }
   
}

@media screen and (max-width:800px) {
 .space3{
        margin-bottom: 250px;
    }
}
@media screen and (max-width:580px) {
  
    #space {
        margin-bottom: 300px;
    }
     #space2 {
        margin-top: 20px;
    }
  
  
 
}


</style>