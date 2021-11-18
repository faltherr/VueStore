<template>
  <div class="product-view">
    <h3>{{ product.name }}</h3>
    <div class="product-container">
      <div class="image-container">
        <img class="product-image" :src="product.image" />
      </div>
      <div>
        <p>{{ product.prodDesc }}</p>
        <div class="color-options">
          <p>Available colors:</p>
          <span
            v-for="color in product.color"
            :style="selectedColor === color ? {border: '2px solid red', backgroundColor: color} : {backgroundColor: color}"
            @click="changeSelectedColor(color)"
          />
        </div>
      </div>
      <div class="product-action-container">
        <p>{{ `$${product.price}` }}</p>
        <div class="stock-alert-container">
          <strong
            :style="product.stock !== 0 ? {color: '#d20100', textShadow: '2px 2px #FFFFFF', fontWeight: 800} : null"
          >
            <em>{{ stockWarning }}</em>
          </strong>
        </div>
        <button :disabled="product.stock === 0" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      product: {},
      selectedColor: null,
      isLoading: false
    };
  },
  computed: {
    stockWarning() {
      if (this.product.stock === 0) {
        return "Out of stock";
      } else if (this.product.stock > 0 && this.product.stock < 5) {
        return "It's almost gone!";
      } else {
        return;
      }
    }
  },
  async created() {
    const response = await fetch(`http://localhost:3000/products/${this.id}`);
    this.product = await response.json();
    this.selectedColor = this.product.color[0];
  },
  methods: {
    changeSelectedColor(color) {
      this.selectedColor = color;
    },
    addToCart() {
      this.$emit("add-to-cart", {
        ...this.product,
        selectedColor: this.selectedColor
      });
    }
  }
};
</script>

<style scoped>
.color-options span {
  height: 15px;
  width: 15px;
  display: inline-block;
  border: 0.5px solid grey;
}
.product-view {
  padding: 25px;
  background-color: aliceblue;
  margin: 0 15px;
}
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-action-container {
  display: flex;
  flex-direction: column;
}
.stock-alert-container {
  background-color: #ffe535;
}
</style>

// Question: Is there a better way to style bind conditionally and also add a style to an element?
// Question: Is the computed property just a getter under the hood?
// Question: How to debug in browser better?
