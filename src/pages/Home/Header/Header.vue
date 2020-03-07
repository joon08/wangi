<template>
  <div class="header">
      <span class="logo">网易严选</span>
      <SearchBtn />
      <van-button plain type="danger" to="/personal" size="mini" class="login">登录</van-button>
  </div>
</template>

<script>
import SearchBtn from '../../../components/SearchBtn'
export default {
  name: 'Header',
  components: {
    SearchBtn
  }
}
</script>

<style lang='stylus' scoped>
.header
  width 100%
  display flex
  align-items center
  padding 10px 0
  .logo
    font-size 18px
    margin 0 10px
  .login
    font-size 12px
    margin-left 10px
    border-radius 4px
</style>
