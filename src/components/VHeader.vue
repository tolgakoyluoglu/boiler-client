<template>
  <header class="v-header page-header box-shadow-1">
    <div class="container content">
      <ul class="items">
        <li @click="showSidebar = !showSidebar">
          <router-link to="/">SiteName</router-link>
        </li>
      </ul>
      <ul v-if="!$store.state.auth.user">
        <li>
          <router-link to="/sign-in">Sign in</router-link>
        </li>
      </ul>
      <ul class="items" v-else>
        <li>
          <router-link to="/settings" class="match">Settings</router-link>
        </li>
        <li>
          <a href="javascript:void(0)" @click="$store.dispatch('SIGN_OUT')">Sign out</a>
        </li>
      </ul>
    </div>
    <div class="sidebar">
      <ul :class="{ show: showSidebar }">
        <li
          key="close"
          v-show="showSidebar"
          @click="showSidebar = !showSidebar">
          Close
        </li>
        <li key="1" v-show="showSidebar" @click="showSidebar = !showSidebar">
          Home
        </li>
        <li key="2" v-show="showSidebar" @click="showSidebar = !showSidebar">
          About
        </li>
        <li key="3" v-show="showSidebar" @click="showSidebar = !showSidebar">
          Settings
        </li>
        <li class="empty" key="sidebar" v-show="showSidebar"></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      showSidebar: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.v-header {
  background: #24292e;

  .container {
    display: flex;
    justify-content: space-between;
  }

  .items {
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
.sidebar {
  ul {
    width: 0;
    position: absolute;
    top: 0;
    left: -10px;
    padding: 0;
    margin: 0;
    height: 100vh;
    list-style: none;
    &.show {
      width: 180px;
      transition: all 0.3s ease-in-out;
    }
    li {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 59px;
      border-bottom: 1px solid #555;
      background-color: #24292e;
      color: #fff;
    }
    li:last-child {
      height: calc(100% - 310px);
      border-bottom: none;
      cursor: default;
    }
  }
}
</style>
