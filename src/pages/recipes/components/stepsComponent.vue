<script lang="ts" setup>
import { computed } from "vue";
import type { Ingredients, Recipe } from "../types";

const props = defineProps<{
  data: Recipe;
}>();

const getProperties = (el: Ingredients) => computed(() => `${el.weight[0].amount} ${el.weight[0].measure[0]?.name}`).value;
</script>

<template>
  <article :class="{ private: props.data.private }">
    <h3>Способ приготовления</h3>

    <template v-if="props.data.private">
      <ul>
        <li v-for="(el, i) in props.data.steps.slice(0, 2)" :key="i">
          {{ el.content }}
        </li>
      </ul>
    </template>

    <template v-else>
      <ul v-for="(el, i) in props.data.related" :key="i">
        <h3>{{ el.name }}</h3>

        <li>
          <ul>
            <li v-for="(ing, idx) in el.ingredients" :key="idx">{{ ing.name }} - {{ getProperties(ing) }}</li>
          </ul>
        </li>

        <li v-for="(step, idx) in el.steps" :key="idx">
          {{ step.content }}
        </li>
      </ul>

      <h3>Презентация блюда</h3>
      <ul>
        <li v-for="(el, i) in props.data.steps" :key="i">
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

  ul {
    display: grid;
    gap: 20px;

    li {
      ul {
        background-color: #f9f9f9;
        padding: 20px;
        gap: 10px;

        li {
          display: block;
        }
      }
    }
  }

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
