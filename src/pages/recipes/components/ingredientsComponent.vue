<script lang="ts" setup>
import { computed } from "vue";
import { useRecipes } from "../store";
import type { Ingredients, Recipe } from "../types";

const props = defineProps<{
  data: Recipe;
}>();

const store = useRecipes();

store.readIngredientsMatched();

const getProperties = (el: Ingredients) => computed(() => `${el.weight[0].name} ${el.weight[0].measure[0]?.name}`).value;
</script>

<template>
  <aside>
    <h3>Основные ингредиенты</h3>

    <ul>
      <li v-for="(el, i) in props.data.ingredients" :key="i">
        <!-- <small>{{ i + 1 }}.</small> -->

        <template v-if="store.array.some((e: any) => e.name === el.name)">
          <RouterLink :to="{ name: 'recipe', params: { id: store.array.find((e: any) => e.name === el.name).id } }">{{ el.name }}</RouterLink>
          -
        </template>

        <template v-else-if="store.ingredients.some((e: any) => e.id === el.id && e.name !== 'Соль' && e.name !== 'Перец')">
          <RouterLink :to="{ name: 'ingredients', params: { id: store.ingredients.find((e: any) => e.id === el.id).id } }">{{ el.name }}</RouterLink> -
        </template>

        <template v-else> {{ el.name }} - </template>
        {{ getProperties(el) }}
      </li>
    </ul>

    <template v-if="props.data.related">
      <ul v-for="(related, i) in props.data.related" :key="i">
        <li>
          <h4>
            {{ related.name }}
          </h4>
        </li>

        <li v-for="(el, i) in related.ingredients" :key="i">
          <!-- <small>{{ i + 1 }}.</small> -->
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

      h4 {
        font-size: 18px;
        margin: 0 0 10px;
      }

      a {
        color: #0895c1;
        text-decoration: underline;
        width: fit-content;
      }
    }
  }
}
</style>
