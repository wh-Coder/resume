<template lang="html">
  <div>
    <scroller height="-48" lock-x>
      <div>
        <h1 v-for="(item,index) in 50">User{{index}}</h1>
        <img width="100px" height="100px" src="http://statics.w3cschool.cn/images/w3c/header-logo.png" alt=""/>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Scroller} from 'vux'
  export default {
    data() {
      return {};
    },
    components: {Scroller}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
