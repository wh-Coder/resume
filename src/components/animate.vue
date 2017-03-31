<template lang="html">
  <div class="vue-animate">
    <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight" appear
                @after-leave="onAfterLeave">
      <div class="animated box" v-show="demoA"></div>
    </transition>
    <input type="button" value="animate" @click="demoA=!demoA"/>
    <hr/>
    <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
      <div class="box">{{touchWord}}</div>
    </v-touch>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        demoA: true,
        touchWord: '测试：左/右滑'
      };
    },
    components: {},
    methods: {
      onAfterLeave(){
        alert('animate leave end');
      },
      onSwipeLeft(){
        this.touchWord = 'left'
      },
      onSwipeRight(){
        this.touchWord = 'right'
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vue-animate
    .box
      margin: 0 auto
      width: 200px
      height: 100px
      background: red
</style>
