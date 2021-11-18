<template>
  <div>
    <h4>CART</h4>
    <div class="cart-table-container">
      <div v-for="product in cart">{{product.name}}</div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      cart: []
    };
  },
  created() {
    console.log("created cart", this.cart);
  },
  mounted() {
    eventBus.$on("productAdded", product => {
      const productIndex = this.cart.findIndex(p => p.id === product.id);
      if (productIndex !== -1) {
        this.cart.map((p, i) => {
          if (i === productIndex) {
            return { ...p, count: p.count + product.count };
          }
          return p;
        });
      } else {
        this.cart.push(product);
      }
    });
  }
};
</script>

<style scoped>
</style>

// How to capture an event on a different route that does something like add to cart