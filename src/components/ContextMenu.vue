<template>
  <transition
    name="context-menu"
    mode="out-in"
    appear
  >
    <div
      ref="contextMenuRef"
      class="context-menu"
    >
      <button
        v-for="option in options"
        :key="option"
        class="context-menu__option"
        @click="onOptionClick(option)"
      >
        {{ option }}
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

defineProps<{
  x: number;
  y: number;
  options: string[];
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'option', option: string): void;
}>();

const contextMenuRef = ref(null);

onClickOutside(contextMenuRef, () => emit('close'));

const onOptionClick = (option: string) => {
  emit('option', option);
  emit('close');
};
</script>

<style lang="scss">
.context-menu {
  position: fixed;
  overflow: hidden;
  border-radius: 0.4rem 0.4rem 0 0;
  box-shadow: var(--generic-shadow);
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: var(--z-context-menu);
  max-height: 75vh;
  overflow: auto;

  @include breakpoint-desktop {
    border-radius: 0.4rem;
    max-width: 12rem;
    max-height: 20rem;
    bottom: auto;
    right: auto;
    // Because we are operating on straight up numbers, convert those to pixels
    // We could also introduce computed properties to get string values like '100px'
    top: calc(v-bind(y) * 1px);
    left: calc(v-bind(x) * 1px);
  }

  &-enter-active,
  &-leave-active {
    transition-property: transform, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;

    @include breakpoint-desktop {
      transition-duration: 0.1s;
      transform: scale(1);
      transform-origin: top left;
    }
  }

  &-enter-from,
  &-leave-to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;

    @include breakpoint-desktop {
      transform: scale(0);
    }
  }

  &__option {
    display: block;
    margin: 0;
    width: 100%;
    color: var(--white-color);
    border: none;
    background-color: var(--secondary-color);
    padding: 0.8rem;
    font-size: 1.8rem;
    transition: background 0.1s linear;
    cursor: pointer;

    &:hover,
    &:focus-visible {
      outline: none;
      background-color: var(--primary-color);
    }

    @include breakpoint-desktop {
      padding: 0.4rem;
    }

    & + & {
      border-top: 0.1rem solid var(--white-color);
    }
  }
}
</style>
