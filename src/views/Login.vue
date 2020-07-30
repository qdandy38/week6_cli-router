<template>
    <div id="login" class="container">
        <loading :active.sync="isLoading"></loading>
        <form class="form-signin" @submit.prevent="signIn">
            <h1 class="h3 mb-3 font-weight-normal text-primary">
                請先登入
            </h1>
            <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input id="inputEmail" v-model="user.email" type="email" class="form-control" placeholder="Email address" required autofocus>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="sr-only">Password</label>
                <input id="inputPassword" v-model="user.password" type="password" class="form-control" placeholder="Password" required>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">
              登入
            </button>
            <p class="mt-5 mb-3 text-muted">
                &copy; 2020~∞ - YunHsuanTsai
            </p>
        </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      isLoading: false
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}/api/auth/login`
      this.isLoading = true
      this.$http.post(api, this.user)
        .then((res) => {
          console.log(res)
          this.token = res.data.token
          const expired = res.data.expired // 到期日
          // 把token expired存入cookie
          // expireed轉換時間格式
          document.cookie = `token=${this.token}; expires=${new Date(expired * 1000)}; path=/`
          this.$router.push('./admin') // 登入成功，跳轉到產品頁
          this.isLoading = false
        }).catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Microsoft JhengHei', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    html,
    body {
        height: 100%;
        text-align: center;
    }
    body {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }
</style>
