<template>
    <div>
        <h2>這是後台的產品頁面</h2>
    </div>
</template>
<script>
export default {
  data () {
    return {
      products: []
    }
  },
  props: ['token'],
  created () {
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_UUID}/admin/ec/products`
    this.$http.get(url)
      .then(res => {
        this.products = res.data.data
        console.log(this.products)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
