<template>
  <div>
    <h2>Products</h2>
    <div>
      <div class="search-container">
        <input type="text" v-model="searchTerm" placeholder="search for product" />
        <button>Search</button>
      </div>
      <div class="department-container">
        <h4>Departments</h4>
        <button
          v-for="department in departments"
          :key="department"
          @click="toggleSelectedDepartments(department)"
        >{{ department }}</button>
      </div>
      <div class="product-card-container">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
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
      products: [],
      searchTerm: ""
    };
  },
  computed: {
    departments() {
      if (this.products.length) {
        return this.products.reduce((prev, cur) => {
          if (!prev.some(d => d === cur.department)) {
            prev.push(cur.department);
          }
          return prev;
        }, []);
      } else {
        return [];
      }
    },
    filteredProducts() {
      return this.products.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
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
  },
  methods: {
    toggleSelectedDepartments(department) {
      if (this.departments.includes(department)) {
        this.departments = this.departments.filter(d => d !== department);
      } else {
        this.departments = this.departments.concat([department]);
      }
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

// Question: When to use a computed setter?