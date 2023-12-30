<script lang="ts" setup>
import bannerComponent from "../components/bannerComponent.vue";
import heroComponent from "../components/heroComponent.vue";
import weekComponent from "../components/week/weekComponent.vue";
import weekRecipesComponent from "../components/week/weekRecipesComponent.vue";
</script>

<template>
  <heroComponent />

  <main>
    <h1>На этой неделе</h1>
    <weekComponent />

    <h2>Рецепты этой недели</h2>
    <weekRecipesComponent />

    <bannerComponent />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 40px;
  margin: auto;
  max-width: 1200px;
  padding: 20px;

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
    margin: 40px 0 0;
  }
}
</style>
