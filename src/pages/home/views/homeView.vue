<script lang="ts" setup>
import bannerComponent from "@/components/bannerComponent.vue";
import heroComponent from "../components/heroComponent.vue";
import weekComponent from "../components/week/weekComponent.vue";
import weekRecipesComponent from "../components/week/weekRecipesComponent.vue";
</script>

<template>
  <heroComponent />

  <main>
    <h2>На этой неделе</h2>
    <weekComponent />

    <h3>Рецепты этой недели</h3>
    <weekRecipesComponent />

    <bannerComponent />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 20px;
  margin: auto;
  max-width: 1200px;
  padding: 20px;

  section {
    margin: 0 0 40px;
  }
}
</style>
