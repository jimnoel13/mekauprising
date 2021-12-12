<template>
  <div :style="{position: 'relative'}">
    <b-navbar toggleable="lg" class="position-absolute text-light nav-responsive" :style="{top: '0', left: '0', width: '100%', 'z-index': '8'}">
      <b-navbar-brand href="#"><img src="../../../public/images/nav-logo.png" :style="{height: '90px', width: '120px'}"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <div class="bg"></div>
        <b-navbar-nav class="ml-auto ms-auto text-center">
          <b-nav-item class="tabs"><router-link to="/">Meka Uprising</router-link></b-nav-item>
          <b-nav-item class="tabs" href="/#about">Our Vision</b-nav-item>
          <b-nav-item class="tabs"><router-link to="/story">Game Features</router-link></b-nav-item>
          <b-nav-item class="tabs"><router-link to="/story">Contact</router-link></b-nav-item>
          <b-nav-item class="button"><button @click="moralisLogin" class="button-orange">Connect Wallet</button></b-nav-item>

          <!-- Moralis -->
          <b-nav-item v-if="userToken">
            <button v-if="!moralisToken" @click="moralisLogin" class="metamask-border mt-1 position-relative login">
              <img src="../../../public/images/metamask.svg" :style="{height: '20px', width: '20px'}">
              <span class="status offline">●</span>
            </button>
            <button v-if="moralisToken" @click="moralisLogout" class="metamask-border mt-1 position-relative logout">
              <img src="../../../public/images/metamask.svg" :style="{height: '20px', width: '20px'}">
              <span class="status online">●</span>
            </button>
          </b-nav-item>

          <b-nav-item v-if="!userToken" class="d-none"><button v-b-modal.login class="tab-button button-shadow"><font-awesome-icon icon="user"/> Login</button></b-nav-item>
          <div class="dropdown position-relative pt-2" v-if="userToken">
            <button class="btn btn-secondary dropdown-toggle button-shadow" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../../../public/images/30743827_2181451222084516_4517157275755872256_n.jpg" class="profile-button"> {{ user.name.split(' ')[0] }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li><router-link class="dropdown-item text-center" to="/profile"><font-awesome-icon icon="user"/> Profile</router-link></li>
              <li><router-link class="dropdown-item text-center" to="/game"><font-awesome-icon icon="gamepad"/> play</router-link></li>
              <li><a class="dropdown-item text-center" href="javascript:void(0)" @click="logUserOut"><font-awesome-icon icon="user"/> Logout</a></li>
            </ul>
          </div>

          <b-modal id="login" v-if="!userToken" size="lg" hide-footer hide-header centered body-class="p-0">
            <div class="d-block text-center">
              <b-row>
                <b-col cols="6" class="ps-4">
                  <div :style="{'padding-top': '50px'}">
                    <h3>Login</h3>
                    <form @submit.prevent="loginUser">
                      <div class="form-group">
                        <p class="m-0 text-start">Email</p>
                        <input type="email" name="email" class="form-control w-100" v-model="login.email">
                      </div>
                      <div class="form-group">
                        <p class="m-0 text-start">Password</p>
                        <input type="password" name="password" class="form-control w-100" v-model="login.password">
                      </div>
                      <b-button type="submit" variant="outline-dark w-100 mt-3 text-sofia">Login</b-button>
                    </form>
                  </div>
                  <b-row class="pt-3">
                    <b-col class="pe-1">
                      <b-button variant="outline-danger w-100 mt-3 text-sofia">Login as <font-awesome-icon class="icon alt" :icon="['fab', 'google']"/></b-button>
                    </b-col>
                    <b-col class="ps-1">
                      <b-button variant="outline-primary w-100 mt-3 text-sofia">Login as <font-awesome-icon class="icon alt" :icon="['fab', 'facebook']"/></b-button>
                    </b-col>
                  </b-row>
                  <p class="pt-2 text-start">Dont have an account? click <router-link to="/" class="normallink">here</router-link></p>
                </b-col>
                <b-col cols="6" class="ps-0">
                  <div 
                    :style="{
                      'background': 'url(\'https://assets.website-files.com/60ef399b992671a8275e6cff/610d793938c82b5278a4267a_0n1-bg.png\')',
                      'height': '500px',
                      'background-position': 'center',
                      'background-repeat': 'no-repeat',
                      'background-size': 'cover'
                    }"
                  > 
                    <div :style="{'padding-top': '140px'}">
                      <h3 class="text-sofia text-light" :style="{'-webkit-text-stroke-width': '0.5px', '-webkit-text-stroke-color': 'black', 'font-weight': 'bold'}">Meka Uprising</h3>
                      <p class="text-sofia text-light" :style="{'-webkit-text-stroke-width': '0.5px', '-webkit-text-stroke-color': 'black', 'font-weight': 'bold'}">An open-world RPG adventure game built on the Ethereum Blockchain. Journey across a vast and varied landscape on your quest to hunt and capture deity-like creatures called Illuvials. Discover the cause of the cataclysm that shattered this land.</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-modal>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Moralis from 'moralis'
import swal from 'sweetalert'
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'Navigation',
  components: {},
  data: () => {
      return {
          currentUser: null,
          login: {
            email: "",
            password: ""
          },
          user:{},
          userToken: null,
          moralisToken: null
      }
  },
  beforeMount() {
      this.currentUser = Moralis.User.current();
      this.userToken = localStorage.getItem("jwt");
      this.moralisToken = localStorage.getItem("moralis")

      this.created();
  },
  methods: {
    async moralisLogin() {
        let user = Moralis.User.current();
        if (!user) {
          user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
            .then(function (user) {
              console.log("logged in user:", user);
              localStorage.setItem("moralis", user.get("ethAddress"))
              location.reload();
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    },
    async moralisLogout() {
        await Moralis.User.logOut();
        localStorage.removeItem("moralis");
        location.reload();
    },
    async loginUser() {
      try {
        let response = await this.$http.post(process.env.VUE_APP_API_URL+"/user/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          this.created();
          location.reload();
          // this.$router.push("/");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    },
    async logUserOut() {
      // User Logout
      localStorage.removeItem("jwt");

      // Moralis Logout
      await Moralis.User.logOut();
      localStorage.removeItem("moralis");

      location.reload();
      // this.$router.push("/");
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    created() {
      this.getUserDetails();
    }
  }
}
</script>

<style scoped>
  .nav-responsive{
    padding: 10px 120px;
  }

  .navbar .navbar-nav .tab-button{
    padding: 10px 15px;
    color: white;
    border: 2px solid white;
    background: transparent;
    font-family: 'Sofia Pro', sans-serif;
    text-transform: uppercase;
    font-size: 0.8em;
    margin-top: 2px;
  }

  .navbar .navbar-nav .tabs{
    padding: 0 1em;
  }

  .navbar .navbar-nav .button{
    padding: 0 1em;
  }

  .navbar .navbar-nav .tabs .nav-link {
    font-size: 0.8em;
    font-weight: bold;
    position: relative;
    color: white;
    font-family: 'Sofia Pro', sans-serif;
    text-transform: uppercase;
    line-height: 2.9em;
  }

  .navbar .navbar-nav .button .nav-link {
    font-size: 0.8em;
    font-weight: bold;
    position: relative;
  }

  .navbar .navbar-nav .tabs .nav-link::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: white;
    color: transparent;
    width: 0%;
    content: '.';
    height: 3px;
  }
  .navbar .navbar-nav .tabs .nav-link:hover::after {
    transition: all 0.4s;
    width: 100%;
  }
  .navbar .navbar-nav .tabs .nav-link {
    transition: all 0.4s;
  }
  .navbar .navbar-nav .tabs .nav-link a{
    color: white;
    text-decoration: none;
  }

  .metamask-border{
    transition: all 0.3s ease-out;
    border: 2px solid white;
    background: transparent;
    padding: 5px 9.5px;
    padding-bottom: 8px;
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
  }

  .metamask-border:hover{
    transition: all 0.3s ease;
    background-color: white;
    box-shadow:  -2px 2px 5px -1px #8c8c8c, -4px 4px 7px -5px rgb(155 155 155 / 76%) inset;
    -webkit-box-shadow:  -2px 2px 5px -1px #8c8c8c, -4px 4px 7px -5px rgb(155 155 155 / 76%) inset;
    -moz-box-shadow:  -2px 2px 5px -1px #8c8c8c, -4px 4px 7px -5px rgba(155,155,155,0.76) inset;
  }

  .status.online{
    color: #1DF51F;
    position: absolute;
    bottom: -6px;
    right: 0;
  }

  .status.offline{
    color: #C1C1C1;
    position: absolute;
    bottom: -6px;
    right: 0;
  }

  .profile-button{
    height: 30px;
    width: 30px;
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
  }

  .dropdown-menu {
    top: 50px !important;
    border-radius: 0 !important;
    min-width: 12rem;

  }

  @media only screen and (max-width: 600px) {
    .nav-responsive{
      padding: 10px 20px;
    }

    #nav-collapse{
      position: relative;
    }

    #nav-collapse .bg{
      height: 277px;
      width: 519px;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 0;
      background: #353535;
      opacity: 0.8;
    }

    .navbar .navbar-nav .tabs{
      opacity: 1 !important;
    }

    .navbar .navbar-nav .button{
      opacity: 1 !important;
    }
  }

</style>
