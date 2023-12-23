<script lang="ts" setup>
import logotypeComponent from "@/components/logotypeComponent.vue";
import recipesModalComponent from "@/pages/home/components/recipesModalComponent.vue";
import { provide, ref } from "vue";

const active = ref(false);

provide("active", active);
</script>

<template>
  <header>
    <nav>
      <logotypeComponent></logotypeComponent>
      <svg width="160" height="40">
        <use xlink:href="@/assets/icons.svg#text-logo"></use>
      </svg>
    </nav>

    <nav>
      <RouterLink :to="{ path: '/' }">Подписаться</RouterLink>
      <RouterLink :to="{ path: '/' }">Войти</RouterLink> |
      <RouterLink :to="{ path: '/' }">Регистрация</RouterLink>
    </nav>
  </header>

  <nav>
    <ul>
      <li v-on:click="active = !active">
        Рецепты
        <svg width="21" height="21">
          <use xlink:href="@/assets/icons.svg#chevron"></use>
        </svg>
      </li>
      <li>Готовые решения</li>
      <li>Информационная база</li>
      <li>Секреты приготовления</li>

      <form>
        <input type="text" placeholder="Найти" />

        <svg width="21" height="21">
          <use xlink:href="@/assets/icons.svg#search"></use>
        </svg>
      </form>
    </ul>
  </nav>

  <recipesModalComponent v-if="active" />
</template>

<style lang="scss" scoped>
header {
  background-color: #fff;
  box-shadow:
    0 4px 4px #151f3208,
    0 8px 18px #151f3208;
  display: grid;
  grid-template: auto / 1fr auto;
  inset: 0 0 auto;
  position: sticky;
  z-index: 9;

  nav {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    place-items: center baseline;

    &:first-of-type {
      grid-template: auto / auto 1fr;
    }

    a {
      &:first-of-type {
        border: 1px solid;
        padding: 10px 20px;
      }
    }
  }
}

nav {
  background-color: #ffffff;
  padding: 20px;

  ul {
    display: flex;
    gap: 40px;

    li {
      cursor: pointer;

      svg {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  form {
    display: flex;
    margin: 0 0 0 auto;
  }
}
</style>
