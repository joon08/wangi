<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" @click="goto('/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" @click="goto('/category')">分类</van-tabbar-item>
      <van-tabbar-item icon="cash-on-deliver" @click="goto('/deserve')">值得买</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" @click="goto('/shoppingcard')">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="goto('/personal')">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang='stylus' scoped></style>
