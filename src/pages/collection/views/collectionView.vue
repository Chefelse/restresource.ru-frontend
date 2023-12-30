<script lang="ts" setup>
import { useCollections } from "@/pages/recipes/store/useCollections";
import { useRecipes } from "@/pages/recipes/store/useRecipes";
import { useRoute } from "vue-router";

const route = useRoute();

const recipes = useRecipes();

const collections = useCollections();

collections.readOne(route.params.id as string);

recipes.readBy(route.params.id as string);
</script>

<template>
  <main>
    <section>
      <h1>{{ collections.object?.name }}</h1>

      <img :src="'https://placehold.co/1920x1200/393b44/FFFFFF/webp'" loading="lazy" />

      <article>
        <h3>{{ collections.object?.name }}</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eos quia reprehenderit quidem asperiores
          vitae quod aliquam vel laboriosam voluptatum, nam ab libero quae similique mollitia atque temporibus magni ex.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eos quia reprehenderit quidem asperiores
          vitae quod aliquam vel laboriosam voluptatum, nam ab libero quae similique mollitia atque temporibus magni ex.
        </p>
      </article>
    </section>

    <section>
      <h1>Рецепты этой коллекции</h1>

      <aside>
        <ul>
          <li>afwafawfawf</li>
          <li>afwafawfawf</li>
          <li>afwafawfawf</li>
          <li>afwafawfawf</li>
        </ul>
      </aside>

      <div>
        <article v-for="(el, i) of recipes.array" :key="i">
          <RouterLink :to="{ name: 'recipe', params: { id: el.id } }">
            <img :src="el.image || 'https://placehold.co/1920x1200/393b44/FFFFFF/webp'" loading="lazy" />
          </RouterLink>

          <h3>{{ el.name }}</h3>

          <p>
            {{ collections.object?.name }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 40px;
  margin: auto;
  max-width: 1200px;
  padding: 20px;

  section {
    display: grid;
    gap: 20px;

    &:last-of-type {
      grid-template: auto / 280px auto;
      gap: 20px;

      h1 {
        grid-column: 1 / -1;
      }

      aside {
        border: 1px solid #eeeeee;
        height: fit-content;
        padding: 20px;
        position: sticky;
        top: 108px;
      }

      div {
        display: grid;
        gap: 20px;
        grid-template: auto / repeat(3, 1fr);

        article {
          h3 {
            margin: 5px 0;
            text-align: unset;
          }
        }
      }
    }
  }

  h1 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
    text-align: center;
    margin: 20px 0;
  }
}
</style>
