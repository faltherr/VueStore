<template>
  <nav>
    <router-link :to="{ name: 'Products'}">
      <h4>VueStore</h4>
    </router-link>
    <router-link :to="{name: 'Cart'}">
      <div>
        <h4>Cart</h4>
        <h4>{{ cartCount }}</h4>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    cartCount: {
      type: Number
    }
  }
};
</script>

<style  scoped>
nav {
  display: flex;
  background-color: #000000;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  margin-bottom: 25px;
}
nav h4 {
  color: white;
  font-weight: bold;
}
</style>