<template>
  <div>

  <div class="afterSlide">
        <div class="firstText">
            <h5>About us</h5>
            <h2>we provide all <br>kinds of fresh<br>flower services</h2>
        </div>
        <div class="crossFirst">
        <h5> For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies
          on a vivid palette of annuals, perennials and ornamental grasses to supply her studio.</h5>
        </div>
        <br>
    
        <div class="videoAfter">
            <video width="500" controls>
                <source src="https://dl.iropm.ir/gifgif/files/1QMPWra0NHhzb2Vjs3fl6.mp4" type="video/mp4">
               
               
              </video>
        </div>
        <div class="crossVideo">
            <h5>SLOW FLOWERS’ FLORAL INSIGHTS</h5>
            <h3>Dried flowers are<br> having a <br> renaissance</h3><br>
            <p>This awareness has been stimulated by sustainable sourcing practices and the desire on the part of North American flower growers to “extend the season” beyond the last frost.</p>
            <button>CONTACT US</button>
        </div>
    

    </div>
  </div>
</template>

<script>
export default {
name:"Section3about"
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
.afterSlide {
    margin: 95px;
    display: flex;
    flex-wrap: wrap;
}
.firstText h5 {
    color: red;
}

.firstText h2 {
    font-style: italic;
    font-size: 40px;
}
.crossFirst {
    margin-left: 80px;
    flex: 60%;
}
.videoAfter {
    padding-top: 20px;
}
.crossVideo {
    margin-left: 80px;
    margin-top: 50px;
    flex: 30%;
    line-height: 30px;
    background-color: white;
    box-shadow: 0px 3px 1px rgb(211, 202, 202);
}

.crossVideo h5 {
    color: rgb(224, 55, 78);
}
.crossVideo h3 {
    font-size: 38px;
}

.crossVideo button {
    background-color: rgb(189, 45, 81);
    border-radius: 35px;
    color: white;
    padding: 8px;
    font-size: 15px;
    width: 150px;
}
@media screen and (max-width:1000px) {
    .afterSlide {
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .crossFirst {
        margin-left: 0px;
    }
  
    .crossVideo {
        margin-left: 0px;
    }
 

}

@media screen and (max-width:580px) {
    .afterSlide {
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .crossFirst {
        margin-left: 0px;
    }
    .videoAfter video {
        width: 380px;
    }
    .crossVideo {
        margin-left: 0px;
    }

    .crossVideo {
        margin-left: 0px;
        margin-top: 50px;
        flex: 30%;
        line-height: 30px;
        background-color: white;
        box-shadow: 0px 3px 1px rgb(211, 202, 202);
    }
  
 
 
  
    
    /* .afterSlide2image1 {
        background-image: url("images/imgenew.jpg");
        background-position: center;
        background-size: cover;
        height: 320px;
        width: 350px;
        position: relative;
    }
    .afterSlide2Text {
        position: absolute;
        text-align: center;
        bottom: -323px;
        box-shadow: 2px 1px 1px rgb(236, 234, 230), -2px 0px 1px rgb(206, 204, 201);
    } */
}

</style>