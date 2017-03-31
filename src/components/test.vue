<template lang="html">
  <div>
    <h1>test -> {{count}}</h1>
    <input type="button" value="increase" @click="increase"/>
    <input type="button" value="decrease" @click="decrease"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    data() {
      return {};
    },
    components: {},
    methods: {
      ...mapMutations([
        'increase'
      ]),
      decrease(){
        this.$store.commit('decrease');
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?'
        })
      }
    },
    computed: {
      ...mapGetters([
        'count'
      ])
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
