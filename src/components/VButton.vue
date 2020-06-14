<template>
  <button class="v-button" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button'
}
</script>

<style lang="postcss">
.v-button {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  border: 1px solid #ddd;
  line-height: 1;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &,
  &.md {
    padding: var(--button-padding-md);
    font-size: var(--input-font-md);
  }
  &.sm {
    padding: var(--button-padding-sm);
    font-size: var(--input-font-sm);
  }
  &.lg {
    padding: var(--button-padding-lg);
    font-size: var(--input-font-lg);
  }

  &,
  &.default {
    border-color: var(--color-default);
    background: var(--color-default);
    color: #444;
    &:hover {
      background: var(--color-default-hover);
    }
  }
  &.primary {
    border-color: var(--color-primary);
    background: var(--color-primary);
    color: #fff;
    &:hover {
      background: var(--color-primary-hover);
    }
  }
  &.success {
    border-color: var(--color-success);
    background: var(--color-success);
    color: #fff;
    &:hover {
      background: var(--color-success-hover);
    }
  }
  &.warning {
    border-color: var(--color-warning);
    background: var(--color-warning);
    color: #444;
    &:hover {
      background: var(--color-warning-hover);
    }
  }
  &.error {
    border-color: var(--color-error);
    background: var(--color-error);
    color: #fff;
    &:hover {
      background: var(--color-error-hover);
    }
  }
}
</style>
