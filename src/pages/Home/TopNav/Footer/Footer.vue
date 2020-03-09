<template>
  <div class="ftWrap">
    <div class="top">
      <a
        href="/downloadapp?_stat_from=web_search_google&amp;appAwakeUrl=http%3a%2f%2fm.you.163.com"
        class="downloadapp"
      >下载APP</a>
      <a
        href="https://you.163.com?_m_forcepc_=true&amp;_m_anonid_=de7f3062-c1bb-464a-9d53-10d3a63b42c7"
        class="forcepc"
      >电脑版</a>
    </div>
    <div class="bottom">
      <p>网易公司版权所有 © 1997-2020</p>
      <p>食品经营许可证：JY13301080111719</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang='stylus' scoped>
.ftWrap
  width 100%
  height 122px
  margin-top 15px
  background-color #414141
  .top
    padding-top 30px
    padding-left 80px
    a
      border 1px solid #999
      color #fff
      padding 5px 15px
      font-size 14px
      margin 0 10px
  .bottom
    margin-top 20px
    p
      text-align center
      font-size 12px
      color #999
</style>
