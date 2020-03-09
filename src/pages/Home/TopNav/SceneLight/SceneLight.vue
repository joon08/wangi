<template>
  <div class="sceneLight">
    <ul class="clearFix">
      <li v-for="(item,index) in datas" :key="index" class="item">
        <a :href="item.styleItem.targetUrl" :class="{tab:index<=1}">
          <h3>{{item.styleItem.title}}</h3>
          <p>{{item.styleItem.desc}}</p>
          <img :src="item.styleItem.picUrlList[0]" alt />
          <img :src="item.styleItem.picUrlList[1]" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import indexDatas from '../../../../../datas/index.json'
export default {
  name: 'SceneLight',
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    this.datas = indexDatas.sceneLightShoppingGuideModule
  }
}
</script>

<style lang='stylus' scoped>
.sceneLight
  padding 15px
  background-color #fff
  margin-top 10px
  ul
    display flex
    flex-wrap wrap
    justify-content space-between
    .item
      width 170px
      height 130px
      background-color #F5F5F5
      margin-bottom 4px
      a
        width 100%
        h3
          padding 15px 0 0 15px
        p
          padding 0 0 0 15px
          font-size 12px
        img
          width 75px
          height 75px
</style>
