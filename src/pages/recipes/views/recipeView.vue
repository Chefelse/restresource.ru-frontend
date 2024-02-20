<script lang="ts" setup>
import bannerComponent from "@/components/bannerComponent.vue";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import weekRecipesComponent from "../../home/components/week/weekRecipesComponent.vue";
import IngredientsComponent from "../components/ingredientsComponent.vue";
import recipesTopbar from "../components/recipesTopbar.vue";
import StepsComponent from "../components/stepsComponent.vue";
import { useRecipes } from "../store";

const api = import.meta.env.VITE_HTTP;

const route = useRoute();

const recipes = useRecipes();

watchEffect(() => recipes.readOne(route.params.id as string));
</script>

<template>
  <main v-if="recipes.object">
    <h1>{{ recipes.object.name }}</h1>

    <p>
      <small> от {{ recipes.object.author || "Алексей Б." }} </small>
    </p>

    <section>
      <picture>
        <img :src="`${api}/out/${recipes.object.image}.webp` || 'https://restresource.ru/blank.webp'" loading="lazy" />
      </picture>

      <article>
        <recipesTopbar :data="{ ...recipes.object }" />

        <p>{{ recipes.object.description }}</p>

        <p>Опубликовано 26.12.2023</p>
      </article>
    </section>

    <h2>Рецепты этой недели</h2>

    <weekRecipesComponent />

    <section>
      <IngredientsComponent :data="recipes.object" />

      <StepsComponent :data="recipes.object" />
    </section>

    <bannerComponent v-if="recipes.object.private" />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 10px;
  margin: 80px auto;
  max-width: 1200px;

  section {
    display: grid;
    gap: 20px;
    grid-template: auto / minmax(472px, 710px) auto;
    margin: 0 0 40px;

    article {
      display: grid;
      gap: 20px;
      place-content: start;
    }

    img {
      max-height: 480px;
      object-fit: cover;
    }

    &:last-of-type {
      grid-template: auto / 472px auto;
      margin: 40px 0;
    }
  }
}
</style>
../store
