<template>
  <input-base class="v-input">
    <input
      :type="type"
      v-model="model"
      :placeholder="placeholder"
      @blur="$emit('blur')"
    />
  </input-base>
</template>

<script>
import InputBase from '@/components/forms/InputBase'
import InputMixin from '@/components/forms/InputMixin'

export default {
  name: 'v-input',
  mixins: [InputMixin],
  components: { InputBase }
}
</script>
