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
    <transition name="fade">
      <loaderComponent v-if="store.loader" />
    </transition>

    <component :is="Component" />
  </router-view>
</template>

<style lang="scss">
@import "@/assets/scss/reset.scss";
@import "@fontsource/roboto/300.css";
@import "@fontsource/roboto/400.css";

:root {
  --c-background: 255, 255, 255; // #f8fafc
  --c-dark: 34, 39, 46; // #22272e
  --c-theme: 66, 165, 245; // #42a5f5
  --t-transition: 0.2s;
}

body {
  color: rgb(var(--c-dark));

  font:
    300 15px / 1.5 "Roboto",
    sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--t-transition) ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

img {
  display: block;
}
</style>
