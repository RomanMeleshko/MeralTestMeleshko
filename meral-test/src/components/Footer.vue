<template>
  <div class="row justify-content-between">
       <div class="col-6 col-md-6 col-sm-7">
         <div v-if="showInfo">
            <div class="footer-info-left ml-4">
              <span>
                Policy & Terms
              </span>
              <span class="ml-3">
                TL;DR
              </span>
              <span class="ml-3">
                Privacy
              </span>
            </div>
         </div>


       </div>
       <div class="col-4 col-md-6 col-sm-5">
         <div class="footer-info-right text-right pr-4">
           <span>
             meradev.com
           </span>
           <span class="pl-3">
             2020
           </span>
         </div>
     </div>
  </div>


</template>

<script>

import { mapGetters, mapActions, mapMutations} from "vuex";

 export default {
   name: 'Footer',
   data() {
     return {
        showInfo: false
     }
   },

   computed: {


   },

   methods: {


   }


 }
</script>

<style scoped>

.footer-info-right {
  font-size: 14px;
  opacity: 0.5;
}

.footer-info-left {
  font-size: 16px;
}


</style>
