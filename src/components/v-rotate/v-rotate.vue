<template>
  <div class="v-rotate">
    <div class="rotate" ref="rotate" @touchstart="onTouchstart" @touchmove="onTouchMove" @touchend="onTouchEnd">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    },
    components: {},
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let rotate = this.$refs.rotate;
      },
      onTouchstart(e) {
        console.log('1');

      },
      onTouchMove(e) {
        console.log('2');
      },
      onTouchEnd() {

      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .v-rotate
    position: relative
    width: 100%
    height: 100%
    .rotate
      position: absolute
      display: inline-block
      left: 10px
      top: 0
</style>
