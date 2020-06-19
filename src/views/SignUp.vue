<template>
  <div class="sign-up">
    <div class="container content">
      <form class="form box-shadow-1" @submit.prevent="onSubmit">
        <h2>Sign up</h2>
        <v-input
          v-model="email"
          placeholder="E-mail"
          :class="{ error: (errors.error && !email) || errors.email }"
        />
        <p v-if="errors.email" class="error">
          {{ errors.email }}
        </p>
        <v-input
          type="password"
          v-model="password"
          placeholder="Password"
          :class="{ error: (errors.error && !password) || errors.password }"
        />
        <v-input
          type="password"
          v-model="passwordRepeat"
          placeholder="Repeat password"
          :class="{
            error: (errors.error && !passwordRepeat) || errors.password
          }"
        />
        <p v-if="errors.password" class="error">
          {{ errors.password }}
        </p>
        <p v-if="errors.error" class="error">
          {{ errors.error }}
        </p>
        <div class="text-right">
          <v-button class="primary">Sign up</v-button>
        </div>
        <p>
          Already a member? <router-link to="/sign-in">Sign in</router-link>.
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/forms/VInput'
import VButton from '@/components/VButton'
import api from '@/api'

export default {
  name: 'sign-up',
  data () {
    return {
      email: null,
      password: null,
      passwordRepeat: null,
      errors: {}
    }
  },
  components: {
    VInput,
    VButton
  },
  methods: {
    async onSubmit () {
      this.errors = {}
      const { email, password, passwordRepeat } = this
      if (!email || !password || !passwordRepeat) {
        this.errors = { ...this.errors, error: 'All fields are required.' }
      }
      // TODO: validate e-mail
      // if (validateEmail(email)) {
      //   this.errors = { ...this.errors, email: 'E-mail is not valid.' }
      // }
      if (password !== passwordRepeat) {
        this.errors = { ...this.errors, password: 'Passwords do not match.' }
        return
      }

      try {
        const response = await api.post('/users/sign-up', {
          email,
          password,
          passwordRepeat
        })
        const user = response.data

        if (user) {
          this.$store.commit('SET_USER', user)
          this.$router.push('/')
        }
      } catch (error) {
        const code = error.response.status
        if (code === 422) {
          this.errors = {
            ...this.errors,
            email: 'E-mail is already registered.'
          }
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.sign-up {
  padding-top: 2rem;
  form {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    background: #fff;
  }
  a {
    text-decoration: none;
  }
}
</style>
