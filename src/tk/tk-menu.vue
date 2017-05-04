<template>
  <transition name="tk-menu">
    <div id="tk-menu" v-if="show">

    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    },
    props: {
      show: {type: Boolean}
    },
    components: {}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #tk-menu
    position: fixed
    top: 50px
    right: 10px
    background: #ffffff;
    padding: 0 14px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
    width: 40px
    height: 100px
    z-index: 10000
    &:before
      content: "";
      pointer-events: none;
      position: absolute;
      top: -6px;
      right: 5px;
      width: 12px;
      height: 12px;
      color: #ffffff;
      transform: rotate(-45deg);
      background-color: #ffffff;
      box-shadow: 2px -2px 2px 0px rgba(0, 0, 0, 0.1);
  .tk-menu-enter-active, .tk-menu-leave-active
    transition: all .3s ease
    transform-origin: 110% -10%;
    transform: translateY(0)
  .tk-menu-enter, .tk-menu-leave-active
    transform: translateY(-100%)
</style>
