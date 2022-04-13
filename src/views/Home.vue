<template>
  <h1> Dynamic UI Components Examples </h1>

  <div class="tabs">
    <router-link
      v-for="tab in tabs"
      :key="tab"
      :to="{ name: tab }"
      class="tab"
    >
      {{ tab }}
    </router-link>
  </div>

  <router-view />
</template>

<script setup lang="ts">
const tabs = [ 'ContextMenu', 'GridSystem' ];
</script>

<style lang="scss">
.tabs {
  --border-width: 0.2rem;

  display: flex;
  align-items: center;
  border-bottom: var(--border-width) solid var(--border-color);
  margin-bottom: 2rem;
}

.tab {
  --indicator-color: transparent;

  display: inline-block;
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.8rem;
  border-bottom: 0.4rem solid var(--indicator-color);
  transition: all 0.1s linear;
  padding: 0.4rem 0.8rem;
  margin-bottom: calc(-1 * var(--border-width));

  &:hover,
  &.router-link-exact-active {
    font-weight: bold;
  }

  &.router-link-exact-active {
    --indicator-color: var(--primary-color);
  }

  & + & {
    margin-left: 2rem;
  }
}
</style>
