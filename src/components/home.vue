<template lang="html">
  <div>
    <h1>home -> {{count+1}}</h1>
    <hr/>
    <div @click="onGotoGiftPage">点我跳转 => 详情页</div>
    <hr/>
    <router-link to="/swiper">swpier</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {};
    },
    components: {},
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    methods: {
      onGotoGiftPage(){
        this.$router.push('/detail')
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
