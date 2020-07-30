import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/layout/Home.vue'

Vue.use(VueRouter)

const routes = [
  { // 當網址錯誤時，導回首頁
    path: '*',
    redirect: '/'
  },
  { // login 路由
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/layout/About.vue')
      },
      {
        path: '/products',
        component: () => import('../views/layout/Products.vue')
      },
      { // 動態路由
        path: '/product/:id',
        component: () => import('../views/layout/Product.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/layout/Cart.vue')
      },
      {
        path: '/order',
        component: () => import('../views/layout/Order.vue')
      },
      {
        path: '/complete',
        component: () => import('../views/layout/Complete.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/OrderList.vue')
      },
      {
        path: 'images',
        component: () => import('../views/dashboard/ImageList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
