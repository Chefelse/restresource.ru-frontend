import { useLoader } from "@/stores/useLoader";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = sessionStorage.getItem('ssoid') !== null

//   if (!isAuthenticated && !(to.name === 'signin')) {
//     next({ name: 'signin' })
//   } else if (isAuthenticated && to.name === 'signin') {
//     next({ name: 'home' })
//   } else {
//     next()
//   }
// })

router.beforeEach(async (to, from, next) => {
  const { setLoader } = useLoader();

  setLoader(true);
  next();
});

router.afterEach(() => {
  const { setLoader } = useLoader();

  setTimeout(() => {
    setLoader(false);
  }, 2000);
});

export default router;
