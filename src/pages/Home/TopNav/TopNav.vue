<template>
  <div class="nav">
      <van-tabs>
        <van-tab v-for="(item,index) in titles" :title="titles[index]" :key="index" class="tab" >
          <Swiper />
        </van-tab>
      </van-tabs>
      <van-icon name="arrow-down" class="icon" />
  </div>
</template>

<script>
import Swiper from './Swiper/Swiper'
export default {
  name: 'TopNav',
  data () {
    return {
      titles: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色']
    }
  },
  components: {
    Swiper
  }
}
</script>

<style lang='stylus' scoped>
.nav
  position relative
  .icon
    position absolute
    right 0
    top 0
    background-color #fff
    height 44px
    width 44px
    line-height 44px
    font-size 20px
    text-align center

</style>
