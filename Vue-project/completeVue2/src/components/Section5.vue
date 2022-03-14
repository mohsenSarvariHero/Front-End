<template>
  <div>
        <section>
        <p class="text-center text-danger">our flower</p>
        <p class="text-center display-3">New Arrivals</p>
        <nav id="sectionNav" class="nav justify-content-center">
            <a href="#this" class="nav-link text-muted" id="all" @click="all">All</a>
            <a href="#this" class="nav-link text-muted" id="bouquet" @click="bouquet">Bouquet</a>
            <a href="#this" class="nav-link text-muted" id="flowerBox" @click="flowerbox"> Flower box</a>
            <a href="#this" class="nav-link text-muted" id="flowerShop" @click="flowershelf"> Flower shelf</a>
            <a href="#this" class="nav-link text-muted" id="basketFlower" @click="basket"> Basket of flower</a>
            <a href="#this" class="nav-link text-muted" id="giftCombos" @click="gift"> Gift combos</a>

        </nav>
        <p id="#this"></p>
        <div id="rowItem" class="row  mx-5  mt-5">
            <div class="col-12 col-md-6 col-lg-3 backsecond2 backsecond3 backsecond4 backsecond5 " id="backSecond">

                <div class="second1 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>
                

            </div>
            <div class="col-12 col-md-6 col-lg-3 backsecond2 backsecond3 backsecond4 backsecond5" id="backSecond">
                <div class="second2 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 backSecond1 backsecond3 backsecond4 backsecond5" id="backSecond">
                <div class="second3 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 backSecond1 backsecond3 backsecond4 backsecond5" id="backSecond">
                <div class="second4 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>

            </div>


        </div>
        <div id="rowItem" class="row  mx-5  mt-5">
            <div class="col-12 col-md-6 col-lg-3 backSecond1 backsecond2 backsecond4 backsecond5" id="backSecond">
                <div class="second5 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-6 col-lg-3 backSecond1 backsecond2 backsecond4 backsecond5" id="backSecond">
                <div class="second6 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 backSecond1 backsecond2 backsecond3 backsecond5" id="backSecond">
                <div class="second7 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 backSecond1 backsecond2 backsecond3 backsecond5" id="backSecond">
                <div class="second8 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div id="rowItem" class="row  mx-5  mt-5">
            <div class="col-12 col-md-6 col-lg-3 backSecond1 backsecond2 backsecond3 backsecond4" id="backSecond">
                <div class="second9 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 backSecond1 backsecond2 backsecond3 backsecond4" id="backSecond">
                <div class="second10 ">
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
                        <div>Fly me to the Moon<br>
                             <div class="showAdd">
                                <b class="textshowAdd2">$22</b><span class="textshowAdd">ADD TO CART</span></div>
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    </section>
    <a href="#">
        <p class="linkParaghraph">View all product</p>
    </a>
  </div>
</template>

<script>
export default {
name:"Section5",
methods:{
    all: function(){
          document.querySelectorAll(".backSecond1").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond2").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond3").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond4").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond5").forEach((element) => element.classList.remove("displayHide"));



    document.querySelector("#bouquet").classList.remove("redLink");
    document.querySelector("#flowerBox").classList.remove("redLink");
    document.querySelector("#flowerShop").classList.remove("redLink");
    document.querySelector("#basketFlower").classList.remove("redLink");
    document.querySelector("#giftCombos").classList.remove("redLink");
    document.querySelector("#all").classList.add("redLink");
    },
    bouquet: function(){
    document.querySelectorAll(".backsecond2").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond3").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond4").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond5").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backSecond1").forEach((element) => element.classList.add("displayHide"));


    document.querySelector("#flowerBox").classList.remove("redLink");
    document.querySelector("#flowerShop").classList.remove("redLink");
    document.querySelector("#basketFlower").classList.remove("redLink");
    document.querySelector("#giftCombos").classList.remove("redLink");
    document.querySelector("#all").classList.remove("redLink");



    document.querySelector("#bouquet").classList.add("redLink");

    },
    flowerbox: function(){
         document.querySelectorAll(".backSecond1").forEach((element) => element.classList.remove("displayHide"));

    document.querySelectorAll(".backsecond3").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond4").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond5").forEach((element) => element.classList.remove("displayHide"));

    document.querySelectorAll(".backsecond2").forEach((element) => element.classList.add("displayHide"));

    document.querySelector("#bouquet").classList.remove("redLink");
    document.querySelector("#flowerShop").classList.remove("redLink");
    document.querySelector("#basketFlower").classList.remove("redLink");
    document.querySelector("#giftCombos").classList.remove("redLink");
    document.querySelector("#all").classList.remove("redLink");


    document.querySelector("#flowerBox").classList.add("redLink");
    },
    flowershelf: function(){
          document.querySelectorAll(".backSecond1").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond2").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond4").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond5").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond3").forEach((element) => element.classList.add("displayHide"));

    document.querySelector("#bouquet").classList.remove("redLink");
    document.querySelector("#flowerBox").classList.remove("redLink");
    document.querySelector("#basketFlower").classList.remove("redLink");
    document.querySelector("#giftCombos").classList.remove("redLink");
    document.querySelector("#all").classList.remove("redLink");


    document.querySelector("#flowerShop").classList.add("redLink");
    },
    basket: function(){
         document.querySelectorAll(".backSecond1").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond2").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond3").forEach((element) => element.classList.remove("displayHide"));

    document.querySelectorAll(".backsecond5").forEach((element) => element.classList.remove("displayHide"));

    document.querySelectorAll(".backsecond4").forEach((element) => element.classList.add("displayHide"));

    document.querySelector("#bouquet").classList.remove("redLink");
    document.querySelector("#flowerBox").classList.remove("redLink");
    document.querySelector("#flowerShop").classList.remove("redLink");
    document.querySelector("#giftCombos").classList.remove("redLink");
    document.querySelector("#all").classList.remove("redLink");


    document.querySelector("#basketFlower").classList.add("redLink");


    },
    gift: function(){
         document.querySelectorAll(".backSecond1").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond2").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond3").forEach((element) => element.classList.remove("displayHide"));
    document.querySelectorAll(".backsecond4").forEach((element) => element.classList.remove("displayHide"));


    document.querySelectorAll(".backsecond5").forEach((element) => element.classList.add("displayHide"));
    document.querySelector("#bouquet").classList.remove("redLink");
    document.querySelector("#flowerBox").classList.remove("redLink");
    document.querySelector("#flowerShop").classList.remove("redLink");
    document.querySelector("#basketFlower").classList.remove("redLink");
    document.querySelector("#all").classList.remove("redLink");

    document.querySelector("#giftCombos").classList.add("redLink");
    }

}
}
</script>

<style scoped>
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
.textshowAdd2 {
    margin-left: 18%;
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
    bottom: -20%;
    left: 20%;
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
.second1:hover .showIcon {
    visibility: visible;
    opacity: 1;
    transform: rotate(360deg);
}
.showAdd {
    position: relative;
    text-align: center;
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
.redLink {
    border: 1px solid red;
}
.displayHide {
    display: none;
}
@media screen and (max-width:1100px) {
   

    .second1 {
        margin-bottom: 80px;
    }
     .second2 {
        margin-bottom: 80px;
    }
    .second3 {
        margin-bottom: 80px;
    }
    .second5 {
        margin-bottom: 80px;
    }
    .second6 {
        margin-bottom: 80px;
    }
    .second7 {
        margin-bottom: 80px;
    }
    .second8 {
        margin-bottom: 80px;
    }
    .second9 {
        margin-bottom: 80px;
    }
  

  
}

/* @media screen and (max-width:580px) {


    .second1 {
        margin-bottom: 80px;
    }
    .second2 {
        margin-bottom: 80px;
    }
    .second3 {
        margin-bottom: 80px;
    }
    .second5 {
        margin-bottom: 80px;
    }
    .second6 {
        margin-bottom: 80px;
    }
    .second7 {
        margin-bottom: 80px;
    }
    .second8 {
        background-image: url(images/image8.jpg);
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
        margin-bottom: 80px;
    }
    .second10 {
        margin-bottom: 80px;
    } */
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
/* } */

</style>