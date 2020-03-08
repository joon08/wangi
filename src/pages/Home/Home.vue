<template>
  <div class="home">
    <Header />
    <TopNav />
  </div>
</template>

<script>
import Header from './Header/Header'
import TopNav from './TopNav/TopNav'
export default {
  name: 'Home',
  components: {
    Header,
    TopNav
  }
}
</script>

<style lang='stylus' scoped>
.home
  padding-bottom 75px
  background-color rgb(238,238,238)
</style>
