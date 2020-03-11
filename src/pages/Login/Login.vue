<template>
  <div class="login">
    <div class="head">
      <router-link replace to="/home">
        <van-icon name="wap-home-o" />
      </router-link>
      <span>网易严选</span>
      <router-link to="/search" class="searchIcon">
        <van-icon name="search" />
      </router-link>
      <router-link replace to="/shoppingcard">
        <van-icon name="shopping-cart-o" />
      </router-link>
    </div>
    <div class="content">
      <img src="./1.png" alt="">
      <van-button type="danger" class="btn">手机账号快捷登录</van-button>
      <van-button plain type="primary" class="btn">邮箱账号登录</van-button>
      <p>
        <span>微信</span>
        <span class="qq">QQ</span>
        <span>微博</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang='stylus' scoped>
.login
  width 100%
  height 100%
  background-color #EEEEEE
  .head
    width 100%
    height 50px
    font-size 26px
    display flex
    align-items center
    padding 0 15px
    background-color #FAFAFA
    span
      width 80%
      text-align center
      font-size 18px
      margin-left 20px
    .searchIcon
      margin-right 10px
  .content
    display flex
    flex-direction column
    align-items center
    img
      width 134px
      height 45px
      margin 100px 0
    .btn
      width 90%
      margin-top 20px
      border-radius 4px
    p
      margin-top 180px  
      color #7F7F7F
    span
      padding 0 25px
      font-size 14px
    .qq
      border-left 1px solid #7F7F7F
      border-right 1px solid #7F7F7F
</style>
