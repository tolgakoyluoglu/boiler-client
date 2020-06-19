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
  font-weight: bold;
  border-radius: 4px;
  outline: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &,
  &.md {
    padding: var(--button-padding-md);
    font-size: var(--input-font-md);
    height: var(--input-height-lg)
  }
  &.sm {
    padding: var(--button-padding-sm);
    font-size: var(--input-font-sm);
    height: var(--input-height-md)
  }
  &.lg {
    padding: var(--button-padding-lg);
    font-size: var(--input-font-lg);
    height: var(--input-height-lg)
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
    background-image: linear-gradient(
      135deg,
      var(--color-primary20),
      var(--color-primary)
    );
    box-shadow: inset 0px 1px 0px 0px var(--color-primary20);
    color: #fff;
    &:hover {
      background-image: linear-gradient(
        135deg,
        var(--color-primary20),
        var(--color-primary10)
      );
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
