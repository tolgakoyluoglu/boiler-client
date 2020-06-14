import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () =>
        import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
      beforeEnter: protectedRoute
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () =>
        import(/* webpackChunkName: "sign-in" */ '../views/SignIn.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () =>
        import(/* webpackChunkName: "sign-up" */ '../views/SignUp.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () =>
        import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
      beforeEnter: protectedRoute
    },
    {
      path: '/verify/:token?',
      name: 'Verify',
      component: () =>
        import(/* webpackChunkName: "verify" */ '../views/Verify.vue')
    },
    {
      path: '/reset-password/:resetPasswordToken?',
      name: 'ResetPassword',
      component: () =>
        import(
          /* webpackChunkName: "reset-password" */ '../views/ResetPassword.vue'
        )
    },

    {
      path: '*',
      redirect: '/sign-in'
    }
  ]
})

async function protectedRoute (to, from, next) {
  if (store.state.auth.user === null) {
    return next({ name: 'SignIn' })
  }
  next()
}

export default router
