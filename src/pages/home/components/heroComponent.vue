<script lang="ts" setup>
import { ref } from "vue";

const array = ref([
  {
    id: 0,
    name: "Le Gruyère",
    content: `Switzerland is known for a wide variety of amazing cheeses, but if there's one that has particularly captivated the world, it's Gruyere.`,
    picture: ["https://placehold.co/2048x1080/393B44/FFF.jpg", "https://placehold.co/2048x1080/393B44/FFF.webp"],
    video: "https://placehold.co/2048x1080/393B44/FFF.mp4",
  },
]);
</script>

<template>
  <section v-for="item in array" :key="item.id">
    <article>
      <h1>{{ item.name }}</h1>
      <p>
        {{ item.content }}
      </p>

      <a>
        Новости недели

        <span>
          <svg width="50" height="50">
            <use xlink:href="@/assets/icons.svg#chevron"></use>
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
  background-color: #393b44;
  position: relative;
  height: calc(100vh - 154.8px);

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
      margin: auto 0 0;
      font-size: 72px;
    }

    p {
      max-width: 600px;
    }

    a {
      cursor: pointer;
      max-width: 200px;
      margin: auto 0 0;

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
