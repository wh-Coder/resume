<template lang="html">
  <div>
    <h1>test -> {{count}}</h1>
    <input type="button" value="increase" @click="increase"/>
    <input type="button" value="decrease" @click="decrease"/>
    <div class="wrap" >
      <div class="box" ref="box"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations, mapGetters} from 'vuex';
//  import $ from 'zepto';
  import '../plugin/transform'

  export default {
    data() {
      return {};
    },
    components: {},
    mounted() {
        $(this.$refs.box).transform()
    },
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
