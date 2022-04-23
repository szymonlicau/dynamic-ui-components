<template>
  <section>
    <h2> Grid System as dynamic components </h2>

    <p>
      This Grid System is very similar in fashion to what we see in Bootstrap or Vuetify.
      <br/>
      It consists of three components:

      <ol>
        <li>
          <code>GridContainer</code> - it sets up the size of the gutter, and the number of columns to base calculations on.
        </li>

        <li>
          <code>GridRow</code> - it can modify or disable the gutter for a set of columns, and also wraps them nicely.
        </li>

        <li>
          <code>GridColumn</code> - it defines the size of given column - auto if not defined - with support for media query specific sizes.
          <br/>
          It also can have it's own offset (to the left) - also configured optionally on a per device basis
        </li>
      </ol>
    </p>
  </section>

  <section>
    <h2> Base auto scaling columns </h2>

    <GridContainer>
      <GridRow>
        <GridColumn
          v-for="n in 6" :key="n"
        >
          <div class="filler"> 1 / 6 </div>
        </GridColumn>
      </GridRow>

      <GridRow>
        <GridColumn
          v-for="n in 3" :key="n"
        >
          <div class="filler"> 1 / 3 </div>
        </GridColumn>
      </GridRow>

      <GridRow>
        <GridColumn
          v-for="n in 12" :key="n"
        >
          <div class="filler"> 1 / 12 </div>
        </GridColumn>
      </GridRow>
    </GridContainer>
  </section>

  <section>
    <h2> Custom gutter </h2>

    <label
      for="gutter"
    >
      Set the size of the gutter (minimum 0)
    </label>

    <input
      id="gutter"
      type="number"
      :min="0"
      placeholder="Gutter size"
      v-model="gutter"
    />

    <GridContainer
      :gutter="sizeOfGutter"
    >
      <GridRow>
        <GridColumn
          v-for="n in 6" :key="n"
        >
          <div class="filler"> 1 / 6 </div>
        </GridColumn>
      </GridRow>

      <GridRow>
        <GridColumn
          v-for="n in 3" :key="n"
        >
          <div class="filler"> 1 / 3 </div>
        </GridColumn>
      </GridRow>
    </GridContainer>
  </section>

  <hr />

  <label
    for="columns"
  >
    Set number of columns for the grids (minimum 12)
  </label>

  <input
    id="columns"
    type="number"
    :min="12"
    placeholder="Number of columns"
    v-model="columns"
  />

  <section>
    <h2> Fixed size columns </h2>

    <GridContainer
      :columns="numberOfColumns"
    >
      <GridRow>
        <GridColumn
          :size="2"
        >
          <div class="filler"> 2 / {{ numberOfColumns }} </div>
        </GridColumn>

        <GridColumn
          :size="5"
        >
          <div class="filler"> 5 / {{ numberOfColumns }} </div>
        </GridColumn>

        <GridColumn
          :size="4"
        >
          <div class="filler"> 4 / {{ numberOfColumns }} </div>
        </GridColumn>

        <GridColumn
          :size="7"
        >
          <div class="filler"> 7 / {{ numberOfColumns }} </div>
        </GridColumn>
      </GridRow>
    </GridContainer>
  </section>

  <section>
    <h2> Fixed size columns + offsets</h2>

    <GridContainer
      :columns="numberOfColumns"
    >
      <GridRow>
        <GridColumn
          :size="2"
          :offset="1"
        >
          <div class="filler"> 2 / {{ numberOfColumns }}, offset 1 </div>
        </GridColumn>

        <GridColumn
          :size="5"
          :offset="4"
        >
          <div class="filler"> 5 / {{ numberOfColumns }}, offset 4 </div>
        </GridColumn>

        <GridColumn
          :size="4"
          :offset="8"
        >
          <div class="filler"> 4 / {{ numberOfColumns }}, offset 8 </div>
        </GridColumn>

        <GridColumn
          :size="7"
          :offset="2"
        >
          <div class="filler"> 7 / {{ numberOfColumns }}, offset 2 </div>
        </GridColumn>
      </GridRow>
    </GridContainer>
  </section>

  <section>
    <h2> Fixed size columns + offsets + responsive behavior</h2>

    <GridContainer
      :columns="numberOfColumns"
    >
      <GridRow>
        <GridColumn
          :size="numberOfColumns"
          :size-tablet="4"
          :size-desktop="8"
        >
          <div class="filler">
            Mobile - {{ numberOfColumns }} / {{ numberOfColumns }}
            <br/>
            Tablet - 4 / {{ numberOfColumns }}
            <br/>
            Desktop - 8 / {{ numberOfColumns }}
          </div>
        </GridColumn>

        <GridColumn
          :size="numberOfColumns"
          :size-tablet="8"
          :size-desktop="4"
        >
          <div class="filler">
            Mobile - {{ numberOfColumns }} / {{ numberOfColumns }}
            <br/>
            Tablet - 8 / {{ numberOfColumns }}
            <br/>
            Desktop - 4 / {{ numberOfColumns }}
          </div>
        </GridColumn>

        <GridColumn
          :size="numberOfColumns"
          :size-tablet="4"
          :size-desktop="8"
          :offset-tablet="4"
          :offset-desktop="2"
        >
          <div class="filler">
            Mobile - {{ numberOfColumns }} / {{ numberOfColumns }}, offset 0
            <br/>
            Tablet - 4 / {{ numberOfColumns }}, offset 4
            <br/>
            Desktop - 8 / {{ numberOfColumns }}, offset 2
          </div>
        </GridColumn>
      </GridRow>
    </GridContainer>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import GridContainer from '@/components/grid/GridContainer.vue';
import GridRow from '@/components/grid/GridRow.vue';
import GridColumn from '@/components/grid/GridColumn.vue';

const gutter = ref(50);
const sizeOfGutter = computed(() => Math.max(gutter.value, 0));

const columns = ref(12);
const numberOfColumns = computed(() => Math.max(columns.value, 12));
</script>

<style lang="scss">
.filler {
  border: 0.1rem solid var(--border-color);
  text-align: center;
  padding: 0.4rem;
}
</style>
