<script lang="ts" setup>
import type { Recipe } from "../types";

defineProps<{
  data: Recipe;
}>();
</script>

<template>
  <ul>
    <li>
      <svg width="18" height="18">
        <use xlink:href="@/assets/icons.svg#plate"></use>
      </svg>

      {{ data.collections[0].name }}
    </li>

    <li>
      <svg width="18" height="18">
        <use xlink:href="@/assets/icons.svg#network"></use>
      </svg>

      {{ data.levels[0].name }}
    </li>

    <li>
      <svg width="18" height="18">
        <use xlink:href="@/assets/icons.svg#time"></use>
      </svg>

      {{ data.time }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  gap: 40px;

  li {
    display: inline-flex;
    gap: 10px;
  }
}
</style>
