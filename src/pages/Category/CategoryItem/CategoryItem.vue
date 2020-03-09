<template>
  <div class="wrap">
    <div class="banner">
      <a href="https://act.you.163.com/act/pub/FCDFfgPnshwu.html" class="singleBanner">
        <img src="https://yanxuan.nosdn.127.net/6512cf60c8d8b6e67825317cb2b42025.jpg" />
      </a>
    </div>
    <div class="cateList">
      <ul class="list clearFix">
        <li class="cateItem" v-for="(item,index) in datas.categoryList" :key="index">
          <div class="cateWrapper">
            <img :src="item.bannerUrl" class="cateImg" />
            <p class="name">{{item.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import datas from '../../../../datas/cateLists.json'
export default {
  data () {
    return {
      datas: {}
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.datas = datas.find((item) => item.id == id)
    console.log(this.datas)
  },
  watch: {
    '$route' () {
      const id = this.$route.params.id
      this.datas = datas.find((item) => item.id == id)
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrap
  width 100%
  .banner
    padding 15px
    box-sizing border-box
    width 100%
    .singleBanner
      width 100%
      img
        width 100%
  .cateList
    padding 0 15px
    .list
      .cateItem
        float left
        width 70px
        height 110px
        margin 0 8px
        .cateWrapper
          display flex
          flex-direction column
          align-items center
          img
            width 70px
            height 70px
          p
            font-size 12px
            text-align center
</style>
