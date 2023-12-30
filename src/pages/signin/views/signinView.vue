<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useSignin } from "../store/useSignin";
import type { Guest } from "../types";

const signinFormComponent = defineAsyncComponent(() => import("../components/signinFormComponent.vue"));

const router = useRouter();

const { write } = useSignin();

const message = ref<string | null>(null);

const sendForm = (event: Guest) => {
  write(event)
    .then(() => {
      router.push({ name: "home" });
    })
    .catch((error) => {
      message.value = error.message;
    });
};
</script>

<template>
  <main>
    <section>
      <h1>Авторизация с помощью социальных сетей</h1>

      <nav>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 17">
              <path
                fill="#000"
                d="M10.454 5.664a3.349 3.349 0 0 0-.44-.962 2.717 2.717 0 0 0-.693-.716 2.974 2.974 0 0 0-.925-.455 3.908 3.908 0 0 0-1.14-.156c-.781 0-1.467.194-2.059.581-.587.388-1.044.952-1.372 1.693-.328.736-.492 1.636-.492 2.7 0 1.064.161 1.969.484 2.714.324.746.781 1.315 1.373 1.708.591.388 1.29.582 2.095.582.731 0 1.355-.13 1.872-.388a2.78 2.78 0 0 0 1.193-1.111c.279-.478.418-1.042.418-1.693l.656.097H7.487V7.827h6.39V9.75c0 1.342-.283 2.495-.85 3.46a5.793 5.793 0 0 1-2.341 2.222c-.995.517-2.133.776-3.416.776-1.432 0-2.69-.316-3.773-.947-1.084-.637-1.93-1.539-2.536-2.707C.36 11.38.06 9.989.06 8.379c0-1.238.179-2.342.537-3.312.363-.974.87-1.8 1.521-2.475a6.574 6.574 0 0 1 2.275-1.544 7.37 7.37 0 0 1 2.811-.53c.865 0 1.67.127 2.416.38a6.436 6.436 0 0 1 1.984 1.06 5.733 5.733 0 0 1 1.424 1.633 5.55 5.55 0 0 1 .709 2.073h-3.282Z"
              />
            </svg>

            Google
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16">
              <path
                fill="#000"
                d="M13.072 15.486C4.872 15.486.195 9.864 0 .51h4.107c.135 6.866 3.163 9.774 5.562 10.373V.51h3.868v5.921c2.368-.255 4.856-2.953 5.696-5.921H23.1c-.644 3.658-3.343 6.356-5.261 7.465 1.919.9 4.992 3.253 6.161 7.51h-4.258c-.914-2.848-3.192-5.051-6.205-5.351v5.352h-.465Z"
              />
            </svg>

            Вконтакте
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 23">
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M11.85 9.323a5.437 5.437 0 0 1-7.703 0 5.437 5.437 0 0 1 0-7.703 5.437 5.437 0 0 1 7.703 0 5.437 5.437 0 0 1 0 7.703ZM8 2.983a2.46 2.46 0 0 0-1.744.726c-.436.454-.727 1.072-.727 1.744 0 .672.273 1.29.727 1.744a2.397 2.397 0 0 0 1.744.727 2.46 2.46 0 0 0 1.744-.727 2.397 2.397 0 0 0 .726-1.744 2.46 2.46 0 0 0-.726-1.744 2.397 2.397 0 0 0-1.744-.727Z"
                clip-rule="evenodd"
              />
              <path
                fill="#000"
                d="m13.74 10.94 1.598 2.18c.091.109.073.254-.072.345-1.345 1.108-2.907 1.835-4.542 2.216l3.379 5.959c.09.181-.018.381-.218.381h-3.306a.259.259 0 0 1-.237-.163l-2.361-5.269-2.362 5.269c-.036.109-.127.163-.236.163H2.076c-.181 0-.308-.218-.218-.381l3.38-5.959a11.282 11.282 0 0 1-4.542-2.216.275.275 0 0 1-.037-.345l1.6-2.18a.282.282 0 0 1 .38-.037C4.148 12.193 6 13.03 8 13.03c1.998 0 3.851-.836 5.359-2.126a.251.251 0 0 1 .381.037Z"
              />
            </svg>

            Одноклассники
          </li>
        </ul>
      </nav>

      <h2>Авторизация с помощью логина или адреса эл.почты</h2>

      <signinFormComponent @send-form="sendForm($event)" />

      <span v-if="message">{{ message }}</span>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  height: calc(100vh - 154.8px);
  place-items: center;

  section {
    background-color: rgb(var(--c-background));
    box-shadow: 0 5px 5px #00000010;
    padding: 40px;

    nav {
      margin: 0 0 40px;

      ul {
        display: grid;
        grid-template: auto / repeat(3, 1fr);
        gap: 20px;

        li {
          border: 1px solid;
          display: flex;
          gap: 10px;
          place-items: center;
          padding: 10px 20px;
          width: 100%;

          svg {
            height: 30px;
            width: 30px;
          }
        }
      }
    }

    h1 {
      font-size: 22px;
      margin: 0 0 20px;
    }

    h2 {
      font-size: 18px;
      margin: 0 0 20px;
    }

    span {
      color: tomato;
    }
  }
}
</style>
