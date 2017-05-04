<template>
  <transition name="mask">
    <div class="mask" v-if="show"></div>
  </transition>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    },
    props: {
      show: {type:Boolean}
    },
    components: {}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #000000
    opacity: .4
    z-index: 1000
  .mask-enter-active, .mask-leave-active
    transition: all .5s ease
    opacity: .4
  .mask-enter, .mask-leave-active
    opacity: 0
</style>
