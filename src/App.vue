<template lang="html">
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="less">
  body {
    /*
      unable to preventdefault inside passive event listener due to target being treated as passive.
      一个禁止点击按钮默认事件引发的警告，相关文章
      https://segmentfault.com/a/1190000008512184
    */
    touch-action: none;
  }

</style>
