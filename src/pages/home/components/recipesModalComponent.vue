<script lang="ts" setup>
import { useCollections } from "@/pages/recipes/store/useCollections";
import { inject } from "vue";

const store = useCollections();

const active = inject("active");

store.read();
</script>

<template>
  <section>
    <article v-outside="() => (active = false)">
      <ul v-for="collection in store.array" :key="collection.id">
        <li>{{ collection.name }}</li>

        <li v-for="recipe in collection.categories.slice(0, 4)" :key="recipe.id">{{ recipe.name }}</li>

        <li>Показать еще</li>
      </ul>

      <hr />

      <p>Хотите что-то другое? Вдохновляйтесь нашими новыми решениями.</p>

      <button>Последние рецепты</button>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: #00000040;
  backdrop-filter: blur(5px);
  display: grid;
  place-items: center;
  inset: 0;
  position: fixed;
  z-index: 10;

  article {
    background-color: #ffffff;
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    gap: 40px;
    padding: 40px;
    place-items: center baseline;
    max-width: 900px;
    width: 100%;

    ul {
      li {
        cursor: pointer;

        &:first-of-type {
          cursor: default;
          font-size: 16px;
          font-weight: 400;
          margin: 0 0 10px;
        }
      }
    }

    hr {
      border-bottom: 1px solid #cccccc;
      grid-column: 1 / -1;
      width: 100%;
    }

    p {
      grid-column: 1 / 3;
    }

    button {
      border: 1px solid;
      text-align: center;
      padding: 10px 20px;
    }
  }
}
</style>
