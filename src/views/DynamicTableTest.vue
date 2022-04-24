<template>
  <div class="dynamic-table-test">
    <div class="dynamic-table-test__controls">
      <h2> Select visible columns </h2>

      <label
        v-for="column in columns.slice(1)"
        :key="column.key"
        class="dynamic-table-test__control"
      >
        <input
          :id="column.key"
          type="checkbox"
          :value="column.key"
          v-model="visibleColumns"
        />

        {{ column.name }}
      </label>
    </div>

    <p>
      The table features a nice responsive behavior with mobile being handled as rows becoming cards of data.
      <br/>
      On tablets and desktops it handles the display by utilizing CSS grid and the component handles the template of the columns.
    </p>

    <DynamicTable
      class="dynamic-table-test__table"
      :data="employees"
      :columns="columns"
      :visible-columns="visibleColumns"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import employees from '@/mocks/employees';

import DynamicTable, { Column, ColumnSize } from '@/components/DynamicTable.vue';

// Column definitions according to DynamicTable component's requirements
const columns = computed<Column[]>(() => {
  const firstEmployee = employees[0];

  return Object.keys(firstEmployee).map((column) => {
    // Titleize the field names
    const columnName = column.replace(/([A-Z])/g, " $1");
    const titleizedName = columnName.charAt(0).toUpperCase() + columnName.slice(1);

    // By default let's use normal column sizes
    let size: ColumnSize = 'normal';

    // Make ID column a narrow one
    if (column === 'id') {
      size = 'small';
    }

    // But make addresses bigger
    if (column === 'streetAddress') {
      size = 'big';
    }

    return {
      key: column,
      name: titleizedName,
      size
    };
  });
});

const visibleColumns = ref(columns.value.map(c => c.key));
</script>

<style lang="scss">
.dynamic-table-test {
  &__controls {
    margin-bottom: 2rem;
  }

  &__control {
    display: inline-block;
    border: 0.1rem solid var(--border-color);
    border-radius: 0.8rem;
    margin: 0.2rem 0.4rem;
    padding: 0.4rem;
  }

  &__table {
    @include breakpoint-tablet {
      max-height: 40rem;
    }
  }
}
</style>
