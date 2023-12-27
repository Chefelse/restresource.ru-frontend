<script lang="ts" setup>
import { useRecipes } from "../store/useRecipes";

const recipes = useRecipes();

recipes.read();
</script>

<template>
  <section>
    <ul>
      <li v-for="el in recipes.array" :key="el">
        <RouterLink :to="{ name: 'recipe', params: { id: el.id } }">{{ el.name }}</RouterLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
// & else
</style>
