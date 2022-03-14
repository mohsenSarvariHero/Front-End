<template>
  <div style="text-align:left">

  <div>
        <div class="mainShopdetail m-5">
            <div class="leftShopdetail">
                <div class="table-responsive">
                    <table class="table">
                        <tr>
                            <td> <img id="related" src="../assets/images/kaboompics_Blue viola flowers with an old empty lantern.jpg" width="450px" height="650px"></td>



                            <td id="scroll" class="  d-sm-flex flex-sm-column  overflow-scroll ">
                                <p><img src="../assets/images/kaboompics_A blooming apple trees in spring.jpg" class="selectImage" width="130%" @click="selectImage"></p>
                                <p><img src="../assets/images/kaboompics_A beautiful blooming rose in Madrid Botanic Garden.jpg" class="selectImage1" width="130%" @click="selectImage1"></p>
                                <p><img src="../assets/images/kaboompics_Beautiful pink blossoming tree.jpg" class="selectImage2" width="130%" @click="selectImage2"></p>
                                <p><img src="../assets/images/kaboompics_Iris flowers blooming in Madrid Botanic Garden (1).jpg" class="selectImage3" width="130%" @click="selectImage3"></p>
                                <p><img src="../assets/images/kaboompics_White and red roses.jpg" class="selectImage4" width="130%" @click="selectImage4"></p>
                                <p><img src="../assets/images/kaboompics_Red and white rose.jpg" class="selectImage5" width="130%" @click="selectImage5"></p>



                            </td>
                        </tr>

                    </table>
                </div>
            </div>




            <div class="rightShopdetail">

                <p><span class="text-danger">SUCCULENT</span><br><span style="font-size: 30px;"> Fly Me To The Moon </span> <span id="price">$34.00</span></p>
                <p><span style="color: rgb(168, 168, 28);">
                <i class="bi bi-star"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                <i class="bi bi-star"></i>
                <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: -5px;" width="13" height="13" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                <i class="bi bi-star"></i>
                <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: -5px;" width="13" height="13" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                <i class="bi bi-star"></i>
                <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: -5px;" width="13" height="13" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                <i class="bi bi-star"></i>
                <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: -5px;" width="13" height="13" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg></span>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;03 reviews&nbsp;&nbsp;|&nbsp;&nbsp;Write a review

                </p>
                <p><span style="opacity: 0.7;"> Categories: </span> Succulent<br>
                    <span style="opacity: 0.7;"> Product code: </span> PM 101<br>
                    <span style="opacity: 0.7;"> Reward points: </span> 30<br>
                    <span style="opacity: 0.7;"> Availability:  </span> In Stock</p>
                <hr>
                <div class="row my-5">

                    <div class="col-sm-4 col-5">
                        <p style="border:1px solid rgb(192, 188, 188);border-radius: 19px;text-align: center;margin-top:2px;padding:10px"> - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +</p>
                    </div>

                    <div class="col-sm-5 offset-sm-1 col-6 offset-1">
                        <button style="background-color: black;color:white;border-radius: 26px;"><span><i class="bi bi-handbag"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" style="background-color: rgb(202, 80, 161);padding:8px;color: white;border-radius: 50%;margin-left:-6px" width="39" height="39" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
                      </svg></span> <span style="font-size: 20px;padding:20px"> add to cart</span></button>

                    </div>
                    <div class="col-sm-1 col-1 ">
                        <p style="background-color: rgb(238, 235, 235);border-radius: 10px;margin-top:9px;margin-left: -25px;margin-right:21px">
                            <i class="bi bi-heart"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="padding:2px" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg></p>
                    </div>
                </div>
                <hr>
                <div>
                    <p> <span style="font-size: 25px;">Description</span>&nbsp;&nbsp; /&nbsp;&nbsp;<span style="font-size: 20px;opacity: 0.7;">Shipping & Returns </span>&nbsp;&nbsp; / &nbsp;&nbsp;<br><span style="font-size: 20px;opacity: 0.7;">Reviews ( 03 )</span>
                    </p>
                </div>
                <div class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </div>

            </div>

        </div>
        <p style="font-size: 35px;" class="text-center">Related products</p>
        <div class="row m-5 p-3">
            <div class="col-lg-3 col-md-6 col-12">
                <div class="second1 ">
                    <div class="card2 ">
                        New
                    </div>
                    <div>
                        <div class="showIcon">
                            <span class="firstIcon">
                             <i class="bi bi-search "></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 10 20">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                        </span>
                            <span class="secondIcon">
                            <i class="bi bi-bag-dash"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 10 20">
                            <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                          </svg>
                        </span>
                            <span class="thirdIcon">
                            <i class="bi bi-heart"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 15 20">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                              </svg>
                        </span>
                        </div>
                        <div class="textHome">
                            <div style="margin: 3px 2px 5px 50px;"> Fly me to the Moon<br>
                                <div class="showAdd">
                                    <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                            </div> 
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-lg-3 col-md-6 col-12">

                <div class="second3 ">
                    <div class="card2 ">
                        Sale
                    </div>
                    <div class="showIcon">
                        <span class="firstIcon">
                            <i class="bi bi-search "></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 10 20">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                        </span>
                        <span class="secondIcon">
                            <i class="bi bi-bag-dash"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 10 20">
                            <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                          </svg>
                        </span>
                        <span class="thirdIcon">
                            <i class="bi bi-heart"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 15 20">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                              </svg>
                        </span>
                    </div>
                   <div class="textHome">
                            <div style="margin: 0px 2px 5px 50px;"> Fly me to the Moon<br>
                                <div class="showAdd">
                                    <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                            </div> 
                        </div>
                </div>

            </div>
            <div class="col-lg-3 col-md-6 col-12">

                <div class="second5" style="margin-top: -2px;">
                    <div class="showIcon">
                        <span class="firstIcon">
                            <i class="bi bi-search "></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 10 20">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                        </span>
                        <span class="secondIcon">
                            <i class="bi bi-bag-dash"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 10 20">
                            <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                          </svg>
                        </span>
                        <span class="thirdIcon">
                            <i class="bi bi-heart"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 15 20">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                              </svg>
                        </span>
                    </div>
                      <div class="textHome">
                            <div style="margin: 3px 2px 5px 50px;"> Fly me to the Moon<br>
                                <div class="showAdd">
                                    <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                            </div> 
                        </div>
                </div>

            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <div class="second6" style="margin-top: -2px;">
                    <div class="showIcon">
                        <span class="firstIcon">
                            <i class="bi bi-search "></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 10 20">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                        </span>
                        <span class="secondIcon">
                            <i class="bi bi-bag-dash"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 10 20">
                            <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                          </svg>
                        </span>
                        <span class="thirdIcon">
                            <i class="bi bi-heart"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 15 20">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                              </svg>
                        </span>
                    </div>
                     <div class="textHome">
                            <div style="margin: 3px 2px 5px 50px;"> Fly me to the Moon<br>
                                <div class="showAdd">
                                    <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                            </div> 
                        </div>
                </div>

            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <div class="second8" style="margin-top: 65px;">
                    <div class="card2 ">
                        New
                    </div>
                    <div class="showIcon">
                        <span class="firstIcon">
                            <i class="bi bi-search "></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 10 20">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                        </span>
                        <span class="secondIcon">
                            <i class="bi bi-bag-dash"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 10 20">
                            <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                          </svg>
                        </span>
                        <span class="thirdIcon">
                            <i class="bi bi-heart"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 15 20">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                              </svg>
                        </span>
                    </div>
                     <div class="textHome">
                            <div style="margin: 3px 2px 5px 50px;"> Fly me to the Moon<br>
                                <div class="showAdd">
                                    <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
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
name:"Section2shopD",
methods:{
    selectImage: function(){
        document.querySelector("#related").src = document.querySelector(".selectImage").src;
    },
    selectImage1: function(){
         document.querySelector("#related").src = document.querySelector(".selectImage1").src;
    },
    selectImage2: function(){
         document.querySelector("#related").src = document.querySelector(".selectImage2").src;
    },
    selectImage3: function(){
         document.querySelector("#related").src = document.querySelector(".selectImage3").src;
    },
    selectImage4: function(){
         document.querySelector("#related").src = document.querySelector(".selectImage4").src;
    },
    selectImage5: function(){
         document.querySelector("#related").src = document.querySelector(".selectImage5").src;
    },
}
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.mainShopdetail {
    display: flex;
    margin: 80px 2px 0px 40px;
    padding-bottom: 80px;
    border-bottom: 1px solid rgb(187, 183, 183);
}

.leftShopdetail {
    flex: 40%;
}

.rightShopdetail {
    flex: 30%;
    margin-left: -50px;
}

#scroll {
    width: 40%;
    height: 653px
}
.card2 {
    position: absolute;
    background-color: black;
    color: aliceblue;
    margin: 10px;
    padding: 3px;
}
.second1 {
    background-image: url("../assets/images/image1.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
    
}

.second2 {
    background-image: url("../assets/images/image2.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
}

.second3 {
    background-image: url("../assets/images/image3.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
}

.second4 {
    background-image: url("../assets/images/image4.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
}

.second5 {
    background-image: url("../assets/images/image5.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
    margin-top: 25px;
}

.second6 {
    background-image: url("../assets/images/image6.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
    margin-top: 25px;
}

.second7 {
    background-image: url("../assets/images/image7.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
    margin-top: 25px;
}

.second8 {
    background-image: url("../assets/images/image8.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
    margin-top: 25px;
}

.second9 {
    background-image: url("../assets/images/image99.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
    margin-top: 25px;
}

.second10 {
    background-image: url("../assets/images/image93.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    width: 250px;
    position: relative;
    box-shadow: 5px 5px 5px rgb(116, 110, 110);
    margin-top: 25px;
    margin-bottom: 80px;
}

.linkParaghraph {
    color: black;
    text-align: center;
}
.textHome {
    position: absolute;
    bottom: -15%;
    left: 10%;
}
.showIcon {
    position: absolute;
    bottom: 15%;
    left: 25%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 2s;
    transition: transform 1s;
}
.textshowAdd {
    position: absolute;
    left: -65%;
    top: 0%;
    color: rgb(221, 10, 80);
    visibility: hidden;
    transition-property: transform;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    transform-style: preserve-3d;
}
.second1:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}
.showAdd {
    position: relative;
    text-align: center;
}
.textshowAdd2 {
    margin-left: 5%;
}

.second1:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second1:hover .textshowAdd2 {
    visibility: hidden;
}

.second2:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second2:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second2:hover .textshowAdd2 {
    visibility: hidden;
}

.second3:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second3:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second3:hover .textshowAdd2 {
    visibility: hidden;
}

.second4:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second4:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second4:hover .textshowAdd2 {
    visibility: hidden;
}

.second5:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second5:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second5:hover .textshowAdd2 {
    visibility: hidden;
}

.second6:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second6:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second6:hover .textshowAdd2 {
    visibility: hidden;
}

.second7:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second7:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second7:hover .textshowAdd2 {
    visibility: hidden;
}

.second8:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second8:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second8:hover .textshowAdd2 {
    visibility: hidden;
}

.second9:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second9:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second9:hover .textshowAdd2 {
    visibility: hidden;
}

.second10:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}

.second10:hover .textshowAdd {
    visibility: visible;
    transform: translate(110px);
}

.second10:hover .textshowAdd2 {
    visibility: hidden;
}

.firstIcon {
    margin-right: 15px;
    background-color: white;
    border-radius: 100%;
    padding: 3px;
    transition: all 0.8s ease-in-out;
}

.firstIcon:hover {
    background-color: rgb(221, 18, 143);
    color: white;
    transform: rotate(360deg);
    cursor: pointer;
}

.secondIcon {
    margin-right: 15px;
    background-color: white;
    border-radius: 100%;
    padding: 3px;
    transition: all 0.8s ease-in-out;
}

.secondIcon:hover {
    background-color: rgb(221, 18, 143);
    color: white;
    transform: rotate(360deg);
    cursor: pointer;
}

.thirdIcon {
    background-color: white;
    border-radius: 100%;
    padding: 3px;
    transition: all 0.8s ease-in-out;
}

.thirdIcon:hover {
    background-color: rgb(221, 18, 143);
    color: white;
    transform: rotate(360deg);
    cursor: pointer;
}

#price {
    font-size: 30px;
    color: red;
    margin-left: 45px;
    vertical-align: text-bottom;
}

#scroll img:hover {
    cursor: pointer;
}

@media screen and (max-width:1100px) {
    .mainShopdetail {
        display: flex;
        flex-direction: column;
        margin: 80px 2px 0px 40px;
        padding-bottom: 0px;
        border-bottom: 1px solid rgb(187, 183, 183);
    }
    .second1{
        margin-bottom: 60px;
    }
    .second2{
        margin-bottom: 60px;
    }
    .second3{
        margin-bottom: 60px;
    }
    .second4{
        margin-bottom: 60px;
    }
    .second5{
        margin-bottom: 60px;
    }
    .leftShopdetail {
        flex: 100%;
    }
    .rightShopdetail {
        flex: 100%;
        margin-left: 0px;
    }
    #price {
        font-size: 30px;
        color: red;
        margin-left: 15px;
        vertical-align: text-bottom;
    }
}

@media screen and (max-width:580px) {
    .mainShopdetail {
        display: flex;
        flex-direction: column;
        margin: 80px 2px 0px 40px;
        padding-bottom: 0px;
        border-bottom: 1px solid rgb(187, 183, 183);
    }
    .leftShopdetail {
        flex: 100%;
    }
    .rightShopdetail {
        flex: 100%;
        margin-left: 0px;
    }
    #price {
        font-size: 30px;
        color: red;
        margin-left: 15px;
        vertical-align: text-bottom;
    }
}
</style>