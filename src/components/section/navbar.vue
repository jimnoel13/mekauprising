<template>
  <div :style="{position: 'relative'}">
    <b-navbar toggleable="lg" class="position-absolute text-light nav-responsive" :style="{top: '0', left: '0', width: '100%', 'z-index': '8'}">
      <b-navbar-brand href="#"><img src="./../../public/images/nav-logo.png" :style="{height: '90px', width: '120px'}"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <div class="bg"></div>
        <b-navbar-nav class="ml-auto ms-auto text-center">
          <b-nav-item class="tabs"><router-link to="/">Meka Uprising</router-link></b-nav-item>
          <b-nav-item class="tabs" href="/#about">Our Vision</b-nav-item>
          <b-nav-item class="tabs"><router-link to="/story">Game Features</router-link></b-nav-item>
          <b-nav-item class="tabs"><router-link to="/story">Contact</router-link></b-nav-item>

          <b-nav-item class="button" v-if="!currentUser"><button @click="moralisLogin" class="button-orange">Connect Wallet</button></b-nav-item>
          <!-- Moralis -->
          <b-nav-item>
            <!-- <button v-if="!currentUser" @click="moralisLogin" class="metamask-border mt-1 position-relative login">
              <img src="../../../public/images/metamask.svg" :style="{height: '20px', width: '20px'}">
              <span class="status offline">●</span>
            </button> -->
            <button v-if="currentUser" @click="moralisLogout" class="metamask-border mt-1 position-relative logout">
              <img src="../../../public/images/metamask.svg" :style="{height: '20px', width: '20px'}">
              <span class="status online">●</span>
            </button>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Moralis from 'moralis'

export default {
  name: 'Navigation',
  components: {},
  data: () => {
      return {
          currentUser: null,
          user:{},
          moralisToken: null
      }
  },
  beforeMount() {
      this.currentUser = Moralis.User.current();
      this.moralisToken = localStorage.getItem("moralis")
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
    text-transform: uppercase;
    line-height: 2.9em;
    text-shadow: -1px 1px 2px #3E3E3E;
  }

  .navbar .navbar-nav .button .nav-link {
    transition: all 0.3s ease-out;
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
      width: 100%;
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
