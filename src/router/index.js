import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/views/Products'
import Product from '@/views/Product'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Products',
            component: Products
        },
        {
            path: '/product/:id',
            name: 'Product',
            component: Product,
            props: true
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        }
    ]
})