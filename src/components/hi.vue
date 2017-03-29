<template lang="html">
  <div>
    <button @click="subtract">subtract</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Alert } from 'vux'
  export default {
    data() {
      return {};
    },
    components: {},
    methods: {
      subtract(){
        this.$store.commit('subtract');
        // 显示
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?'
        })
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
