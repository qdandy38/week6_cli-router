<template>
    <div class="container">
        <loading :active.sync="isLoading"></loading>
        <h2>
            這裡是產品頁面
        </h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">產品名稱</th>
                    <th scope="col">售價</th>
                    <th scope="col">連結</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <!-- <router-link :to="`/product/${item.id}`">產品資訊</router-link> -->
                        <button @click="goPage(item)" class="btn btn-outline-info">產品資訊</button>
                    </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      products: [],
      isLoading: false
    }
  },
  created () {
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_UUID}/ec/products`
    this.isLoading = true
    this.$http.get(url)
      .then(res => {
        this.products = res.data.data
        console.log(this.products)
        this.isLoading = false
      })
  },
  methods: {
    goPage (item) {
      console.log(this.$router)
      this.$router.push(`/product/${item.id}`) // 進入特定頁面
    }
  }
}
</script>
