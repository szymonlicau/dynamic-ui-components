<template>
  <div
    class="context-menu-test"
    @contextmenu.prevent="openContextMenu"
  >
    <p>
      Right click on me to test the context menu~!
    </p>

    <p>
      On mobile devices the context menu will display and behave differently - it will slide from the bottom.
      This behavior does not require any high specificity or <b>!important</b> calls - we just not use the binded custom CSS properties in such case.
    </p>

    <p
      v-if="contextMenuShown"
    >
      <b>
        Context menu shown at ({{ mouseX }}, {{ mouseY }}).
      </b>
    </p>
  </div>

  <ContextMenu
    v-show="contextMenuShown"
    :x="mouseX"
    :y="mouseY"
    @close="hideContextMenu"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ContextMenu from '@/components/ContextMenu.vue';

const contextMenuShown = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);

const openContextMenu = (event: MouseEvent) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;

  contextMenuShown.value = true;
};

const hideContextMenu = () => contextMenuShown.value = false;
</script>

<style lang="scss">
.context-menu-test {
  padding: 2rem 4rem;
  border-radius: 1.6rem;
  border: 0.4rem dashed var(--border-color);
}
</style>
