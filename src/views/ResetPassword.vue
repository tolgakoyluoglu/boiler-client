<template>
  <div class="reset-password">
    <div class="container content">
      <form
        v-if="resetPasswordToken"
        class="form card box-shadow-1"
        @submit.prevent="onSubmitPassword"
      >
        <h2>Reset password</h2>
        <p>Choose a new password.</p>
        <v-input
          type="password"
          v-model="newPassword"
          placeholder="New password"
        />
        <v-input
          type="password"
          v-model="newPasswordRepeat"
          placeholder="Repeat new password"
        />
        <div class="text-right">
          <v-button>Reset</v-button>
        </div>
      </form>

      <form
        v-else-if="!resetPasswordToken && !requested"
        class="form card box-shadow-1"
        @submit.prevent="onSubmit"
      >
        <h2>Forgot password?</h2>
        <p>Enter your e-mail to recover your account.</p>
        <v-input
          v-model="emailOrPhone"
          placeholder="E-mail"
        />
        <div class="text-right">
          <v-button>Reset</v-button>
        </div>
        <p><router-link to="/sign-in">Back to sign in</router-link>.</p>
      </form>

      <div v-else class="card">
        <h2>Password reset.</h2>
        <p>We have sent an e-mail with instructions to <strong>{{ emailOrPhone }}</strong>.</p>
        <p>Please check your inbox to continue.</p>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/forms/VInput'
import VButton from '@/components/VButton'
import api from '@/api'

export default {
  name: 'reset-password',
  data () {
    return {
      emailOrPhone: null,
      newPassword: null,
      newPasswordRepeat: null,
      requested: false
    }
  },
  components: {
    VInput,
    VButton
  },
  computed: {
    resetPasswordToken () {
      return this.$route.params.resetPasswordToken
    }
  },
  methods: {
    async onSubmit () {
      const { emailOrPhone } = this
      if (!emailOrPhone) return
      try {
        const { emailOrPhone } = this
        await api.post('/users/request-reset-password', { emailOrPhone })
        this.requested = true
      } catch (error) {
      }
    },
    async onSubmitPassword () {
      const { newPassword, newPasswordRepeat } = this
      if (!newPassword || !newPasswordRepeat) return
      try {
        const { resetPasswordToken, newPassword, newPasswordRepeat } = this
        const response = await api.post('/users/reset-password', { resetPasswordToken, newPassword, newPasswordRepeat })
        const user = response.data
        this.$store.commit('SET_USER', user)
        this.$router.push('/settings')
      } catch (error) {
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.reset-password {
  .card {
    display: block;
    width: 100%;
    max-width: 409px;
    margin: 0 auto;
  }
  form {
    padding: 1rem;
    background: #fff;

    & > :last-child {
      margin-bottom: 0;
    }

    input {
      display: inline-block;
      vertical-align: top;
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
