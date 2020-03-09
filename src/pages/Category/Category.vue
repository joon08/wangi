<template>
  <div class="container">
    <div class="head">
      <SearchBtn />
    </div>
    <div class="content">
      <van-sidebar v-model="activeKey" class="slide">
        <van-sidebar-item
          :title="item.name"
          class="slide_item"
          v-for="(item,index) in slides"
          :key="index"
          @click="onChange(item.id)"
        />
      </van-sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SearchBtn from '../../components/SearchBtn'
import datas from '../../../datas/ft1Data.json'
export default {
  name: 'Category',
  data () {
    return {
      activeKey: 0,
      slides: []
    }
  },
  components: {
    SearchBtn
  },
  methods: {
    onChange (id) {
      this.$router.replace('/category/' + id)
    }
  },
  mounted () {
    this.slides = datas.categoryL1List
    
  }
}
</script>

<style lang='stylus' scoped>
.container
  width 100%
  height 100vh
  overflow hidden
  .head
    width 100%
    padding 10px 15px
  .content
    display flex
    .slide
      width 100px
      .slide_item
        height 40px
        display flex
        align-items center
</style>
