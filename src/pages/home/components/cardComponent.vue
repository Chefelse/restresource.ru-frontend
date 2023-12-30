<script lang="ts" setup>
import type { Recipe } from "@/pages/recipes/types";

const props = defineProps<{
  data: Recipe;
}>();
</script>

<template>
  <article v-if="props.data">
    <RouterLink
      :to="{
        name: 'recipe',
        params: {
          id: props.data.id,
        },
      }"
    >
      <img :src="props.data.image || 'https://placehold.co/1920x1200/393b44/FFFFFF/webp'" loading="lazy" />
    </RouterLink>

    <h3>{{ props.data.name }}</h3>

    <RouterLink
      :to="{
        name: 'collection',
        params: {
          id: props.data.collections[0].id,
        },
      }"
    >
      {{ props.data.collections[0].name }}
    </RouterLink>

    <p>
      {{ props.data.description }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: grid;
  gap: 10px;
  grid-template: 1fr auto / auto;

  &:first-of-type {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    img {
      max-height: unset;
    }

    p {
      display: initial;
    }
  }

  a {
    width: fit-content;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    display: none;
  }

  h3 {
    font-size: 18px;
  }
}
</style>
