<template>


   <div class="swiper-slide p-3">
     <div class="title text-left">
       <span>
         ngo-go zone
       </span>
     </div>
     <div class="under-title text-left pt-2">
       <span>
         Get exclusive content.Interact with Andy
       </span>
     </div>
     <div class="button-slider pt-3">
       <button>Create</button>
     </div>
     <img src="@/assets/Person2.png"/>
   </div>


</template>

<script>

export default {
  data() {
    return {

    }
  }
}


</script>

<style scoped>

.swiper-slide {
  width: 256px !important;
  height: 430px !important;
  text-align: center;
  font-size: 18px;
}

.swiper-wrapper {
  border-radius: 4px;
}

.swiper-slide .title {
  text-transform: uppercase;
}
.swiper-slide .title {
  margin-top: 170px;
  font-size: 30px;
  color: #FFFFFF;
}
.under-title span {
  font-size: 18px;
  color: #FFFFFF;
}
.button-slider button {
  width: 100%;
  height: 64px;
  color: #FFF7F7;
  font-size: 16px;
  font-weight: bold;
  background: #E73348;
  border-radius: 4px;
  border: none;
}
img {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}

</style>
