<template>
  <div class="container-fluid p-0">
    <div class="home">
      <div class="home-wrapper pl-3 p-lg-0 p-md-0 p-sm-1 pl-xl-5">
        <div class="row pl-lg-3 pt-lg-4 pl-md-3 p-sm-1  justify-content-around">

          <div class="col col-lg-6 col-sm">
            <div class="home-title">
              <div class="row">
                <div class="col-auto ">
                  <span class="first-title">Featured</span>
                </div>
                <div class="col-auto pl-xl-0 pl-md-2 pl-sm-0">
                  <span class="last-title">Creators</span>
                </div>
              </div>
            </div>
          </div>

           <div class="arrows col col-md-3 col-sm-7 col-lg-2">

             <div class="swiper-button-next"></div>
             <div class="swiper-button-prev"></div>

           </div>

          <div class="col-lg-4 col-md-12 col-sm-12 col-sm-auto mr-lg-5 p-3">
            <div class="home-search">
              <form v-on:click="">
                <div class="d-flex bd-highlight">
                  <div class="w-100 bd-highlight">
                    <input class="search p-3" type="text" placeholder="Search" value="" required />
                  </div>
                  <div class="flex-shrink-1 bg-info">
                    <img class="icon_search p-3" src="@/assets/search.png" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-sm-3 m-lg-0">
      <div class="col-12 p-0">

        <div class="swiper-container m-0 p-0">
         <div class="swiper-wrapper">
           <div class=" swiper-slide first-slider p-3">
             <div class="title text-left">
               <span>
                 Want to be a featured creator?
               </span>
             </div>
             <div class="under-title text-left pt-2">
               <span>
                 Start by creating your own community
               </span>
             </div>
             <div class="first-button-slider pt-3">
               <button>Create</button>
             </div>
           </div>

           <div v-for="user in pullInfoUsers" :key="user.id" class="swiper-slide p-3">

             <div class="title text-left">
               <span>
                  {{ user.title }}
               </span>
             </div>
             <div class="under-title text-left pt-2">
               <span>
                 {{ user.under_title }}
               </span>
             </div>

             <div class="button-slider pt-3">
               <button>Create</button>
             </div>
             <img class="user_img" :src="user.user_img" />
             <div class="gradient"></div>

             <div class="hover-text pr-1">
               <span>
                 Get exclusive content.Interact with Dave.Get exclusive content.
                 Interact with Bridget.Verified Nobody.My trible is tribeless.
                 Captain of the Fence Riding Team.Fidding while Rome burns.
                 Find another hero.

               </span>
             </div>

           </div>

         </div>
         <div class="slider-arrows">
           <div class="swiper-button-next"></div>
           <div class="swiper-button-prev"></div>
         </div>
       </div>

      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jquery';
import Swiper from 'swiper';

import { mapGetters, mapActions, mapMutations} from "vuex";

export default {
  name: 'Home',
  data() {
    return {

    }
  },

  computed: {

  ...mapGetters(["pullInfoUsers"]),

  },
  methods: {

    ...mapActions(["getInfoUsers"]),

  },

 created() {
   //do something after creating vue instance
   this.getInfoUsers();
 },

   mounted() {
    //do something after mounting vue instance
    var swiper = new Swiper('.swiper-container', {
     slidesPerView: 1,
     spaceBetween: 32,
     roundLengths: true,
     loop: true,
     centerInsufficientSlides: true,
     loopFillGroupWithBlank: true,

     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },

     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },

     breakpoints: {
        360: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,

        }
      }

   });

   var mySwiper = document.querySelector('.swiper-container').swiper;

       $('.swiper-button-next').click(function(){
           mySwiper.slideNext();
       });
       $('.swiper-button-prev').click(function(){
           mySwiper.slidePrev();
       });

  },

  components: {

  }
}
</script>

<style scoped>

.home-title span {
  font-weight: bold;
  font-size: 48px;
}

.last-title {
  color: #E73348;
}

.search {
  width: 100%;
  height: 48px;
  border: none;
  background: #FFF7F7;
  border-radius: 4px;
}
.search:focus {
  outline: none;
}
.icon_search {
  background: #FFF7F7;
}

@media (min-width: 700px) {
  .arrows {
   display: none !important;
  }
}

@media (max-width: 700px) {
  .slider-arrows {
    display: none !important;
  }
}

@media (max-width: 525px) {
  .home-title span {
    font-size: 36px;
  }
}

@media (max-width: 470px) {
   .arrows > .swiper-button-prev::after {
     right: -30px;
   }
   .arrows > .swiper-button-next::after {
     right: -60px;
   }
}


/* slider */
.swiper-container {
  width: 100% !important;
  margin-bottom: 223px !important;
}
.first-slider {
   background: #E73348 !important;
   border-radius: 4px;
}
.first-slider .title {
  margin-top: 125px !important;
  color: #FFFFFF !important;
  text-transform: lowercase !important;
}
.first-slider .first-button-slider button {
  width: 100%;
  height: 64px;
  color: #E73348;
  font-size: 16px;
  font-weight: bold;
  background: #FFF7F7;
  border-radius: 4px;
  border: none;
}
.first-button-slider button:hover {
  background: #FFFFFF;
  color: #E73348;
}
.swiper-slide {
  width: 256px !important;
  height: 430px !important;
  text-align: center;
  font-size: 18px;
}
.swiper-slide:hover > .hover-text {
  display: block;
  margin-top: 80px;
}
.swiper-slide:hover > .title {
  display: none;
}
.swiper-slide:hover > .under-title {
   display: none;
   opacity: 0.5;
}
.swiper-slide:hover > .button-slider {
  margin-top: 322px;
}
.hover-text {
   top: 0px;
   z-index: 300 !important;
   position: absolute;
   color: #FFFFFF;
   text-align: left;
   font-size: 18px;
   word-wrap: break-word;
   display: none;
   transition: 1s;
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
.user_img {
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: -2 !important;
}
.gradient {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1 !important;
  color:green;
  background: linear-gradient(0deg, #171717 20.35%, rgba(23, 23, 23, 0) 100%);
}
.swiper-button-next:hover, .swiper-button-prev {
  cursor: pointer !important;
  z-index: 999 !important;

}
.button-slider button:hover {
  background: none;
  border: 1px solid #E73348;
  color: #E73348;
  z-index: 99 !important;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  display: flex;
  justify-content: center;
  background: #E73348;
  width: 70px !important;
  height: 70px !important;
  position: absolute;
  color: #ffffff;
  font-size: 20px !important;
  border-radius: 50%;
  z-index: 100;

}
.swiper-button-next:after {
  content: "\2192";
  font-size: 50px !important;
  margin-right: 100px;

}
.swiper-button-prev:after {
  content: "\2190";
  font-size: 50px !important;
  margin-left: 100px;
}




</style>
