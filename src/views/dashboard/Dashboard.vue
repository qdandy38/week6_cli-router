<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <h2 class="text-info font-weight-bold">這裡是後台頁面</h2>
        <router-link to="/admin/" class="btn btn-outline-info">後台首頁</router-link> |
        <router-link to="/admin/products" class="btn btn-outline-info">產品列表</router-link> |
        <router-link to="/admin/coupons" class="btn btn-outline-info">優惠券列表</router-link> |
        <router-link to="/admin/orders" class="btn btn-outline-info">訂單列表</router-link> |
        <router-link to="/admin/images" class="btn btn-outline-info">圖片列表</router-link> |
        <router-link to="/" class="btn btn-outline-info">回前台</router-link> |
        <button @click="signOut()" type="button" class="btn btn-outline-info">登出</button>
        <hr>
        <router-view :token="user.token" v-if="checkSuccess"/>
    </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        token: '',
        uuid: ''
      },
      checkSuccess: false,
      isLoading: false
    }
  },
  created () {
    // 取得cookie內的token，如果沒有就返回登入頁面
    this.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.user.uuid = document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.user.token}` // 預設帶入token
    // if (this.user.token === '') {
    //   this.$router.push('./login') // 如果cookie內沒有token -> 返回登入頁
    // }
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      const url = `${process.env.VUE_APP_API}/api/auth/check`
      this.$http.post(url, { api_token: this.user.token })
        .then((res) => {
          console.log(res)
          this.checkSuccess = true // 驗證成功
        })
        .catch(err => {
          console.log(err)
          this.$router.push('/login') // 如果token有誤 -> 返回登入頁
        })
    },
    signOut () {
      const url = `${process.env.VUE_APP_API}/api/auth/logout`
      this.isLoading = true
      this.$http.post(url, { api_token: this.user.token })
        .then(res => {
          console.log(res)
          document.cookie = 'token=;expires=;'
          this.$router.push('/login')
          this.isLoading = false
        })
    }
  }
}
</script>
