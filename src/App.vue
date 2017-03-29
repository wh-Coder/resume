<template lang="html">
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{myCount}}</div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    data(){
      return {
//        myCount: 0
      }
    },
    computed: {
      ...mapGetters([
        'myCount'
      ])
//      myCount(){
//        return this.$store.getters.myCount;
//      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
