<script lang="ts" setup>
import bannerComponent from "@/components/bannerComponent.vue";
import planComponent from "@/pages/plans/components/planComponent.vue";

const plans = [
  {
    id: 1,
    name: "Бесплатный",
    cost: 0,
    features: ["Доступ к более чем 2 000 профессиональных рецептур, статей и руководств (не более пяти в день)"],
  },
  {
    id: 2,
    name: "Специалист",
    cost: 499,
    features: [
      "Неограниченный доступ к более чем 2 000 профессиональных рецептур, статей и руководств",
      "Эксклюзивные новые рецепты от шеф-повара и подробная информация",
      "Идеи для бизнеса в сфере общественного питания",
      "Доступ к более чем 1 000 теxнологическиx карт для предприятий",
      "Эксклюзивные скидки и предложения",
    ],
  },
  {
    id: 3,
    name: "Премиум",
    cost: 999,
    features: [
      "Все что включено в план “Специалист”, а так же:",
      "Весь необходимый информационный материал для самостоятельного открытия точки общественного питания",
    ],
  },
];
</script>

<template>
  <main>
    <bannerComponent />

    <section>
      <planComponent v-for="el in plans" :key="el.id" :data="el" />
    </section>

    <section>
      <svg width="36" height="17">
        <use xlink:href="@/assets/icons.svg#knife"></use>
      </svg>

      <h2>Откройте для себя Клуб</h2>

      <p>
        Общайтесь с лучшими шеф-поварами как никогда раньше. Готовьте по их рецептам, смотрите, как они создают свои любимые блюда, и получайте беспрецедентное
        представление о том, что заставляет их работать, превращая вас в лучшего повара, каким вы только можете быть.
      </p>

      <video src="https://placehold.co/2048x1080/393B44/FFF.mp4"></video>
    </section>

    <section>
      <svg width="36" height="17">
        <use xlink:href="@/assets/icons.svg#knife"></use>
      </svg>

      <h2>FAQs</h2>

      <p>
        Чтобы получить полную информацию о том, что вы получите, вступив в наш клуб, перейдите по ссылке. Ниже приведены некоторые из наиболее часто задаваемых
        нами вопросов.
      </p>

      <ul>
        Что такое закрытый клуб и в чем его особенность?

        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem esse dignissimos nostrum vero minus nihil ullam non qui quis delectus, libero, ipsum
          dolor alias? Molestiae eum, accusantium odit praesentium ut, sit ex explicabo nostrum, autem quo quam aspernatur unde dolore et eveniet nemo harum
          esse nobis aliquid at reiciendis perspiciatis rerum cupiditate animi! Illum, alias mollitia rem assumenda aperiam nihil quo ad possimus fugit officia
          reiciendis, dolorum unde autem a rerum nulla iure eaque quia commodi voluptatibus adipisci ducimus at placeat. Atque, eveniet quidem quaerat sint
          minus quod perferendis tempore distinctio deleniti odit pariatur dolore possimus, dicta odio nam eos.
        </li>
      </ul>

      <ul>
        Что я получу, если стану участником Специалист и Премиум уровней?

        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem esse dignissimos nostrum vero minus nihil ullam non qui quis delectus, libero, ipsum
          dolor alias? Molestiae eum, accusantium odit praesentium ut, sit ex explicabo nostrum, autem quo quam aspernatur unde dolore et eveniet nemo harum
          esse nobis aliquid at reiciendis perspiciatis rerum cupiditate animi! Illum, alias mollitia rem assumenda aperiam nihil quo ad possimus fugit officia
          reiciendis, dolorum unde autem a rerum nulla iure eaque quia commodi voluptatibus adipisci ducimus at placeat. Atque, eveniet quidem quaerat sint
          minus quod perferendis tempore distinctio deleniti odit pariatur dolore possimus, dicta odio nam eos.
        </li>
      </ul>

      <ul>
        Что я получу, если присоединюсь к бесплатному уровню?

        <li>
          Пользователи, присоединившиеся к бесплатному уровню, получают дополнительно два рецепта или блюда в день (всего пять), по сравнению с пользователями,
          не создавшими аккаунт (которые получают только три). Вы также получите доступ к странице учетной записи, где вы сможете подписаться на рассылку
          новостей и использовать личную папку для сохранения ваших любимых рецептов.
        </li>
      </ul>

      <ul>
        Как мне будет выставляться счет?

        <li>
          Членство будет автоматически продлеваться каждый месяц или двенадцать месяцев, в зависимости от того, платите ли вы ежемесячно или ежегодно. Мы всегда
          будем снимать деньги с того же счета, на который вы изначально подписались - если вы хотите использовать другой счет, пожалуйста, свяжитесь с нами.
        </li>
      </ul>

      <ul>
        Что произойдет, если я стану Специалист или Премиум?

        <li>
          Как только вы вступите в наш клуб, вы будете перенаправлены в раздел для участников, где вы найдете все наши рецепты и функции, доступные только для
          участников. Мы также отправим вам подтверждение по электронной почте, как только ваше членство будет подтверждено.
        </li>
      </ul>

      <ul>
        Что, если я захочу отменить свое членство?

        <li>
          Вы можете отменить свое членство в любое время - просто напишите нам на membership@restresource.ru. Вы сможете просматривать наш премиум-контент до
          тех пор, пока не закончится срок действия вашего членства.
        </li>
      </ul>

      <ul>
        А если у меня возникнет другой вопрос?

        <li>Пожалуйста, свяжитесь с нами по адресу support@restresource.ru, и мы будем рады помочь!</li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 1200px;
  margin: auto;

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  section {
    display: grid;
    grid-template: auto / auto;
    gap: 40px;
    margin: 40px auto;
    place-items: center;

    p {
      max-width: 600px;
    }

    video {
      width: 100%;
    }

    ul {
      font-size: 18px;
      font-weight: 400;
      width: 100%;

      li {
        font-size: 15px;
        font-weight: 300;
        margin: 10px 0 0;
      }
    }

    &:nth-child(2) {
      grid-template: auto / repeat(3, 1fr);
      place-items: baseline;
    }
  }
}
</style>
