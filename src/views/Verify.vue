<template>
  <div class="verify">
    <div class="container content text-center">
      <div v-if="loading">
        <h1>Verifying token</h1>
      </div>

      <div v-if="error">
        <h1>{{ error.message }}</h1>
      </div>
      <div v-else>
        <h1>Thanks for verifying!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'verify',
  data () {
    return {
      loading: true,
      error: null
    }
  },
  created () {
    const { token } = this.$route.params
    if (token) {
      this.verifyToken(token)
    }
  },
  methods: {
    async verifyToken (verificationToken) {
      try {
        await api.get(`/users/verify-email?token=${verificationToken}`)
        if (this.$store.state.user) {
          // TODO: get this result from api
          this.$store.commit('SET_USER', { emailVerified: 1 })
        }
        this.loading = false
      } catch (error) {
        this.loading = false

        const code = error.response.status
        if (code === 401) {
          this.error = {
            message: 'Invalid verification link.'
          }
        }
      }
    }
  }
}
</script>
