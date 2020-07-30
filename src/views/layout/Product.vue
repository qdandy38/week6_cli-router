<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <h2>單一產品頁面</h2>
        <h3>{{product.title}}</h3>
        <img :src="product.imageUrl[0]" class="img-fluid" alt="">
        <p>{{product.description}}</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      product: {
        imageUrl: []
      },
      isLoading: false
    }
  },
  created () {
    const id = this.$route.params.id
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`
    this.isLoading = true
    this.$http.get(url)
      .then(res => {
        this.product = res.data.data
        console.log(this.product)
        this.isLoading = false
      })
  }
}
</script>
