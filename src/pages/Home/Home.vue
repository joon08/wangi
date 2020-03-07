<template>
  <div>
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

<style lang='stylus' scoped></style>
