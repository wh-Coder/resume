<template lang="html">
  <div class="vue-tabs">
    <router-view></router-view>
    <div class="tabs">
      <router-link class="tab" v-for="tab in tabs" :key="tab.id" :to="tab.path">
        <div class="tab-icon" :class="tab.icon"></div>
        <div class="tab-title">{{tab.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tabs: [
          {path: '/tabs/home', title: '首页', icon: 'icon-home3'},
          {path: '/tabs/test1', title: '电子书', icon: 'icon-books'},
          {path: '/tabs/test2', title: '我要出书', icon: 'icon-book'},
          {path: '/tabs/rotate', title: '发现', icon: 'icon-sphere'},
          {path: '/tabs/user', title: '我', icon: 'icon-user'},
        ]
      };
    },
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vue-tabs
    .tabs
      background: #f5f5f5
      height: 48px
      border: 0
      position: fixed
      left: 0
      bottom: 0
      width: 100%
      z-index: 1000
      display: flex
      .tab
        flex: 1
        color: #8d8888
        text-align: center
        margin-top: 6px
        font-size: 12px
        &.active
          color: #ff3e3e
        .tab-icon
          font-size: 20px
          margin-bottom: 2px
</style>
