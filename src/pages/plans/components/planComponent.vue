<script lang="ts" setup>
const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <article>
    <h3>{{ props.data.name }}</h3>

    <svg width="36" height="17">
      <use xlink:href="@/assets/icons.svg#knife"></use>
    </svg>

    <h2>
      <span>&#8381;</span>

      {{ props.data.cost }}.0
    </h2>

    <strong>в месяц</strong>

    <template v-if="props.data.cost !== 0">
      <p>Эквивалентно {{ props.data.cost * 12 }}.0 за 12 месяцев</p>

      <p>- или -</p>

      <p>Ежемесячное членство: <strong>&#8381;</strong> {{ Math.floor(props.data.cost * 12 * 0.1) }}.0 в месяц</p>

      <hr />
    </template>

    <h4>Вы получите:</h4>

    <ul>
      <li v-for="(el, i) in props.data.features" :key="i">{{ el }}</li>
    </ul>

    <button>Подтвердить</button>
  </article>
</template>

<style lang="scss" scoped>
article {
  background-color: #eee;

  ul {
    display: grid;
    gap: 20px;

    li {
      list-style: disc;
    }
  }
}

article {
  display: grid;
  gap: 20px;
  height: fit-content;
  place-items: center;
  padding: 40px;

  span {
    vertical-align: top;
    font-size: 1rem;
  }

  strong {
    font-weight: 400;
  }

  hr {
    border: 0.5px solid #393b44;
    max-width: 100px;
    margin: auto;
    width: 100%;
  }

  button {
    border: 1px solid #393b44;
    padding: 12px 30px;

    &:hover {
      background-color: #393b44;
      color: #ffffff;
    }
  }

  &:last-of-type {
    background-color: #393b44;
    color: #bba250;

    hr {
      border-color: #bba250;
    }

    button {
      border-color: #bba250;

      &:hover {
        background-color: #bba250;
        color: #393b44;
      }
    }
  }
}
</style>
