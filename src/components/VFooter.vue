<template>
  <footer class="v-footer page-footer">
    <div class="container content">
      <ul>
        <li></li>
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
  .container {
    display: flex;
    justify-content: space-between;
  }
  ul {
    list-style: none;
    li:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
  a {
    color: #333;
    text-decoration: none;
    outline: none;
    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
