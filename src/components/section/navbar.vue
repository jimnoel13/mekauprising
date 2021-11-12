<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="ps-4 pe-4 bg-dark text-light">
      <b-navbar-brand href="#"><img src="../../../public/images/meka-lg-logo.png" :style="{height: '40px', width: '120px'}"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto ms-auto text-center">
          <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item href="/#about">About</b-nav-item>
          <b-nav-item><router-link to="/story">Story</router-link></b-nav-item>
          <b-nav-item><router-link to="/game"><font-awesome-icon icon="gamepad"/> play</router-link></b-nav-item>
        </b-navbar-nav>
      
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {}
}
</script>

<style scoped>
  .navbar .navbar-nav .nav-link {
    font-size: 1.1em;
    position: relative;
    color: white;
    font-family: 'Orbitron', sans-serif;
  }
  .navbar .navbar-nav .nav-link:hover {
    color: white;
  }
  .navbar .navbar-nav .nav-link::after {
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
  .navbar .navbar-nav .nav-link:hover::after {
    transition: all 0.4s;
    width: 100%;
  }
  .navbar .navbar-nav .nav-link {
    transition: all 0.4s;
  }
  .navbar .navbar-nav .nav-link a{
    color: white;
    text-decoration: none;
  }

  @media only screen and (min-width: 960px) {
    .navbar .navbar-nav .nav-link {
      padding: 1em 0.7em;
    }
    .navbar {
      padding: 0;
    }
    .navbar .navbar-brand {
      padding: 0 0.7em;
    }
  }
</style>
