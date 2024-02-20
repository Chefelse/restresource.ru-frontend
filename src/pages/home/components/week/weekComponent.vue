<script lang="ts" setup>
import { useRecipes } from "@/pages/recipes/store";
import cardComponent from "../cardComponent.vue";

const recipes = useRecipes();

recipes.read();
</script>

<template>
  <section>
    <cardComponent v-for="el of recipes.array.filter((el: any) => el.status === true)" :key="el.id" :data="el" />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 20px;
  grid-template: auto / 1fr 300px;
  place-items: start normal;

  article {
    &:first-of-type {
      :deep() {
        grid-row: 1 / 3;

        img {
          height: 471px;
          width: 100%;
          object-fit: cover;
        }

        p {
          display: unset;
        }

        h4 {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
@/pages/recipes/store
