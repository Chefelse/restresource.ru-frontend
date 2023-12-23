<script lang="ts" setup>
import { ref } from "vue";

import cardComponent from "../cardComponent.vue";

const recipes = ref([
  {
    id: 1,
    title: "Мороженое с печенью",
    collection: 1,
    description: "Вкусное мороженое с печенью",
    image: "https://placehold.co/1400x1300/393B44/FFF.jpg",
    views: 0,
  },
  {
    id: 2,
    title: "Фруктовое мороженое",
    collection: 1,
    description: "Вкусное мороженое с фруктами",
    image: "https://placehold.co/1400x1300/393B44/FFF.jpg",
    views: 0,
  },
  {
    id: 3,
    title: "Мороженое с шоколадом",
    collection: 1,
    description: "Вкусное мороженое с шоколадом",
    image: "https://placehold.co/1400x1300/393B44/FFF.jpg",
    views: 0,
  },
  {
    id: 4,
    title: "Мороженое с медом",
    collection: 1,
    description: "Вкусное мороженое с медом",
    image: "https://placehold.co/1400x1300/393B44/FFF.jpg",
    views: 0,
  },
  {
    id: 5,
    title: "Мороженое с черносливом",
    collection: 1,
    description: "Вкусное мороженое с черносливом",
    image: "https://placehold.co/1400x1300/393B44/FFF.jpg",
    views: 0,
  },
]);
</script>

<template>
  <section>
    <cardComponent v-for="item in recipes.slice(0, 5)" :key="item.id" :cards="item" />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template: auto / repeat(5, 1fr);
  gap: 20px;

  article {
    &:first-child:deep() {
      grid-row: 1;
      p {
        display: none;
      }
    }
  }
}
</style>
