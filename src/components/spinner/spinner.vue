<template>
  <component :is="spinner"></component>
</template>

<script>
  const SPINNERS = [
    'snake',         //第一段
    'double-bounce'
  ]
  const parseSpinner = function (index) {
    if ({}.toString.call(index) === '[object Number]') {
      if (index >= SPINNERS.length) {
        console.warn(`'${index}' spinner not found, use the default spinner.`);
        index = 0   //第二段
      }
      return SPINNERS[index]
    }
    if (SPINNERS.indexOf(index) === -1) {
      console.warn(`'${index}' spinner not found, use the default spinner.`);
      index = SPINNERS[0]  //第三段
    }
    return index
  }

  export default {
    name: 'zk-spinner',
    computed: {
      spinner () {
        return `spinner-${parseSpinner(this.type)}`
      }    //第四段
    },
    components: {   //第五段
      SpinnerSnake: require('./src/snake.vue'),
      SpinnerDoubleBounce: require('./src/double-bounce.vue')
    },
    props: {
      type: {
        default: 0    //第六段
      },
      size: {
        type: Number,
        default: .6
      },
      color: {
        type: String,
        default: 'red'
      }
    }
  }
</script>
