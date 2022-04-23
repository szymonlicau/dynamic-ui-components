<template>
  <div
    :class="[
      'grid-column',
      {
        'grid-column--sized': !!size || !!sizeTablet || !!sizeDesktop,
        'grid-column--sized-tablet': !!sizeTablet,
        'grid-column--sized-desktop': !!sizeDesktop,

        'grid-column--offseted': offset > 0 || offsetTablet > 0 || offsetDesktop > 0,
        'grid-column--offseted-tablet': offsetTablet > 0,
        'grid-column--offseted-desktop': offsetDesktop > 0
      }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number;
  sizeTablet?: number;
  sizeDesktop?: number;
  offset?: number;
  offsetTablet?: number;
  offsetDesktop?: number;
}>(), {
  offset: 0,
  offsetTablet: 0,
  offsetDesktop: 0
});
</script>

<style lang="scss">
.grid-column {
  padding: calc(var(--grid-gutter, 0) / 2);
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  max-width: 100%;

  // If we size our columns in explicit way
  // they behave a bit differently and we have to calculate the percentage
  &--sized {
    --size: v-bind(size);
    --percentage: calc(var(--size, var(--max-columns, 12)) / var(--max-columns, 12) * 100%);

    width: 100%;
    flex-grow: 0;
    flex-basis: var(--percentage);
    max-width: var(--percentage);
  }

  // The same case when we start to offset the column
  &--offseted {
    --offset: v-bind(offset);

    margin-left: calc(var(--offset) / var(--max-columns, 12) * 100%);
  }

  // And in our media queries, just change the property,
  // no need to override what's already in place. Clean and easy!
  @include breakpoint-tablet {
    &--sized-tablet {
      --size: v-bind(sizeTablet);
    }

    &--offseted-tablet {
      --offset: v-bind(offsetTablet);
    }
  }

  @include breakpoint-desktop {
    &--sized-desktop {
      --size: v-bind(sizeDesktop);
    }

    &--offseted-desktop {
      --offset: v-bind(offsetDesktop);
    }
  }
}
</style>
