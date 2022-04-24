<template>
  <div class="grid-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  gutter?: number;
  columns?: number;
}>(), {
  gutter: 20,
  columns: 12
});

const gridGutter = computed(() => `${props.gutter}px`);
</script>

<style lang="scss">
.grid-container {
  // Set up gutter on -explicitly- named property
  // thanks to which we can use it easily in child components with ease
  // because of cascading nature of CSS
  // (v-bind would make the names unpredictable)
  --grid-gutter: v-bind(gridGutter);
  --max-columns: v-bind(columns);

  width: 100%;
  padding: calc(var(--grid-gutter) / 2);
  margin-left: auto;
  margin-right: auto;
}
</style>
