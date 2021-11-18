<template>
  <div>
    <h4>CART</h4>
    <div class="cart-table-container">
      <table>
        <tr>
          <th v-for="property in displayableProperties">{{property}}</th>
        </tr>
        <tr v-for="product in cart">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.selectedColor }}</td>
        </tr>
      </table>
      <div>
        <h4>Subtotal: ${{subTotal}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      subTotal: 0
    };
  },
  computed: {
    displayableProperties() {
      if (this.cart.length) {
        return Object.keys(this.cart[0]).filter(p =>
          ["name", "price", "selectedColor"].includes(p)
        );
      }
    }
  },
  created() {
    this.cart = this.$attrs.cart;
  },
  mounted() {
    this.calculateSubTotal();
  },
  methods: {
    calculateSubTotal() {
      if (this.cart.length) {
        this.subTotal = this.cart.reduce((a, b) => +a.price + +b.price);
      }
    }
  }
};
</script>

<style scoped>
.cart-table-container {
  background-color: white;
}
.cart-table-container table {
  width: 80%;
}
</style>

// Question: How to capture an event on a different route that does something like add to cart
