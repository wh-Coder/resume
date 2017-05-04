<template>
  <div id="tk">
    <tk-mask :show="isShowMenu"></tk-mask>
    <tk-header :title="'2017年护理学（师）考试题库【历年真题＋章节题库＋模拟试题】'" @showMenu="isShowMenu = !isShowMenu"></tk-header>
    <tk-menu :show="isShowMenu"></tk-menu>
    <tk-catalog></tk-catalog>
  </div>
</template>
<script type="text/ecmascript-6">
  import tkHeader from './tk-header.vue';
  import tkMenu from './tk-menu.vue';
  import tkCatalog from './tk-catalog.vue';
  import tkMask from './tk-mask.vue';

  export default {
    data() {
      return {
        isShowMenu: false
      };
    },
    components: {tkHeader, tkMenu, tkCatalog, tkMask}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #tk
    background: #f4f5f7
    height: 100%
    width: 100%
</style>
