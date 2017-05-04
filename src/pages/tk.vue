<template>
  <div id="tk">
    <transition name="setBox">
      <ul class="set-box" v-if="isShowSetBox">
        <div class="sharp"></div>
        <li class="set-item" v-for="item in 5">
          <a class="inner" href="javascript:;">错题重做</a>
        </li>
      </ul>
    </transition>
    <tk-header @showSetBox="isShowSetBox=!isShowSetBox"></tk-header>
    <tk-content></tk-content>
    <div class="tk-bottom">
      <div class="btn">
        <i class="btn-icon icon-arrow-left"></i>
        <div class="btn-title">上一题</div>
      </div>
      <div class="btn">
        <i class="btn-icon icon-bookmark"></i>
        <div class="btn-title">标记</div>
      </div>
      <div class="btn">
        <i class="btn-icon icon-star-full"></i>
        <div class="btn-title">收藏</div>
      </div>
      <div class="btn">
        <i class="btn-icon icon-arrow-right"></i>
        <div class="btn-title">下一题</div>
      </div>
    </div>
    <transition name="mask">
      <div class="mask" v-if="isShowSetBox" @click="isShowSetBox=false"></div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import tkHeader from '../components/tk-header'
  import tkContent from '../components/tk-content'
  export default {
    data() {
      return {
        isShowAnswer: false,
        isShowSetBox: false
      };
    },
    components: {tkHeader, tkContent}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .set-box
    position: absolute;
    z-index: 50000
    right: 11px;
    top: 54px;
    background: #ffffff;
    padding: 0 14px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
    .sharp
      position: absolute;
      top: -6px;
      right: 5px;
      width: 12px;
      height: 12px;
      color: #ffffff;
      transform: rotate(-45deg);
      background-color: #ffffff;
      box-shadow: 2px -2px 2px 0px rgba(0, 0, 0, 0.1);
    .set-item
      line-height: 44px;
      height: 44px;
      position: relative;
      .inner
        display: block;
        text-align: center;
        white-space: nowrap;
        font-size: 16px;
        color: #333333;
        padding: 0 6px 0 40px;
        position: relative;

  .setBox-enter-active, .setBox-leave-active
    transition: all .3s ease
    transform-origin: 110% -10%;
    transform: translateY(0)

  .setBox-enter, .setBox-leave-active
    transform: translateY(-100%)


  .tk-bottom
    position: absolute;
    bottom: 0
    left: 0
    width: 100%;
    background: #fff;
    z-index: 6000;
    color: #333333;
    font-size: 12px;
    display: flex
    .btn
      flex: 1
      color: #8d8888
      text-align: center
      margin-top: 6px
      font-size: 12px
      &.active
        color: #ff3e3e
      .btn-icon
        font-size: 16px
        line-height: 1.5

  .mask
    background: #000000;
    position: absolute;
    bottom: 0
    right: 0
    opacity: 0.50;
    width: 100%;
    height: 100%;
    z-index: 20000

  .mask-enter-active, .mask-leave-active
    transition: all .5s ease
    opacity: .5

  .mask-enter, .mask-leave-active
    opacity: 0
</style>
