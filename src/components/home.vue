<template lang="html">
  <div>
    <h1>home -> {{count+1}}</h1>
    <hr/>
    <div @click="onGotoGiftPage">detail</div>
    <hr/>
    <router-link to="/swiper">swpier</router-link>
    <hr/>
    <router-link to="/geometry">geometry</router-link>
    <hr/>
    <router-link to="/animate">animate</router-link>
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
