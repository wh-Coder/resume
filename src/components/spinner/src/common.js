/**
 * Created by Administrator on 2017-04-05.
 */
export default {
  computed: {
    spinnerColor() {
      return this.color || this.$parent.color || 'red'
    },
    spinnerSize() {
      return (this.size || this.$parent.size || 10) + 'px'
    }
  },
  props: {
    color: String,
    size: Number
  }
}
