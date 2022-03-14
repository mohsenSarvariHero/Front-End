<template>
  <div>
         <div class="mainPort " style="margin: 50px; margin-left: -10px;">
        <table class="table m-5 p-5">
            <tr>
                <td class="d-flex flex-column d-lg-table-cell ">
                    <div id="parentCard" class="mb-5"><img src="../assets/images/kaboompics_Beautiful pink blossoming tree.jpg" height="390px" width="350px">
                        <div class="cardPortfolio">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>
                    <div id="parentCard" class="mb-5"><img src="../assets/images/kaboompics_A beautiful blooming rose in Madrid Botanic Garden.jpg" height="250px" width="350px">
                        <div class="cardPortfolio">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>
                    <div id="parentCard"> <img src="../assets/images/kaboompics_Blue viola flowers with an old empty lantern.jpg" hight="390px" width="350px">
                        <div class="cardPortfolio" style="bottom: 40%;">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>

                </td>
                <td class="d-flex flex-column d-sm-table-cell ">
                    <div id="parentCard" class="mb-5"><img src="../assets/images/kaboompics_A blooming apple trees in spring.jpg" height="250px" width="350px">
                        <div class="cardPortfolio">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>
                    <div id="parentCard" class="mb-5"><img src="../assets/images/kaboompics_Branches covered with fresh snow.jpg" height="450px" width="350px">
                        <div class="cardPortfolio" style="bottom: 35%;">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>
                    <div id="parentCard"> <img src="../assets/images/kaboompics_Iris flowers blooming in Madrid Botanic Garden (1).jpg" hight="450px" width="350px">
                        <div class="cardPortfolio" style="bottom: 35%;">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>
                </td>
                <td class="d-flex flex-column d-sm-table-cell ">
                    <div id="parentCard" class="mb-5"><img src="../assets/images/kaboompics_Pink rose.jpg" height="490px" width="350px">
                        <div class="cardPortfolio" style="bottom: 35%;">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>
                    <div id="parentCard" class="mb-5"><img src="../assets/images/kaboompics_Red and white rose.jpg" height="350px" width="350px">
                        <div class="cardPortfolio">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>
                    <div id="parentCard"> <img src="../assets/images/kaboompics_White and red roses.jpg" height="300px" width="350px">
                        <div class="cardPortfolio">
                            <h3>Flower Day</h3>
                            <p>Decoration</p>
                        </div>
                    </div>
                </td>


            </tr>
        </table>
        <a href="#" style="color: black; text-decoration-color: rgb(255, 0, 0);">
            <p class="text-center " style="margin-left:80px">LOAD MORE PROJECT</p>
        </a>
    </div>


  </div>
</template>

<script>
export default {
name:"Section2port"
}
</script>

<style scoped>
.cardPortfolio {
    background-color: white;
    display: inline-block;
    padding: 15px;
    position: absolute;
    bottom: 30%;
    left: 20%;
    text-align: center;
    width: 50%;
    visibility: hidden;
    transition: transform 1s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.cardPortfolio h3 {
    color: black;
}

.cardPortfolio p {
    color: red;
}

#parentCard {
    position: relative;
}

#parentCard:hover .cardPortfolio {
    visibility: visible;
    transform: scale(1.5);
}
</style>