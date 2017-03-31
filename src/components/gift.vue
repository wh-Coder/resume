<template lang="html">
  <div class="vue-gift">
    <ul class="tab">
      <li class="tab-receive" @click="onToggleReceive">
        <span class="icon" :class="isShowReceive?'icon-circle-up':'icon-circle-down'"></span>已收礼物(12)
      </li>
      <li class="tab-present" @click="onTogglePresent">
        <span class="icon icon-gift"></span>
      </li>
    </ul>
    <transition name="present">
      <div class="present" v-if="isShowPresent1" v-show="isShowPresent2">
        <scroller lock-y :scrollbar-x=false>
          <div class="present-title">
            <span class="title-item" v-for="(item,index) in 10">我是item{{index}}</span>
          </div>
        </scroller>
        <swiper class="present-content" height="100%" dots-position="center">
          <swiper-item>
            <div class="test1"></div>
          </swiper-item>
          <swiper-item>
            <div class="test2"></div>
          </swiper-item>
          <swiper-item>
            <div class="test3"></div>
          </swiper-item>
        </swiper>
        <ul class="present-footer"></ul>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Swiper, SwiperItem, Scroller} from 'vux'
  export default {
    data() {
      return {
        isShowReceive: true,
        isShowPresent1: false,
        isShowPresent2: true
      };
    },
    components: {Swiper, SwiperItem, Scroller},
    methods: {
      onToggleReceive(){
        this.isShowReceive = !this.isShowReceive;
      },
      onTogglePresent(){
        if (!this.isShowPresent1) {
          this.isShowPresent1 = !this.isShowPresent1;
        } else {
          this.isShowPresent2 = !this.isShowPresent2;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vue-gift
    .tab
      height: 40px;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      position: fixed;
      left: 0
      bottom: 0
      z-index: 2000;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-top: 1px solid #ff7c7c;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
      .tab-receive
        float: left;
        padding: 8px 16px;
        height: 24px;
        font-size: 14px;
        color: #333333;
        .icon
          line-height: 24px
          color: #ff605b
          font-size: 16px
          margin-right: 4px
      .tab-present
        float: right;
        display: block;
        width: 58px;
        height: 38px;
        background-color: #ff605b
        margin: -4px 16px 0 0;
        text-align: center
        border-radius: 4px;
        .icon
          color: white
          line-height: 36px
          font-size: 22px
    .present
      position: fixed
      left: 0
      width: 100%
      bottom: 0
      background: mediumvioletred
      z-index: 1900;
      .present-title
        display:inline-block
        height: 40px;
        line-height: 40px;
        padding: 0 8px;
        white-space: nowrap;
        background darkolivegreen
        .title-item
          display:inline-block
          margin: 4px 8px
          background: #ccc
      .present-content
        background: blueviolet;
        padding: 10px 0;
        height: 255px;
        .test1
          height: 100%
          background: #ccc
        .test2
          height: 100%
          background: yellow
        .test3
          height: 100%
          background: #999
      .present-footer
        background: white
        left: 0
        right: 0
        bottom: 0
        padding: 2px 16px;
        position: relative;
        height: 36px;
    .present-enter-active, .present-leave-active
      transition: all .5s ease
      transform: translate3d(0, 0, 0)
    .present-enter, .present-leave-active
      transform: translate3d(0, 100%, 0)
</style>
