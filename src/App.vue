<template>
  <div class="warp">
    <router-view />
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang='stylus'>
html, body
  width 100%
  height 100%
  margin 0
  .warp
    width 100%
    height 100%
</style>
