<template>
  <div class="indexActivity clearFix">
    <p>- 新人专享礼 -</p>
    <div class="left">
      <p>新人专享礼包</p>
      <img src="./2.png" alt />
    </div>
    <div class="right">
      <div class="right_top">
        <p>福利社</p>
        <span>今日特价</span>
      </div>
      <div class="right_bottom">
        <p>新人拼团</p>
        <span>1元起包邮</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang='stylus' scoped>
.indexActivity
  background-color #fff
  margin-top 10px
  padding 0 15px 15px
  &>p
    text-align center
    padding 12px 0
    font-family PingFangSC-Regular
  .left
    float left
    width 49%
    height 217px
    background-color #F9E9CF
    margin-right 2px
    p
      margin 15px
    img 
      display block
      width 130px
      height 130px
      margin 0 auto
  .right
    float left
    width 50%
    height 217px
    .right_top
      height 49%
      background-color #FBE2D3
      padding 15px 
      margin-bottom 2px
      span 
        font-size 12px
        color #7F7F7F
        opacity .6
    .right_bottom
      height 50%
      background-color #FFECC2
      padding 15px 
      span 
        font-size 11px
        background-color #CBB693
        color #fff
        padding 2px 5px
        border-radius 3px
</style>
