<template>
  <div class="double-bounce" :style='{
        width:spinnerSize,
        height:spinnerSize
    }'>
    <div class="double-bounce1" :style='{backgroundColor : spinnerColor}'></div>
    <div class="double-bounce2" :style='{backgroundColor : spinnerColor}'></div>
  </div>
</template>

<script>
//  export default {
//    computed: {
//      spinnerColor() {
//        return this.color || this.$parent.color || 'red'
//      },
//      spinnerSize() {
//        return (this.size || this.$parent.size || 10) + 'px'
//      }
//    },
//    props: {
//      color: String,
//      size: Number
//    }
//  }
import common from './common'
export default Object.assign({}, {name: 'double-bounce'}, common);
</script>

<style>
  .double-bounce {
    position: relative;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #67CF22;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1.0s;
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
    }
    50% {
      transform: scale(1.0);
    }
  }
</style>
