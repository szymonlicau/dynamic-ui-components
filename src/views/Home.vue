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
const tabs = [ 'ContextMenu', 'DynamicTable', 'GridSystem' ];
</script>

<style lang="scss">
.tabs {
  display: flex;
  align-items: center;
  border-bottom: 0.2rem solid var(--border-color);
  margin-bottom: 2rem;
  overflow-y: hidden;
  overflow-x: auto;
}

.tab {
  --indicator-color: transparent;

  display: inline-block;
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.8rem;
  border-bottom: 0.2rem solid var(--indicator-color);
  transition: all 0.1s linear;
  padding: 0.4rem 0.8rem;

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
