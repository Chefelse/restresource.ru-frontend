<template>
  <article>
    <h3>Присоединяйся к нам</h3>

    <p>
      Станьте участником нашего клуба и получите неограниченный доступ к более чем 10 000 рецептов, информационного материала, руководств и видео, а также
      множество других преимуществ и привилегий.
    </p>

    <p>Уже являетесь членом клуба? Войдите в клуб через меню в заголовке, а затем вернитесь на эту страницу для повышения статуса.</p>

    <button>Вступить в клуб</button>
  </article>
</template>

<style lang="scss" scoped>
article {
  background-color: #393b44;
  display: grid;
  gap: 20px;
  color: #ffffff;
  padding: 80px clamp(20px, 10vw, 200px);

  h3 {
    margin: auto;
  }

  button {
    border: 1px solid;
    cursor: pointer;
    margin: auto;
    padding: 12px 30px;

    &:hover {
      background-color: #ffffff20;
    }
  }
}
</style>
