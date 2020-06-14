import router from '@/router'
import api from '@/api'

const state = {
  user: undefined
}

const mutations = {
  SET_USER (state, payload) {
    if (payload === null) {
      state.user = null
      return
    }
    state.user = {
      ...state.user,
      ...payload
    }
  }
}

const actions = {
  async AUTHENTICATE (context) {
    const response = await api.get('/users/authenticate')
    const user = response.data
    if (user) {
      context.commit('SET_USER', user)
    }
  },
  async SIGN_OUT (context) {
    await api.get('/users/sign-out')
    context.commit('SET_USER', null)
    router.push('/sign-in')
  }
}

export default {
  state,
  actions,
  mutations
}
