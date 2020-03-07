<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item><img src="./imgs/1.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="./imgs/2.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="./imgs/3.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="./imgs/4.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="./imgs/5.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="./imgs/6.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="./imgs/7.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="./imgs/8.webp" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang='stylus' scoped>
.my-swipe
  width 100%
  height 185px
  img 
    width 100%
    height 100%
</style>
