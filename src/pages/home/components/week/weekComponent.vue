<script lang="ts" setup>
import { useRecipes } from "@/pages/recipes/store/useRecipes";
import cardComponent from "../cardComponent.vue";

const recipes = useRecipes();

recipes.read();
</script>

<template>
  <section>
    <cardComponent v-for="el in recipes.array" :key="el.id" :data="el" />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 20px;
  grid-template: auto / 1fr 300px;
}
</style>
