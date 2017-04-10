<template lang="html">
  <div>
    <scroller height="-48" lock-x ref="scroller">
      <div>
        <h1 v-for="(item,index) in list">{{index}} => {{item.name}}
          <hr/>
        </h1>
        <button @click="openTop()">top</button>
        <button @click="openCenter()">center</button>
        <button @click="openBottom()">bottom</button>
        <button @click="openLoading()">loading</button>
        <hr/>
        <img width="100px" height="100px" src="http://statics.w3cschool.cn/images/w3c/header-logo.png" alt=""/>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Scroller} from 'vux'
  import {userAccount} from '@/service/getData'
  export default {
    data() {
      return {
        list: [],
        userid: 230058
      };
    },
    components: {Scroller},
    created() {
      if (!this.list.length) {
        userAccount(this.userid)
          .then((response) => {
            this.list = response.data.book.item
            this.$nextTick(() => {
              this.$refs.scroller.reset()
            })
          })
      }
    },
    methods: {
      openTop(){
        this.$toast.top('top');
      },
      openCenter(){
        this.$toast.center('center');
      },
      openBottom(){
        this.$toast('bottom');  // or this.$toast.bottom('bottom');
      },
      openLoading(){
        this.$loading('loading...');
        let self = this;
        setTimeout(function () {
          self.closeLoading()
        }, 2000)
      },
      closeLoading(){
        this.$loading.close();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
