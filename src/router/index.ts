import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/views/Home/HomeComponent.vue"
      ),
    meta: {
      title: "Home",
      icon: "mdi-home",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
