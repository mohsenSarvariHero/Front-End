<template>
  <div >
     <div id="nav">
       



<div style="margin-left:80px" >
  <b-navbar toggleable="lg" >
    <b-navbar-brand href="#" style="font-size:30px ;margin:2px " class=" flex-fill" >Florist<span style="color:red" id="navItem-flower3"><sup><i class="bi bi-flower3" ></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="46" fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
                <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1.468 1.468 0 0 1-.045.205c-.039.132-.1.295-.183.484a12.88 12.88 0 0 1-.637 1.223L8 6.142a21.73 21.73 0 0 1-.135-.23 12.88 12.88 0 0 1-.637-1.223 4.216 4.216 0 0 1-.183-.484A1.473 1.473 0 0 1 7 4a1 1 0 1 1 2 0zM3.67 5.5a1 1 0 0 1 1.366-.366 1.472 1.472 0 0 1 .156.142c.094.1.204.233.326.4.245.333.502.747.742 1.163l.13.232a21.86 21.86 0 0 1-.265.002 12.88 12.88 0 0 1-1.379-.06 4.214 4.214 0 0 1-.51-.083 1.47 1.47 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5zm1.366 5.366a1 1 0 0 1-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 0 1 1.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 0 1-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 0 1-.327.4 1.483 1.483 0 0 1-.155.142zM9 12a1 1 0 0 1-2 0 1.476 1.476 0 0 1 .045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 0 1 9 12zm3.33-6.5a1 1 0 0 1-.366 1.366 1.478 1.478 0 0 1-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 0 1 .327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 0 1 1.366.366zm-1.366 5.366a1.494 1.494 0 0 1-.155-.141 4.225 4.225 0 0 1-.327-.4A12.88 12.88 0 0 1 9.74 9.16a22 22 0 0 1-.13-.232l.265-.002c.48-.001.967.015 1.379.06.205.023.376.051.51.083.066.016.116.031.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg></sup></span></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class=" linkColor"><router-link to="/" class="home">HOME</router-link></b-nav-item>
        <b-nav-item  class="linkColor"><router-link to="/about" class="home">ABOUT</router-link></b-nav-item>
        <b-nav-item  class="linkColor"><router-link to="/services" class="home">SERVICES</router-link></b-nav-item>
        <b-nav-item  class="linkColor">  <router-link to="/shop" class="home">SHOP</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav >
      

        <b-nav-item-dropdown text="PAGES" right class="linkColor" >
          <div class="bg">
          <b-dropdown-item > <router-link to="/card" class="home">cart</router-link></b-dropdown-item>
           <b-dropdown-item  ><router-link to="/checkout" class="home">checkout</router-link></b-dropdown-item>
         <b-dropdown-item > <router-link to="/whishlist" class="home">whishlist</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link to="/portfolio" class="home">portfolio</router-link></b-dropdown-item>
         <b-dropdown-item > <router-link to="/shopdetails" class="home">Shop Details</router-link></b-dropdown-item>
         <b-dropdown-item > <router-link to="/blogdetails" class="home">Blog Details</router-link></b-dropdown-item>
          </div>
        </b-nav-item-dropdown>

        
          <!-- Using 'button-content' slot -->
          
            <b-navbar-nav>
        <b-nav-item href="#" class="linkColor"><router-link to="/blog" class="home">BLOG</router-link></b-nav-item>
        <b-nav-item href="#" class="linkColor" >  <router-link to="/contact" class="home">CONTACT</router-link></b-nav-item>
        <b-nav-item href="#" class="linkColor" >   <router-link to="/search" class="home"> <i class="bi bi-search "></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg></router-link></b-nav-item>
        <b-nav-item href="#"  class="linkColor"> <i class="bi bi-heart"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>{5}</b-nav-item>
        <b-nav-item href="#" class="linkColor"><i class="bi bi-lock"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
              </svg>{0,1}<span id="navItem-lock" >$ 01</span></b-nav-item>
      </b-navbar-nav>
       <b-nav-item class=" linkColor"><router-link to="/extra" class="home">extra</router-link></b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    </div>


  
  <br>
  <br>

    <router-view/>
  </div>
</template>

<style>


#nav{
  margin:5px 0px  -25px 0px;
}

#nav a:hover {

  color: #53da26;

}

#nav a.router-link-exact-active {
  color: #ca391f;
}
#navItem-lock {
    color: red;
}
#navItem-lock{
  color:red;
}
.active{
  background-color: aquamarine;
}

 b-nav-item:hover{
   background-color: rgb(60, 255, 0) !important;
 }
  

.bg:hover{
  background-color: rgb(53, 53, 54);
  color:white !important;
}
.linkColor{
  margin-right:10px
}
.linkColor:hover{
  /* background-color: rgb(0, 204, 255) !important; */
  color:rgb(63, 214, 63) !important;
}
.home{
  text-decoration: none;
  color:rgb(66, 66, 68);
}
</style>
