<script lang="ts" setup>
import { useRecipes } from "@/pages/recipes/store";
import cardComponent from "../cardComponent.vue";

const recipes = useRecipes();

recipes.read();
</script>

<template>
  <section>
    <cardComponent v-for="el of recipes.array.slice(0, 4)" :key="el.id" :data="el" />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 20px;
  grid-template: auto / repeat(4, 1fr) !important;
  place-items: start;
}
</style>
@/pages/recipes/store
