<template>
  <div>
    <h2>Products</h2>
    <div>
      <div class="search-container">
        <input type="text" />
        <button>Search</button>
      </div>
      <div class="department-container">
        <h4>Departments</h4>
        <button v-for="department in departments" :key="department">{{ department }}</button>
      </div>
      <div class="product-card-container">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "Products",
  components: {
    ProductCard
  },
  data() {
    return {
      loadingProducts: false,
      products: []
    };
  },
  computed: {
    departments() {
      if (this.products.length) {
        return this.products.reduce((prev, cur) => {
          console.log(prev);
          if (!prev.some(d => d === cur.department)) {
            prev.push(cur.department);
          }
          return prev;
        }, []);
      } else {
        return [];
      }
    }
  },
  async created() {
    try {
      this.loadingProducts = true;
      const response = await fetch("http://localhost:3000/products", {
        method: "GET"
      });
      this.products = await response.json();
      this.loadingProducts = false;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style scoped>
.department-container {
  margin-bottom: 25px;
}
.product-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.search-container {
  margin-bottom: 25px;
}
</style>
