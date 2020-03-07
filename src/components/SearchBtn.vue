<template>
  <div class="wrap">
    <van-icon name="search" class="icon" />
    <span>搜索商品, 共24027款好物</span>
  </div>
</template>

<script>
export default {
  name: 'SearchBtn'
}
</script>

<style lang='stylus' scoped>
.wrap
  background-color #ededed
  height 30px
  border-radius 5px
  display flex
  justify-content center
  align-items center
  box-sizing border-box
  padding 0 15px
  .icon
    font-size 20px
    margin-right 2px
  span 
    color #666
    font-size 14px
</style>
