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
    path: "/contact",
    name: "contact",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/views/Contact/ContactComponent.vue"
      ),
    meta: {
      title: "Contact",
      icon: "mdi-email",
    },
  },
  {
    path: "/experience",
    name: "experience",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/views/Experience/ExperienceComponent.vue"
      ),
    meta: {
      title: "Experience",
      icon: "mdi-timeline-plus",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
  {
    path: "/skills",
    name: "skills",
    component: () =>
      import(
        /* webpackChunkName: "skills" */ "../components/views/Skills/SkillsComponent.vue"
      ),
    meta: {
      title: "Skills",
      icon: "mdi-xml",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
