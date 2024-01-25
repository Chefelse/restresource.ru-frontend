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
      custom
      v-slot="{ navigate }"
    >
      <img v-on:click="navigate" :src="props.data.image || 'https://restresource.ru/blank.webp'" loading="lazy" />
    </RouterLink>

    <RouterLink
      :to="{
        name: 'recipe',
        params: {
          id: props.data.id,
        },
      }"
      custom
      v-slot="{ navigate }"
    >
      <h4 v-on:click="navigate">{{ props.data.name }}</h4>
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
  gap: 8px;
  grid-template: 1fr auto / auto;

  a {
    font-size: 0.85rem;
    color: #6a6a6a;

    &:hover {
      color: initial;
    }
  }

  img,
  h4 {
    cursor: pointer;
  }

  p {
    display: none;
  }
}
</style>
