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
    path: "/recipe",
    name: "recipe",
    component: () => import("@/pages/recipes/views/recipeView.vue"),
    meta: {
      name: "Рецепты",
    },
  },
];
