<template lang="html">
  <div class="vue-animate">
    <input type="button" value="animate" @click="demoA=!demoA"/>
    <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight" appear>
      <div class="animated box" v-show="demoA"></div>
    </transition>
    <hr/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        demoA: true
      };
    },
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vue-animate
    .box
      margin: 0 auto
      width: 100px
      height: 100px
      background: red
</style>
