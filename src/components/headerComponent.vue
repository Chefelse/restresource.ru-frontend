<script lang="ts" setup>
import logotypeComponent from "@/components/logotypeComponent.vue";
import { provide, ref } from "vue";
import { RouterLink } from "vue-router";
import headerModalComponent from "./headerModalComponent.vue";

const active = ref(false);

provide("active", active);
</script>

<template>
  <header>
    <nav>
      <logotypeComponent></logotypeComponent>

      <RouterLink :to="{ name: 'home' }" custom v-slot="{ navigate }">
        <svg width="160" height="40" v-on:click="navigate">
          <use xlink:href="@/assets/icons.svg#text-logo"></use>
        </svg>
      </RouterLink>
    </nav>

    <nav>
      <RouterLink :to="{ name: 'plans' }">Подписаться</RouterLink>
      <RouterLink :to="{ name: 'signin' }">Войти</RouterLink> |
      <RouterLink :to="{ name: 'signin' }">Регистрация</RouterLink>
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

  <headerModalComponent v-if="active" />
</template>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
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

      svg {
        &:last-of-type {
          cursor: pointer;
        }
      }
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
