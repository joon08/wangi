<template>
  <div class="deserve">
    <div class="head">
      <router-link replace to="/home">
        <van-icon name="wap-home-o" />
      </router-link>
      <span>值得买</span>
      <router-link to="/search" class="searchIcon">
        <van-icon name="search" />
      </router-link>
      <router-link replace to="/shoppingcard">
        <van-icon name="shopping-cart-o" />
      </router-link>
    </div>
    <div class="content">
      <div class="content_swiper">
        <div class="title">
          <img src="./img/2.png" alt />
          <span>严选好物 用心生活</span>
        </div>
        <div class="swiper_wrap">
          <van-swipe class="my-swipe" indicator-color="white" :width="87.75" :loop="false">
            <van-swipe-item class="item" v-for="(item,index) in datas" :key="index">
              <a :href="item.arr[0].columnUrl" class="item top">
                <img :src="item.arr[0].picUrl" class="topPic" />
                <p class="mainText">{{item.arr[0].mainTitle}}</p>
                <span class="descText">{{item.arr[0].viceTitle}}</span>
              </a>
              <a :href="item.arr[1].columnUrl" class="item bottom">
                <img :src="item.arr[1].picUrl" class="topPic" />
                <p class="mainText">{{item.arr[1].mainTitle}}</p>
                <span class="descText">{{item.arr[1].viceTitle}}</span>
              </a>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="content_list"></div>
    </div>
  </div>
</template>

<script>
import datas from '../../../datas/navWap.json'
export default {
  name: 'Deserve',
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    this.datas = datas.navList
  }
}
</script>

<style lang='stylus' scoped>
.deserve
  width 100%
  height 100%
  background-color #EEEEEE
  .head
    width 100%
    height 50px
    font-size 26px
    display flex
    align-items center
    border-bottom 1px solid #000
    padding 0 15px
    span
      width 80%
      text-align center
      font-size 18px
      margin-left 20px
    .searchIcon
      margin-right 10px
  .content
    width 100%
    .content_swiper
      width 100%
      height 340px
      background url('./img/1.png') no-repeat
      background-size 100% 260px
      padding 30px 10px 0
      .title
        width 100%
        margin-bottom 10px
        img
          width 65px
          height 34px
          vertical-align middle
        span
          color #fff
          font-size 14px
          margin-left 4px
          vertical-align middle
      .swiper_wrap
        width 100%
        background-color #fff
        border-radius 8px
        .my-swipe
          width 100%
          .item
            display flex
            flex-direction column
            align-items center
            margin 10px 0
            img
              width 60px
              height 60px
            .mainText
              font-size 14px
              font-weight 700
            .descText
              font-size 10px
              font-weight 200
            .top
              display flex
              flex-direction column
              align-items center
            .bottom
              display flex
              flex-direction column
              align-items center
</style>
