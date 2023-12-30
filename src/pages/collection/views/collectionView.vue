<script lang="ts" setup>
import { useRecipes } from "@/pages/recipes/store";
import { useRoute } from "vue-router";
import cardComponent from "../../home/components/cardComponent.vue";
import { useCollections } from "../store";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eos quia reprehenderit quidem asperiores vitae quod aliquam vel laboriosam
          voluptatum, nam ab libero quae similique mollitia atque temporibus magni ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eos quia
          reprehenderit quidem asperiores vitae quod aliquam vel laboriosam voluptatum, nam ab libero quae similique mollitia atque temporibus magni ex.
        </p>
      </article>
    </section>

    <section>
      <h3>Рецепты этой коллекции</h3>

      <aside>
        <ul>
          <li>afwafawfawf</li>
          <li>afwafawfawf</li>
          <li>afwafawfawf</li>
          <li>afwafawfawf</li>
        </ul>
      </aside>

      <div>
        <cardComponent v-for="el in recipes.array" :key="el.id" :data="el" />
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

    h3 {
      margin: 20px auto;
    }

    &:last-of-type {
      grid-template: auto / 280px auto;

      h3 {
        grid-column: 1 / -1;
        margin: 0;
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
        grid-template: auto / repeat(4, 1fr);
      }
    }
  }
}
</style>
@/pages/recipes/store
