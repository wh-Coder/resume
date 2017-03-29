<template lang="html">
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
