<template>
  <div id="app">
    <v-header />
    <div class="page-body">
      <router-view />
    </div>
    <v-footer />
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

export default {
  name: 'app',
  components: {
    VHeader,
    VFooter
  },
  created () {
    if (this.$store.state.auth.user === undefined) {
      this.$store.dispatch('AUTHENTICATE')
    }
  }
}
</script>
<style scoped></style>
