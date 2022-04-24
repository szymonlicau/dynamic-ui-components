<template>
  <div class="dynamic-table">
    <div class="dynamic-table__header">
      <div
        v-for="column in displayedColumns"
        :key="column.key"
        class="dynamic-table__cell"
      >
        {{ column.name }}
      </div>
    </div>

    <div class="dynamic-table__data">
      <div
        v-for="entry in data"
        :key="entry.id"
        class="dynamic-table__row"
      >
        <div
          v-for="column in displayedColumns"
          :key="column.key"
          :title="entry[column.key]"
          class="dynamic-table__cell"
        >
          <span class="dynamic-table__cell-label">
            {{ column.name }}
          </span>

          {{ entry[column.key] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export type ColumnSize = 'big' | 'normal' | 'small';

export type Column = {
  key: string;
  name: string;
  size?: ColumnSize;
}

export default { };
</script>

<script setup lang="ts">
import { computed } from 'vue';

const sizeMap: Record<ColumnSize, string> = {
  big: 'minmax(25rem, 5fr)',
  normal: 'minmax(20rem, 4fr)',
  small: 'minmax(5rem, 1fr)'
};

const props = withDefaults(defineProps<{
  data: any[];
  columns: Column[];
  // keys of columns to show
  visibleColumns: string[];
}>(), {
  data: () => [],
  columns: () => [],
  visibleColumns: () => []
});

const displayedColumns = computed(() => {
  return props.columns.filter(c => {
    return props.visibleColumns.includes(c.key);
  });
});

const columnsTemplate = computed(() => {
  return displayedColumns.value.map(column => {
    return column.size
      ? sizeMap[column.size]
      : sizeMap['normal'];
  }).join(' ');
});
</script>

<style lang="scss">
.dynamic-table {
  min-width: 100%;

  @include breakpoint-tablet {
    overflow: auto;
    display: grid;
    grid-template-columns: v-bind(columnsTemplate);
  }

  &__header {
    display: none;
  }

  &__header,
  &__data,
  &__row {
    // Bypass the display for easier CSS grid use
    @include breakpoint-tablet {
      display: contents;
    }
  }

  &__header &__cell {
    background-color: var(--secondary-color);
    color: var(--white-color);
    font-weight: bold;
    position: sticky;
    top: 0;
    padding: 0.8rem;
  }

  &__row {
    border-radius: 0.8rem;
    border: 0.1rem solid var(--border-color);
    padding: 2rem;
    box-shadow: var(--generic-shadow);

    & + & {
      margin-top: 2rem;
    }
  }

  &__cell {
    & + & {
      margin-top: 1rem;
    }

    @include breakpoint-tablet {
      padding: 0.4rem 0.8rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      & + & {
        margin-top: 0;
        border-left: 0.1rem solid var(--border-color);
      }
    }
  }

  &__cell-label {
    display: block;
    font-weight: bold;
    font-size: 1.8rem;

    &::after {
      content: ':'
    }

    // Labels only visible on mobile
    @include breakpoint-tablet {
      display: none;
    }
  }

  &__row:nth-child(even) &__cell {
    @include breakpoint-tablet {
      background-color: var(--gray-color);
    }
  }
}
</style>
