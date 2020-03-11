<template>
  <div>Personal</div>
</template>

<script>
export default {
  name: 'Personal',
  mounted () {
    if(!this.user){
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang='stylus' scoped></style>
