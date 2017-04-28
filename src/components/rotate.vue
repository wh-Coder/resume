<template>
  <div id="roate">
    <div class="box">
      <v-rotate></v-rotate>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import vRotate from "./v-rotate/v-rotate"
  export default {
    data() {
      return {};
    },
    components: {vRotate}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .box
    width: 300px
    height: 400px
    background: #eee
    margin: 40px auto
    border: 4px solid #ccc
</style>
