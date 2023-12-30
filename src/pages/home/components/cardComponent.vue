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

    <RouterLink
      :to="{
        name: 'recipe',
        params: {
          id: props.data.id,
        },
      }"
    >
      <h3>{{ props.data.name }}</h3>
    </RouterLink>

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
  gap: 5px;
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

  h3 {
    margin: 10px 0 0;
  }

  a:not(:first-of-type) {
    font-size: 14px;
    opacity: 0.6;
    width: fit-content;

    &:hover {
      opacity: 1;
    }
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
    font-weight: 400;
  }

  &.small {
    grid-row: unset;

    h3 {
      font-size: inherit;
      font-weight: 400;
    }

    p {
      display: none !important;
    }

    img {
      height: 150px;
    }
  }
}
</style>
