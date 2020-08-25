<template>
  <nav class="navbar p-sm-4">
    <div class="logo-company p-sm-auto">
      <a class="navbar-brand" href="#">
        <span><img src="@/assets/Marel-logo.png"/></span>
      </a>
    </div>
    <button class="navbar-toggler icon button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <div v-for="user in pullState" :key="user.id">
          <div v-if="user.show">
            <div class="d-flex">
                <div>
                  <span>
                    <img :src="user.user_icon" />
                  </span>
                </div>

               <div class="user_info p-2 navbar-toggler dron">
                 <div class="user_title">
                   <span>{{ user.title }}</span>
                 </div>
                 <div class="user_name">
                   <span>{{ user.name }}</span>
                 </div>
               </div>

               <div class="user_like ml-4 p-2 navbar-toggler ">
                 <img :src="user.icon" />
               </div>
            </div>
          </div>
        </div>
    </button>
  </nav>
</template>

<script>

import { mapGetters, mapActions, mapMutations} from "vuex";

  export default {
    name: 'HeaderNavBar',
    data() {
      return {

      }
    },

    computed: {

       ...mapGetters(["pullState"]),

    },

    methods: {
        ...mapActions(["getUsers"]),
    },

    async mounted() {

           this.getUsers();

     },
  }
</script>

<style scoped>
 .navbar-toggler {
   display: block !important;

 }

.button:focus {
  outline: none;
}

 .user_title {
   font-size: 14px;
   color: #E73348;
 }

 .user_name {
   font-size: 16px;
   font-weight: bold;
   color: #E73348;
 }

 .user_like img {
   width: 30px;
   height: 30px;
   border: 1px dashed #333;
 }

 @media (max-width: 575px) {
   .user_info, .user_like {
      display: none !important;
   }
 }

</style>
