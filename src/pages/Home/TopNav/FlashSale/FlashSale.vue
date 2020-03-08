<template>
  <div class="flashSale">
    <p class="title clearFix">
      <span>限时购</span>
      <span>01</span> :
      <span>10</span> :
      <span>30</span>
      <span>更多></span>
    </p>
    <ul class="clearFix">
      <li v-for="(item,index) in datas" :key="index" class="item">
        <div>
          <img :src="item.showPicUrl" alt />
        </div>
        <p>
          <span>￥100</span>
          <span>￥200</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import indexDatas from '../../../../../datas/index.json'
export default {
  name: 'FlashSale',
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    this.datas = indexDatas.flashSaleModule.itemList
  }
}
</script>

<style lang='stylus' scoped>
.flashSale
  margin-top 10px
  background-color #fff
  padding-left 15px
  .title
    padding 15px 15px 15px 0
    span 
      &:nth-child(1)
        margin-right 10px
      &:nth-child(2)
        background-color #000
        color #fff
        padding 2px
        border-radius 2px
      &:nth-child(3)
        background-color #000
        color #fff
        padding 2px
        border-radius 2px
      &:nth-child(4)
        background-color #000
        color #fff
        padding 2px
        border-radius 2px
      &:nth-child(5)
        float right 
  ul
    .item
      width 30%
      float left
      margin 4px
      div
        width 108px
        height 108px
        background-color #F5F5F5
        img 
          width 100%
          height 100%
      p
        padding-left 10px
        span 
          &:nth-child(1)
            color #DD1A21
            font-size 15px
            margin-right 2px
          &:nth-child(2)
            color #7F7F7F
            font-size 12px
            text-decoration line-through
</style>
