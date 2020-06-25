<template>
  <footer class="v-footer page-footer">
    <div class="container content">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <ul>
        <li>
          Copyright Store
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<style lang="postcss" scoped>
.v-footer {
  background: #24292e;
  .container {
    display: flex;
    justify-content: space-between;
  }
  ul {
    list-style: none;
    color: #fff;
    li:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    outline: none;
    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
