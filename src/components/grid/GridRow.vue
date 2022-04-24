<template>
  <div class="grid-row">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  noGutters?: boolean;
}>(), {
  noGutters: false,
});
</script>

<style lang="scss">
.grid-row {
  // Use the grid gutter, if it's not there - fallback to 0
  // Now, even when using outside of GridContainer - logic still checks out
  --gutter: var(--grid-gutter, 0);

  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: calc(-1 * var(--gutter) / 2);

  & + & {
    margin-top: calc(var(--gutter, 0) / 2);
  }
}
</style>
