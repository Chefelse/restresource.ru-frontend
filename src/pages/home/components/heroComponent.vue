<script lang="ts" setup>
import { ref } from "vue";

const array = ref([
  {
    id: 0,
    name: "Ресторанный ресурс",
    content: `универсальный путеводитель по индустрии питания.`,
    picture: ["https://placehold.co/2048x1080/393B44/FFF.jpg", "https://placehold.co/2048x1080/393B44/FFF.webp"],
    video: "https://placehold.co/2048x1080/393B44/FFF.mp4",
  },
]);
</script>

<template>
  <section v-for="el in array" :key="el.id">
    <article>
      <h1>{{ el.name }}</h1>
      <p>
        {{ el.content }}
      </p>

      <a>
        Новости недели

        <span>
          <svg height="41" viewBox="0 0 21 21" width="41" xmlns="http://www.w3.org/2000/svg">
            <path d="m8.5.5-4 4-4-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 8)" />
          </svg>
        </span>
      </a>
    </article>

    <video loop autoplay>
      <source
        src="//gbcstoragems1.blob.core.windows.net/asset-37e769e0-b8d7-4a4b-b5a5-0403ca6eff2a/sprouts-1_960x540_2250.mp4?sv=2020-08-04&amp;se=2121-07-04T15%3A07%3A35Z&amp;sr=b&amp;sp=r&amp;sig=ps9q8mF9DwFe64%2B9uuNhLSpm3iGy2BZV7MNCvOApEbk%3D"
      />
    </video>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: rgb(var(--c-theme));
  height: calc(100vh - 154.8px);
  position: relative;

  article {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: auto;
    max-width: 1200px;
    padding: 0 var(--scheme-gap);
    position: relative;
    z-index: 1;

    h1 {
      font-size: 72px;
      margin: auto 0 0;
    }

    p {
      font-size: 18px;
      max-width: 600px;
    }

    a {
      cursor: pointer;
      margin: auto 0 0;
      max-width: 200px;

      span {
        background-color: #ffffff40;
        display: block;
        margin: 10px 0 0;
        padding: 5px;

        svg {
          display: block;
          margin: auto;
        }
      }
    }
  }

  video {
    height: 100%;
    inset: 0;
    object-fit: cover;
    opacity: 0.2;
    position: absolute;
    width: 100%;
    z-index: 0;
  }
}

@media only screen and (max-width: 920px) {
  section {
    height: calc(100vh - 90px);
    margin: 90px auto 0;
  }
}
</style>
