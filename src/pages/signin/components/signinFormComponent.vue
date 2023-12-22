<script lang="ts" setup>
import { ref } from "vue";
import type { Guest } from "../types";

const form = ref<Guest>({ email: null, password: null });
</script>

<template>
  <form @submit.prevent="$emit('send-form', form)">
    <label>
      Адрес эл.почты
      <input type="text" placeholder="" v-model="form.email" />
    </label>

    <label>
      Пароль
      <input type="password" placeholder="" v-model="form.password" />
    </label>

    <button>Забыли пароль?</button>

    <button>Войти</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: grid;
  gap: 20px;
  grid-template: auto / auto auto;
  place-items: center stretch;
  margin: 20px 0 0;

  label {
    display: inherit;
    gap: 10px;
    grid-column: 1 / -1;

    input {
      border: 1px solid #00000010;
      padding: 10px;
    }
  }

  button {
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
    padding: 12px 32px;
    text-align: center;

    &:hover {
      background-color: #00000020;
    }
  }
}
</style>
