<template>
    <div>
        <h2>這是結帳頁面</h2>
        <button class="btn btn-outline-primary" @click="goComplete()">點我前往結帳完成</button>
    </div>
</template>
<script>
export default {
  methods: {
    goComplete () {
      this.$router.push('/complete')
    }
  }
}
</script>
