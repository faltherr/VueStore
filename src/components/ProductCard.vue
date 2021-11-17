<template>
  <router-link :to="{name: 'Product', params: {id: product.id}}">
    <div class="product-card">
      <img :src="product.image" alt="product image" />
      <h4>{{ product.name }}</h4>
      <p>Department: {{product.department}}</p>
      <p>{{ `$${product.price}` }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  }
};
</script>

<style scoped>
.product-card {
  background-color: #243b94;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 15px;
  overflow: hidden;
  padding: 20px;
  transition: 0.3s;
  width: 300px;
  height: 400px;
}

.product-card:hover {
  box-shadow: 0 8px 16px 0 white;
}

.product-card img {
  height: 50%;
}

.product-card h4 {
  color: #ffe535;
}

.product-card p {
  color: white;
}

.product-card p:nth-child(4) {
  color: #d20100;
}
</style>