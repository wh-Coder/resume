<template>
  <div class="wrap" >
    <div class="box" ref="box"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import '../plugin/transform'
  export default {
    data() {
      return {};
    },
    props: {
      draggable: {type: Boolean}
    },
    mounted() {
      $(this.$refs.box).transform()
    },
    components: {},
    watch: {
      draggable: function (newvalue) {
          if(newvalue){
            $(this.$refs.box).hide();
          }else{
            $(this.$refs.box).show();
          }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background: #3BB3E0;
    border: 4px solid #2561B4;
    overflow: hidden;
    .box
      width: 100px;
      height: 100px;
      background-color: pink;
      transform: rotate(30deg);
</style>
