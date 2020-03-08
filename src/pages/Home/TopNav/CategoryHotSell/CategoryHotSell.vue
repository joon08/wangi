<template>
  <div class="categoryHotSell">
    <h3>类目热销榜</h3>
    <ul class="clearFix">
      <li v-for="(item,index) in datas" :key="index" class="item">
        <a :href="item.targetUrl" :class="{tab:index<=1}">
        <p :class="{line:index<=1}">{{item.categoryName}}</p>
        <img :src="item.picUrl" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import indexDatas from '../../../../../datas/index.json'
export default {
  name: 'CategoryHotSell',
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    this.datas = indexDatas.categoryHotSellModule.categoryList
  }
}
</script>

<style lang='stylus' scoped>
.categoryHotSell
  padding 0 15px 15px
  background-color #fff
  margin-top 10px
  h3
    padding 15px
  .item
    width 24%
    float left
    background-color #F5F5F5
    margin-bottom 4px
    .tab
      display flex
      justify-content space-between
    p
      font-size 12px
      text-align center
      margin 5px 0 0 0
    &:nth-child(2n+1)
      margin-right 4px
    &:nth-child(1), &:nth-child(2)
      width 49%
      height 100px
      display flex
      justify-content space-between
      position relative
      .line
        margin 30px 0 0 15px
        font-weight 400
        font-size 14px
        &::before
          content ''
          position absolute
          left 15px
          top 55px
          width 30px
          height 2px
          background #333
      img
        height 100%
        width 50%
    &:nth-child(4), &:nth-child(8)
      margin-right 4px
    img
      display block
      margin 0 auto
      width 60px
      height 60px
</style>
