<template>
 <div>
      
    <div>
         <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      
       <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <div class="article">
                        <p>FRESH FLOWER & GIFT SHOP</p>
                        <h2>Making beatiful City<br>a part of your life</h2><br>
                        <button>Shop Now</button>
                    </div>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <div class="article">
                        <p>FRESH FLOWER & GIFT SHOP</p>
                        <h2>Making beatiful City<br>a part of your life</h2><br>
                        <button>Shop Now</button>
                    </div>
      </b-carousel-slide>

   
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

    
    </div>
 </div>
</template>

<script>
  export default {
      name:"SlideShow",
    data() {
      return {
       
      }
    },
   
  }
</script>

<style scoped>
.article {
    margin-bottom: 130px;
    margin-left: -530px;
    color: black;
    font-size: 18px;
    text-shadow: 1px 1px rgb(34, 162, 221), 1px 1px 5px rgb(9, 212, 219);
}

.article button {
    background-color: rgb(224, 95, 95);
    border-radius: 20px;
    color: white;
    width: 100px;
    transition-property: width;
    transition-duration: 4s;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.article button:hover {
    width: 220px;
    background-color: rgba(21, 200, 224, 0.603);
    border-radius: 10px;
    border: 1px solid yellow;
}
</style>