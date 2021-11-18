<template>
  <div id="app">
    <Navbar :cartCount="cart.length" />
    <router-view @add-to-cart="addToCart" :cart="cart"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    }
  }
};
</script>

<style>
#app {
  background-image: linear-gradient(90deg, #243b94, #0aafd8);
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  text-align: center;
  width: 100vw;
}
body {
  margin: 0;
}
</style>
