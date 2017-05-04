<template>
  <div id="tk-content">
    <div class="count">共<span>123</span>题目</div>
    <dl class="catalog" v-for="items in catalog">
      <dt class="catalog-title">{{items.name}}</dt>
      <dd v-for="item in items.paperList">
        <div class="catalog-title" v-if="item.classTypeID">{{item.classTypeName}}</div>
        <div class="catalog-item" v-else="item.classTypeID">{{item.paperName}}</div>
      </dd>
    </dl>
  </div>
</template>
<script type="text/ecmascript-6">
  import {tkHandle} from '../service/getData';
  export default {
    data() {
      return {
        hasFooter: false,
        catalog: []
      };
    },
    components: {},
    async mounted() {
      let response = await tkHandle(this.$route.params.questionPlanID);
      let len = response.data.data.length - 3;
      this.catalog = response.data.data.slice(0, len);
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #tk-content
    margin-top: 44px
    width: 100%;
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: auto;
    background: #f5f5f5;
    .count
      padding: 16px 0;
      text-align: center;
      font-size: 14px;
      line-height: normal;
      color: #999999;
      span
        color: #f43530;
    .catalog
      margin-bottom: 8px;
      background-color: #ffffff
      .catalog-title
        position: relative;
        color: #333333;
        padding: 10px 34px 10px 0;
        margin-left: 34px;
        border-bottom: 1px solid #ededed
        font-size: 16px
        font-weight: bold
        &:before
          content: "";
          pointer-events: none;
          position: absolute;
          top: 50%;
          left: -20px;
          width: 9px;
          height: 9px;
          border: 1px solid #bfbfbf;
          background: #bfbfbf;
          transform: translate(0%, -50%);
      .catalog-item
        color: #578ec7;
        position: relative;
        display: block;
        padding: 14px 46px 14px 0;
        margin-left: 46px;
        border-bottom: 1px solid #ededed
        font-size: 14px
        &:after
          content: "";
          pointer-events: none;
          position: absolute;
          top: 65%;
          right: 12px;
          width: 10px;
          height: 10px;
          border-right: 1px solid #D9D9D9;
          border-bottom: 1px solid #D9D9D9;
          background: transparent;
          transform: translate(0%, -50%) rotate(-45deg);
          margin-top: -7px;
</style>
