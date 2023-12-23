<script lang="ts" setup>
import type { Card } from "../types";

const props = defineProps<{
  cards: Card;
  state?: boolean;
}>();
</script>

<template>
  <article>
    <img :src="props.cards.image" loading="lazy" />

    <h3>{{ cards.title }}</h3>

    <RouterLink
      :to="{
        name: 'home',
      }"
    >
      {{ cards.collection }}
    </RouterLink>

    <p>
      {{ cards.description }}
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

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    display: none;
  }
}
</style>
