<template>
  <nav>
    <router-link :to="{ name: 'Products'}">
      <h4>VueStore</h4>
    </router-link>
    <router-link :to="{name: 'Cart'}">
      <h4>Cart</h4>
    </router-link>
  </nav>
</template>

<script>
export default {};
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