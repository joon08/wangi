<template>
  <div class="bigPromotionModule" v-if="bigPromotion.length">
    <div class="top">
      <img :src="bigPromotion[0].cells[0].picUrl" alt />
    </div>
    <div class="middle">
      <img :src="bigPromotion[1].cells[0].picUrl" alt />
      <img :src="bigPromotion[1].cells[1].picUrl" alt />
    </div>
    <div class="bottom">
      <ul>
        <li>
          <p>{{bigPromotion[2].cells[0].title}}</p>
          <p>{{bigPromotion[2].cells[0].subTitle}}</p>
          <img :src="bigPromotion[2].cells[0].itemList[0].picUrl" alt />
        </li>
        <li>
          <p>{{bigPromotion[2].cells[1].title}}</p>
          <p>{{bigPromotion[2].cells[1].subTitle}}</p>
          <img :src="bigPromotion[2].cells[1].itemList[0].picUrl" alt />
        </li>
        <li>
          <p>{{bigPromotion[2].cells[2].title}}</p>
          <p>{{bigPromotion[2].cells[2].subTitle}}</p>
          <img :src="bigPromotion[2].cells[2].itemList[0].picUrl" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import indexDatas from '../../../../../datas/index.json'
export default {
  data () {
    return {
      bigPromotion: [],
    }
  },
  mounted () {
    this.bigPromotion = indexDatas.bigPromotionModule.floorList
    
  }
}
</script>

<style lang='stylus' scoped>
.bigPromotionModule
  background-color rgb(212, 50, 59)
  width 100%
  .top
    width 100%
    img
      width 100%
      height 100px
  .middle
    width 100%
    box-sizing border-box
    display flex
    justify-content center
    img
      width 47%
      margin 0 2px
  .bottom
    width 100%
    ul
      display flex
      justify-content space-between
      padding 0 10px 10px
      li
        width 115px
        height 110px
        display flex
        flex-direction column
        align-items center
        border-radius 5px
        margin-top 5px
        padding-top 10px
        background url('https://yanxuan.nosdn.127.net/00ce570b5344d3ab52e98427df5aaf3c.png') center center
        img
          width 70px
          height 70px
        p 
          font-size 13px
          color #ab0933
          &:nth-child(1)
            font-weight bold
</style>
