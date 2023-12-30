<script lang="ts" setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import bannerComponent from "../../home/components/bannerComponent.vue";
import weekRecipesComponent from "../../home/components/week/weekRecipesComponent.vue";
import recipesTopbar from "../components/recipesTopbar.vue";
import { useRecipes } from "../store/useRecipes";
import type { Ingredients } from "../types";

const route = useRoute();

const recipes = useRecipes();

const getProperties = (el: Ingredients) => computed(() => `${el.weight[0].name} ${el.weight[0].measure[0].name}`).value;

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
        <img :src="recipes.object.image || 'https://placehold.co/1920x1200/393b44/FFFFFF/webp'" loading="lazy" />
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
      <aside>
        <h3>Основные ингредиенты</h3>

        <ul>
          <li v-for="(el, i) in recipes.object.ingredients" :key="i">
            <small>{{ i + 1 }}.</small>
            {{ el.name }} -
            {{ getProperties(el) }}
          </li>
        </ul>

        <template v-if="recipes.object.related">
          <ul v-for="(related, i) in recipes.object.related" :key="i">
            <li>
              <RouterLink :to="{ name: 'recipe', params: { id: related.id } }">{{ related.name }}</RouterLink>
            </li>

            <li v-for="(el, i) in related.ingredients" :key="i">
              <small>{{ i + 1 }}.</small>
              {{ el.name }} -
              {{ getProperties(el) }}
            </li>
          </ul>
        </template>
      </aside>

      <article>
        <h3>Способ приготовления</h3>

        <ul v-for="(el, i) in recipes.object.steps" :key="i">
          <li>
            <small>{{ i + 1 }}.</small>
            {{ el.content }}
          </li>
        </ul>
      </article>
    </section>

    <bannerComponent />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 10px;
  margin: 80px auto;
  max-width: 1200px;

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 18px;
    margin: 0 0 10px;
  }

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

    &:last-of-type {
      grid-template: auto / 472px auto;
      margin: 40px 0;

      aside {
        border: 1px solid #eeeeee;
        display: grid;
        gap: 20px;
        padding: 20px;
        place-content: start;

        ul {
          li {
            margin: 0 0 5px;

            a {
              display: block;
              font-size: 18px;
              margin: 0 0 20px;
              width: fit-content;
            }
          }
        }
      }

      article {
        border: 1px solid #eeeeee;
        display: grid;
        padding: 20px;
      }
    }
  }
}
</style>
