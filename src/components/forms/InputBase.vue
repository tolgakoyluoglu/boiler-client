<template>
  <div class="input-base">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'input-base',
  props: {}
}
</script>

<style lang="postcss" scoped>
.input-base {
  input,
  select,
  textarea,
  label {
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  input,
  select,
  textarea {
    line-height: 1;
    background: #fff;
    border: 1px solid #ddd;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &,
  &.md {
    input,
    select {
      height: var(--input-height-md);
    }
    input,
    select,
    textarea {
      padding: var(--input-padding-md);
      font-size: var(--input-font-md);
    }
  }
  &.sm {
    input,
    select {
      height: var(--input-height-sm);
    }
    input,
    select,
    textarea {
      padding: var(--input-padding-sm);
      font-size: var(--input-font-sm);
    }
  }
  &.lg {
    input,
    select {
      height: var(--input-height-lg);
    }
    input,
    select,
    textarea {
      padding: var(--input-padding-lg);
      font-size: var(--input-font-lg);
    }
  }
  &.xl {
    input,
    select {
      height: var(--input-height-xl);
    }
    input,
    select,
    textarea {
      padding: var(--input-padding-xl);
      font-size: var(--input-font-xl);
    }
  }

  &,
  &.default {
    input,
    select,
    textarea {
      border-color: var(--color-default-hover);
    }
  }
  &.primary {
    input,
    select,
    textarea {
      border-color: var(--color-primary);
    }
  }
  &.success {
    input,
    select,
    textarea {
      border-color: var(--color-success);
    }
  }
  &.warning {
    input,
    select,
    textarea {
      border-color: var(--color-warning);
    }
  }
  &.error {
    input,
    select,
    textarea {
      border-color: var(--color-error);
    }
  }
}
</style>
