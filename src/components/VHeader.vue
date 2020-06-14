<template>
  <header class="v-header page-header box-shadow-1">
    <div class="container content">
      <ul>
        <li>
          <router-link to="/">SiteName</router-link>
        </li>
      </ul>
      <ul v-if="!$store.state.auth.user">
        <li>
          <router-link to="/sign-in">Sign in</router-link>
        </li>
      </ul>
      <ul v-else>
        <li>
          <router-link to="/settings" class="match">Settings</router-link>
        </li>
        <li>
          <a href="javascript:void(0)" @click="$store.dispatch('SIGN_OUT')">Sign out</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header'
}
</script>

<style lang="postcss" scoped>
.v-header {
  background: #24292e;

  .container {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    list-style: none;
    li:not(:last-child) {
      margin-right: 1rem;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    outline: none;
    &.match.router-link-active,
    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
