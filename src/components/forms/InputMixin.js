export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      model: null
    }
  },
  created () {
    if (this.value) {
      this.model = this.value
    }
  },
  watch: {
    value (n) {
      if (n !== this.model) {
        this.model = n
      }
    },
    model (n) {
      if (n !== this.value) {
        this.$emit('input', n)
      }
    }
  }
}
