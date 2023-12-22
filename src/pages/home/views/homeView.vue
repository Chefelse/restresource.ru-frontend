<script lang="ts" setup>
import headerComponent from "../components/headerComponent.vue";
import heroComponent from "../components/heroComponent.vue";
</script>

<template>
  <headerComponent />

  <heroComponent />
  <main></main>
</template>

<style lang="scss" scoped>
main {
  background-color: tomato;
  max-width: 1200px;
  margin: auto;
  padding: 20px;

  height: 4000px;
}
</style>
