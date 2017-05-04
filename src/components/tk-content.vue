<template>
  <div id="tk-content">
    <div class="content">
      <div class="question">
        <div class="title">
          <span class="number">1</span>
          下列关于持续督导期间的说法，错误的是（　　）。
        </div>
        <ul class="option">
          <li class="select" v-for="item in 4">
            <span class="btn"></span>A．主板上市公司发行可转换公司债券的，持续督导的期间为证券上市当年剩余时间及其后1个完整会计年度
          </li>
        </ul>
      </div>
      <div class="result">
        <div class="btn-show-answer" @click="isShowAnswer=true">
          <div class="inner">查看答案</div>
        </div>
        <div class="result-area" v-if="isShowAnswer">
          <div class="answer-info">
            <div class="paper-info">
              <div class="tag">【答案】</div>
              <div>C</div>
            </div>
            <div class="paper-info">
              <div class="tag">【考点】</div>
              <div>地方政府专项债券发行规模</div>
            </div>
            <div class="paper-info">
              <div class="tag">【解析】</div>
              <div>《地方政府专项债券发行管理暂行办法》（财库[2015]83号）第5条规定，专项债券期限为1年、2年、3年、5年、7年和10年，由各地综合考虑项目建设、运营、回收周期和债券市场状况等合理确定，但
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    },
    components: {}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #tk-content
    position: absolute;
    top: 44px;
    left: 0
    height: calc(100vh - 92px)
    width: 100%
    font-size: 16px
    line-height: 1.5
    overflow-x: hidden
    overflow-y: auto
    background: #f5f5f5
    .content
      overflow-y: auto
      padding: 12px 0 60px 0
      box-sizing: border-box
      .question
        .title
          padding: 0 16px 10px 48px;
          line-height: 1.5;
          position: relative;
          text-align: justify;
          min-height: 37px;
          .number
            background-color: pink
            position: absolute
            left: 16px
            top: 0
            color: #ffffff;
            margin-right: 5px;
            padding: 0 0.4em 0 4px;
            border-radius: 2px;
            min-width: 16px;
            text-align: center;
        .option
          .select
            position: relative;
            padding: 10px 28px 10px 48px;
            cursor: pointer;
            line-height: 1.5;
            text-indent: -32px;
            .btn
              display: inline-block;
              width: 20px;
              height: 20px;
              border: 1px solid #ccc
              border-radius: 50%
              vertical-align: middle;
              margin-right: 12px;
      .result
        position: relative
        padding-bottom: 20px
        .btn-show-answer
          position: relative
          height: 40px
          .inner
            position: absolute;
            bottom: -15px;
            left: 50%;
            margin-left: -50px;
            width: 100px;
            height: 30px;
            line-height: 30px;
            border-radius: 40px;
            font-size: 16px;
            color: #ffffff;
            background: #ff5c5c;
            text-align: center;
        .result-area
          border: 1px solid #e5e5e5;
          margin: 0 16px;
          border-radius: 4px;
          background: #ffffff;
          padding: 30px 15px 15px 15px;
          .answer-info
            .paper-info
              position: relative;
              padding-bottom: 20px;
              overflow: hidden;
              .tag
                float: left
                color: #007874;

</style>
