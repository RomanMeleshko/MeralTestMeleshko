<template>
    <div class="container-fluid p-0">
      <div class="header">
        <div class="header-wrapper">
          <headerNavBar></headerNavBar>
        </div>
      </div>

      <div claass="content">
            <router-view/>
      </div>

      <div class="footer">
        <div class="footer-wrapper">
          <footerBar></footerBar>
        </div>
      </div>
    </div>


</template>

<script>
  import "bootstrap/js/dist/util";
  import login from './views/Login.vue';
  import headerNavBar from '@/components/HeaderNavBar.vue';
  import footerBar from '@/components/Footer.vue';

  export default {
    name: 'App',
    data() {
      return {
         
      }
    },

    components: {
      headerNavBar,
      footerBar,
      login
    }
  }
</script>

<style>
  @import "css/app.css";


</style>
