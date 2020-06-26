<template>
  <header class="v-header page-header box-shadow-1">
    <div class="container content">
      <ul class="items">
        <li>
          <i v-if="this.$store.state.auth.user" class="fas fa-bars" @click="toggleSidebar" />
          <router-link to="/" class="title">Sitename</router-link>
        </li>
      </ul>
      <ul class="items" v-if="!$store.state.auth.user">
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
          @click="toggleSidebar">
          <i class="fas fa-times" />
        </li>
        <li key="1" v-show="showSidebar">
          <router-link to="/">Home</router-link>
        </li>
        <li key="2" v-show="showSidebar">
          <router-link to="/settings" class="match">Settings</router-link>
        </li>
        <li key="3" v-show="showSidebar">
          <router-link to="/about" class="match">About</router-link>
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
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang="postcss" scoped>
@import url('https://kit.fontawesome.com/f43ec197c1.js');
.v-header {
  background: #24292e;
  padding: 0 30px 0 30px;
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
    i {
      color: #fff;
      margin-right: 10px;
      font-size: 20px;
      cursor: pointer;
    }
    .title {
      font-size: 20px;
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
    width: 100px;
    position: absolute;
    left: -10px;
    padding: 0;
    margin: 0;
    height: 85vh;
    list-style: none;
    background-color: #fff;
    transform: translate3d(0, 0, 0);
    &.show {
      z-index: 999;
      width: 280px;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 22px rgba(0, 0, 0, 0.24)
    }
    li {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 59px;
      background-color: #fff;
      color: #24292e;
      font-size: 24px;
      a {
        color: #24292e;
            &.match.router-link-active,
    &.router-link-exact-active {
      font-weight: bold;
    }
      }
    }
    li:last-child {
      height: calc(100% - 310px);
      border-bottom: none;
      cursor: default;
    }
  }
}
</style>
