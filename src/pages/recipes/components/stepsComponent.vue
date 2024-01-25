<script lang="ts" setup>
import type { Recipe } from "../types";

const props = defineProps<{
  data: Recipe;
}>();
</script>

<template>
  <article :class="{ private: props.data.private }">
    <h3>Способ приготовления</h3>

    <template v-if="props.data.private">
      <ul>
        <li v-for="(el, i) in props.data.steps.slice(0, 2)" :key="i">
          <span>{{ i + 1 }}</span>
          {{ el.content }}
        </li>
      </ul>
    </template>

    <template v-else>
      <ul>
        <li v-for="(el, i) in props.data.steps" :key="i">
          <span>{{ i + 1 }}</span>
          {{ el.content }}
        </li>
      </ul>

      <ul v-for="(el, i) in props.data.related" :key="i">
        <h3>{{ el.name }}</h3>
        <li v-for="(step, idx) in el.steps" :key="idx">
          <span>{{ idx + 1 }}</span>

          {{ step.content }}
        </li>
      </ul>
    </template>
  </article>
</template>

<style lang="scss" scoped>
article {
  border: 1px solid #eeeeee;
  display: grid;
  padding: 20px;
  position: relative;

  ul {
    display: grid;
    gap: 20px;

    li {
      display: grid;
      grid-template: auto / 24px auto;
      gap: 10px;
      place-items: start;

      span {
        font-size: 1.5rem;
        line-height: 1.2;
      }
    }

    li {
      &:last-of-type {
        span {
          opacity: 0;
        }
      }
    }
  }

  &.private {
    &::before {
      content: "";

      background: rgb(255, 255, 255);
      background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.298739564185049) 100%);

      position: absolute;
      inset: 0;
    }
  }
}
</style>
