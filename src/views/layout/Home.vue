<template>
  <div class="home">
        <h2 class="font-weight-bold text-primary">這是前台頁面</h2>
        <router-link to="/" class="btn btn-primary">Home</router-link> |
        <router-link to="/about" class="btn btn-primary">About</router-link> |
        <router-link to="/products" class="btn btn-primary">產品列表</router-link> |
        <router-link to="/cart" class="btn btn-primary">購物車列表</router-link> |
        <router-link to="/order" class="btn btn-primary">結帳頁面</router-link> |
        <router-link to="/admin" class="btn btn-primary">回後台</router-link>
        <hr>
        <router-view/>
  </div>
</template>
