<template lang="html">
  <div>
    <h1>home -> {{count | rmb}}</h1>
    <hr/>
    <div @click="onGotoGiftPage">detail</div>
    <hr/>
    <router-link to="/swiper">swpier</router-link>
    <hr/>
    <router-link to="/tk/3088">tttttkkkkk</router-link>
    <hr/>
    <router-link to="/geometry">geometry</router-link>
    <hr/>
    <router-link to="/animate">animate</router-link>
    <hr/>
    <snake :color="'#ccc'"></snake>
    <hr/>
    <br/>
    <double-bounce></double-bounce>
    <hr/>
    <!--<spinner :type='1' color='blue'></spinner>-->
    <spinner :type="'snake'" color="#000" :size="10"></spinner>
  </div>
</template>

<script type="text/ecmascript-6">
  import snake from './spinner/src/snake.vue'
  import doubleBounce from './spinner/src/double-bounce.vue'
  import Spinner from './spinner/spinner.vue'

  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {};
    },
    components: {snake, doubleBounce, Spinner},
    mounted(){
      this.$who.get('Vue Instance')
      this.who('Global Vue')
      console.log(this.$who)
    },
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    methods: {
      onGotoGiftPage(){
        this.$router.push('/detail')
      }
    },
    filters: {
      rmb(value){
        return '￥' + value.toFixed(2);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
