<script lang="ts" setup>
import { computed } from "vue";
import type { Ingredients, Recipe } from "../types";

const props = defineProps<{
  data: Recipe;
}>();

const getProperties = (el: Ingredients) => computed(() => `${el.weight[0].name} ${el.weight[0].measure[0]?.name}`).value;
</script>

<template>
  <aside>
    <h3>Основные ингредиенты</h3>
    <ul>
      <li v-for="(el, i) in props.data.ingredients" :key="i">
        <small>{{ i + 1 }}.</small>
        {{ el.name }} -
        {{ getProperties(el) }}
      </li>
    </ul>

    <template v-if="props.data.related">
      <ul v-for="(related, i) in props.data.related" :key="i">
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: related.id } }">{{ related.name }}</RouterLink>
        </li>

        <li v-for="(el, i) in related.ingredients" :key="i">
          <small>{{ i + 1 }}.</small>
          {{ el.name }} -
          {{ getProperties(el) }}
        </li>
      </ul>
    </template>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  border: 1px solid #eeeeee;
  display: grid;
  gap: 20px;
  padding: 20px;
  place-content: start;

  ul {
    li {
      margin: 0 0 5px;

      a {
        display: block;
        font-size: 18px;
        margin: 0 0 20px;
        width: fit-content;
      }
    }
  }
}
</style>
