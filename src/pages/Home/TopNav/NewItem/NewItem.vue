<template>
  <div class="flashSale">
    <p class="title clearFix">
      <span>新品首发</span>
      <span>更多></span>
    </p>
    <ul class="clearFix">
      <li v-for="(item,index) in datas" :key="index" class="item">
        <div>
          <img :src="item.showPicUrl" alt />
          <span class="productPlace">{{item.productPlace}}</span>
        </div>
        <p>{{item.name}}</p>
        <p>￥{{item.retailPrice}}</p>
        <span v-if="item.itemTagList[0].name">{{item.itemTagList[0].name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import indexDatas from '../../../../../datas/index.json'
export default {
  name: 'NewItem',
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    this.datas = indexDatas.newItemList
  }
}
</script>

<style lang='stylus' scoped>
.flashSale
  margin-top 10px
  background-color #fff
  padding-left 15px
  padding-bottom 15px
  .title
    padding 15px 15px 15px 0
    span
      &:nth-child(1)
        margin-right 10px
      &:nth-child(2)
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
        position relative
        .productPlace
          position absolute
          font-size 12px
          width 17px
          padding-left 2px
          left 10px
          top 5px
          border 1px solid red
          border-radius 2px
          color red
        img
          width 100%
          height 100%
      p
        &:nth-of-type(1)
          width 100%
          margin 5px 0
          font-size 12px
          text-overflow ellipsis
          overflow hidden
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          word-break break-all
        &:nth-of-type(2)
          color red
      span
        color red
        font-size 11px
        padding 0 5px
        border 1px solid red
        border-radius 10px
</style>
