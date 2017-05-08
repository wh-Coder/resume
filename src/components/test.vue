<template lang="html">
  <div>
    <h1>test -> {{count}}</h1>
    <input type="button" value="increase" @click="increase"/>
    <input type="button" value="decrease" @click="decrease"/>
    <drag :draggable="isdrag"></drag>
    <input type="button" value="drag" @click="ondrag"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations, mapGetters} from 'vuex';
  import drag from './drag';
  export default {
    data() {
      return {
        isdrag: false
      };
    },
    components: {drag},
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
      },
      ondrag() {
        console.log('123');
        this.isdrag = !this.isdrag
      }
    },
    computed: {
      ...mapGetters([
        'count'
      ])
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
