import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: () => import("../components/views/Home/HomeComponent.vue") },
    {
      path: "/contact",
      component: () => import("../components/views/Contact/ContactComponent.vue"),
    },
    {
      path: "/experience",
      component: () => import("../components/views/Experience/ExperienceComponent.vue"),
    },
    { path: "/skills", component: () => import("../components/views/Skills/SkillsComponent.vue") },
  ],
});

export default router;
