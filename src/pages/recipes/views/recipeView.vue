<script lang="ts" setup>
import weekRecipesComponent from "../../home/components/week/weekRecipesComponent.vue";
import { useRecipes } from "../store/useRecipes";
const recipes = useRecipes();

recipes.read();
</script>

<template>
  <main v-if="recipes.array">
    <pre>{{ recipes.array[0] }}</pre>
    <section>
      <h1>{{ recipes.array[0].name }}</h1>
      <p>
        by: <a>{{ recipes.array[0].author }}</a>
      </p>
    </section>

    <section>
      <picture>
        <img src="https://placehold.co/2048x1080" alt="" />
      </picture>

      <article>
        <ul>
          <li>
            <svg width="18" height="18">
              <use xlink:href="@/assets/icons.svg#plate"></use>
            </svg>

            {{ recipes.array[0].collections[0].name }}
          </li>
          <li>
            <svg width="18" height="18">
              <use xlink:href="@/assets/icons.svg#network"></use>
            </svg>

            {{ recipes.array[0].levels[0].name }}
          </li>
          <li>
            <svg width="18" height="18">
              <use xlink:href="@/assets/icons.svg#time"></use>
            </svg>

            {{ recipes.array[0].time }}
          </li>
        </ul>

        <p>{{ recipes.array[0].description }}</p>

        <p>Опубликовано 26.12.2023</p>
      </article>
    </section>

    <h2>Рецепты этой недели</h2>

    <weekRecipesComponent />

    <section>
      <article>
        <h3>Ингредиенты</h3>

        <ul v-for="(item, idx) in recipes.array[0].ingredients" :key="item">
          <li>
            <small>{{ idx + 1 }}.</small>
            {{ item.name }}
          </li>
        </ul>
      </article>

      <article>
        <h3>Способ приготовления</h3>

        <ul v-for="(item, idx) in recipes.array[0].steps" :key="item">
          <li>
            <small>{{ idx + 1 }}.</small>
            {{ item.content }}
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 40px;
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-weight: 400;
  }

  section {
    display: grid;
    gap: 20px;

    article {
      display: grid;
      gap: 20px;
      height: fit-content;
    }

    &:nth-of-type(2) {
      grid-template: auto / repeat(2, 1fr);

      ul {
        display: grid;
        grid-auto-flow: column;

        li {
          svg {
            margin: 0 10px 0 0;
            vertical-align: middle;
          }
        }
      }
    }

    &:last-of-type {
      grid-template: auto / auto 1fr;

      article {
        border: 1px solid;
        padding: 20px;
      }
    }
  }
}
</style>
