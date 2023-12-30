<script lang="ts" setup>
import type { Recipe } from "../types";

const props = defineProps<{
  data: Recipe;
}>();
</script>

<template>
  <article :class="{ private: props.data.private }">
    <h3>Способ приготовления</h3>

    <template v-if="props.data.private">
      <ul v-for="(el, i) in props.data.steps.slice(0, 2)" :key="i">
        <li>
          <small>{{ i + 1 }}.</small>
          {{ el.content }}
        </li>
      </ul>
    </template>

    <template v-else>
      <ul v-for="(el, i) in props.data.steps" :key="i">
        <li>
          <small>{{ i + 1 }}.</small>
          {{ el.content }}
        </li>
      </ul>
    </template>
  </article>
</template>

<style lang="scss" scoped>
article {
  border: 1px solid #eeeeee;
  display: grid;
  padding: 20px;
  position: relative;

  &.private {
    &::before {
      content: "";

      background: rgb(255, 255, 255);
      background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.298739564185049) 100%);

      position: absolute;
      inset: 0;
    }
  }
}
</style>
