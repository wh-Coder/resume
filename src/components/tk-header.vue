<template>
  <div id="tk-header">
    <a class="btn-back"></a>
    <div class="question-name">2017年保荐代表人考试《投资银行业务》题库【历年真题＋章节题库＋考前押题】</div>
    <a class="btn-set" @click="showSetBox"><i class="icon-menu"></i></a>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    },
    methods: {
      showSetBox() {
          this.$emit('showSetBox');
      }
    },
    components: {}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #tk-header
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 44px
    background: #ffffff
    z-index: 60000
    border-bottom: 1px solid #f33b3b
    .btn-back
      position: absolute
      top: 0
      left: 0
      width: 44px
      height: 44px
      &:before, &:after
        content: "";
        pointer-events: none;
        position: absolute;
      &:before
        top: 15px;
        left: 20px;
        width: 14px;
        height: 14px;
        border-left: 1px solid #333333;
        border-bottom: 1px solid #333333;
        transform: rotate(45deg);
    .question-name
      position: relative
      font-size: 18px
      color: #333333
      text-align: center
      margin: 0 44px
      height: 44px
      line-height: 44px
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
    .btn-set
      position: absolute
      top: 0
      right: 0
      width: 44px;
      height: 44px;
      text-align: center
      color: #8d8888
      line-height: 44px
      font-size: 24px

</style>
