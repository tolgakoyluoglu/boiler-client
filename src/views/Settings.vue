<template>
  <div class="settings">
    <div class="container content">
      <form class="card box-shadow-1" @submit.prevent="onSubmitEmail">
        <h3>Change e-mail</h3>
        <div v-if="!$store.state.auth.user.emailVerified" style="margin-bottom: 1rem;">
          <p>You haven't verified your email. Please check your inbox.</p>
          <div class="text-right">
            <v-button @click.prevent="requestEmailVerification">Send a new link</v-button>
          </div>
        </div>
        <v-input
          v-model="email"
          placeholder="E-mail"
        />
        <v-input
          type="password"
          v-model="passwordEmail"
          placeholder="Password"
        />
        <div class="text-right">
          <v-button>Save</v-button>
        </div>
      </form>

      <form class="card box-shadow-1" @submit.prevent="onSubmitPassword">
        <h3>Change password</h3>
        <v-input
          type="password"
          v-model="passwordPassword"
          placeholder="Password"
        />
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
          <v-button>Save</v-button>
        </div>
      </form>
      <div class="card box-shadow-1">
        <h3>Delete account</h3>
        <p>Delete my account.</p>
        <div class="text-right">
          <v-button>Delete</v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/forms/VInput'
import VButton from '@/components/VButton'
import api from '@/api'

export default {
  name: 'settings',
  data () {
    return {
      // change e-mail
      email: null,
      passwordEmail: null,
      // change password
      passwordPassword: null,
      newPassword: null,
      newPasswordRepeat: null
    }
  },
  components: {
    VInput,
    VButton
  },
  created () {
    this.initForms()
  },
  methods: {
    initForms () {
      const { user } = this.$store.state.auth

      if (user.email) this.email = user.email
    },
    onSubmitEmail () {
      const { email, passwordEmail } = this
      if (!email || !passwordEmail) return

      api
        .put('/users/update-email', { email, password: passwordEmail })
        .then(response => {
          this.$store.commit('SET_USER', response.data)
        })
        .catch(error => error)
    },
    onSubmitPassword () {
      const { passwordPassword, newPassword, newPasswordRepeat } = this
      if (!passwordPassword || !newPassword || !newPasswordRepeat) return

      api
        .put('/users/update-password', { password: passwordPassword, newPassword, newPasswordRepeat })
        .then(response => {
          this.passwordPassword = null
          this.newPassword = null
          this.newPasswordRepeat = null
          // TODO: Feedback
        })
        .catch(error => error)
    },
    requestEmailVerification () {
      api
        .get('/users/request-verify-email')
        .then(response => {
          // TODO: Feedback
        })
        .catch(error => error)
    }
  }
}
</script>

<style lang="postcss" scoped>
.settings {
  .card {
    display: block;
    margin: 0 auto 1rem auto;
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    background: #fff;
  }
  form {
  }
  a {
    text-decoration: none;
  }
}
</style>
