<script lang="ts" setup>
import headerComponent from "@/components/headerComponent.vue";
import loaderComponent from "@/components/loaderComponent.vue";
import { useLoader } from "@/stores/useLoader";
import { RouterView } from "vue-router";

const store = useLoader();
</script>

<template>
  <headerComponent />
  <router-view v-slot="{ Component }">
    <loaderComponent v-if="store.loader" />

    <component :is="Component" />
  </router-view>
</template>

<style lang="scss">
@import "@/assets/scss/reset.scss";
@import "@fontsource/roboto/300.css";

:root {
  --c-background: 255, 255, 255; // #f8fafc
  --c-dark: 34, 39, 46; // #22272e
  --c-theme: 57, 59, 68; // 393B44
}

body {
  color: rgb(var(--c-dark));

  font:
    300 0.95rem / 1.5 "Roboto",
    sans-serif;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.6rem;
}

h3 {
  font-size: 1.4rem;
}

h4 {
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
a {
  width: fit-content;
}

img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
</style>
