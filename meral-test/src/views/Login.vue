<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="row">
        <div class="col">
          <div class="title-login text-center">
            <span>Log in</span>
          </div>
        </div>
      </div>

    <form v-on:click="onSubmit">
      <div class="form mt-5">
        <div class="row justify-content-center">
          <div class="col-6 center p-2">
            <form>
              <input v-bind:class="{title: valid_title}" v-model="title" type="text" class="form-control p-3"  placeholder="Email" value="" required>
            </form>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-6 center p-2">
            <form>
              <input v-bind:class="{password: valid_password}" v-model="password" type="password" class="form-control p-3"  placeholder="Password" value="" required>
            </form>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-6 center pl-0 mt-2">
          <div class="text-login">
            <span>Forgot your password?</span>
            <span class="link-login"><a href="#"> Reset by email</a></span>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-6 center mt-4">
          <div class="button p-3">
            <router-link to="/home">
              <input type="submit" value="log in"/>
            </router-link>

          </div>
        </div>
      </div>
    </form>

      <div class="row justify-content-center">
        <div class="col-6 center mt-4">
          <div class="social-networks">
            <div class="center">
              <p>
                Or Log In with
              </p>
            </div>
            <div class="row">

              <div class="col-md-6 center pl-md-2">
                <div class="facebook">
                  <span class="icon-facebook pl-2">
                    <img src="@/assets/Vector.png"/>
                  </span>
                  <span class="text-facebook pl-2">
                    Facebook
                  </span>
                </div>
              </div>

              <div class="col-md-6 center pl-md-3">
                <div class="google">
                  <span class="icon-google pl-2">
                    <img src="@/assets/icon.png"/>
                  </span>
                  <span class="text-google pl-2">
                    Google
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center margin-bottom">
        <div class="col-6 center pl-0 mt-5">
          <div class="text-login">
            <span>Don`t have an account yet?</span>
            <span class="link-login"><a href="#"> Sing Up</a></span>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>

import { mapGetters, mapActions, mapMutations} from "vuex";


  export default {
    name: 'Login',
    data() {
      return {
         title: "",
         password: "",
         currency: true,
         valid_title: false,
         valid_password: false
      }
    },
    watch: {
       title: function() {

         if(this.title) {

           this.valid_title = true;

        }else {

            this.valid_title = false;
        }

      },
      password: function() {

        if(this.password) {

          this.valid_password = true;

       }else {

           this.valid_password = false;
       }

      }

    },

    computed: {

    },

    methods: {

      ...mapMutations(["updateUser", "showUser", "showFooterTitle"]),


      onSubmit() {

         this.showUser(this.currency);
         this.showFooterTitle(this.currency);
      }

    },

    components: {

    }
  }
</script>


<style scoped>


.title-login {
  font-size: 30px;
  color: #311746;
}
.form-control {
  border: none !important;
  padding: 23px 16px !important;
  box-shadow: 0px 3px 10px rgba(88, 19, 27, 0.1) !important;
  border-radius: 4px;
  height: 70px !important;
  width: 352px !important;
  font-size: 18px;
  color: #837490;
  border-radius: 2px;
}
.center {
  display: flex;
  justify-content: center;
}
.text-login > span {
  font-size: 18px;
  word-wrap: break-word;
}
.link-login > a {
  text-decoration: underline;
  color: #E73348;
  cursor: pointer;
}
.button input {
  width: 352px;
  height: 70px;
  background: #E73348;
  color: #ffffff;
  border: none;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
.social-networks p {
  font-size: 24px;
}
.facebook, .google {
  width: 160px;
  height: 60px;
  padding: 18px 20px;
  border: 1px solid #4968AD;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
}
.text-facebook, .text-google {
  font-weight: bold;
  font-size: 16px;
  color: #4968AD;
}
.google {
  border: 1px solid #E73348;
}
.text-google {
  color: #E73348;
}
.margin-bottom {
  margin-bottom: 263px !important;
}
.title, .password {
  border: 1px solid green !important;
}


</style>
