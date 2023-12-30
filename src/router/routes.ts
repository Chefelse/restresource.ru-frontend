export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/views/homeView.vue"),
    meta: {
      name: "Главная",
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/pages/signin/views/signinView.vue"),
    meta: {
      name: "Авторизация в системе",
    },
  },
  {
    path: "/collection/:id",
    name: "collection",
    component: () => import("@/pages/collection/views/collectionView.vue"),
    meta: {
      name: "Коллекция",
    },
  },
  {
    path: "/recipes/:id",
    name: "recipe",
    component: () => import("@/pages/recipes/views/recipeView.vue"),
    meta: {
      name: "Рецепт",
    },
  },
  {
    path: "/plans",
    name: "plans",
    component: () => import("@/pages/plans/views/plansView.vue"),
    meta: {
      name: "Планы",
    },
  },
];
