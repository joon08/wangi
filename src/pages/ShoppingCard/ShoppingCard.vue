<template>
  <div class="shoppingcard">
    <div class="head">
      <span>购物车</span>
      <span>领劵</span>
    </div>
    <div class="policy">
      <p>
        <van-icon name="circle" class="circle" />
        <span>30天无忧退货</span>
      </p>
      <p>
        <van-icon name="circle" class="circle" />
        <span>48小时快速退款</span>
      </p>
      <p>
        <van-icon name="circle" class="circle" />
        <span>满88元免邮费</span>
      </p>
    </div>
    <div class="bottom">
      <van-icon name="shopping-cart-o" class="icon"/>
      <p class="text">去添加点什么吧</p>
      <van-button type="danger" class="btn" @click="goLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCard',
  methods: {
    goLogin(){
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang='stylus' scoped>
.shoppingcard
  width 100%
  height 100%
  background-color #F4F4F4
  .bottom
    display flex
    flex-direction column
    align-items center
    .icon
      font-size 100px
      margin-top 200px
      color #B7B7B3
    .text
      color #B7B7B3
      font-size 14px
      font-weight 400
      margin 5px 0 20px
    .btn
      width 200px
  .policy
    width 100%
    height 35px
    line-height 35px
    background-color #EEEEEE
    display flex
    justify-content space-around
    font-size 12px
    font-weight 200
    .circle
      font-size 10px
      transform scale(0.6)
  .head
    height 44px
    background-color #fff
    font-size 18px
    line-height 44px
    padding 0 15px
    display flex
    justify-content space-between
    span:last-child
      color red
      font-size 15px
      margin-right 15px
</style>
