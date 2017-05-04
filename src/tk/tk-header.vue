<template>
  <div id="tk-header">
    <section class="back"></section>
    <section class="title">{{title}}</section>
    <section class="menu" @click="showMenu"></section>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    },
    components: {},
    props: {
        title: {type: String}
    },
    methods: {
      showMenu() {
          this.$emit('showMenu');
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #tk-header
    position: fixed
    top: 0
    height: 44px
    width: 100%
    background: #ffffff
    z-index: 10001
    &:after
      content: " ";
      position: absolute;
      left: 0
      bottom: 0
      right: 0
      border-bottom: 1px solid #f33b3b;
      color: #d9d9d9;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
    .back
      position: absolute
      top: 0
      left: 0
      width: 44px
      height: 44px
      &:before
        content: "";
        pointer-events: none;
        position: absolute;
        top: 15px;
        left: 20px;
        width: 14px;
        height: 14px;
        border-left: 1px solid #333333;
        border-bottom: 1px solid #333333;
        border-top: none;
        border-right: none;
        transform-origin: 50% 50%;
        transform: rotate(45deg);
    .title
      margin: 0 44px
      height: 44px
      font-size: 18px;
      line-height: 44px;
      font-weight: normal;
      color: #333333;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    .menu
      position: absolute
      top: 0
      right: 0
      width: 44px
      height: 44px
      &:before
        content: "";
        pointer-events: none;
        position: absolute;
        left: 10px
        top: 10px
        width: 20px
        height: 20px
        border: 1px solid #000
</style>
