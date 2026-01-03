import { createRouter, createWebHistory, type RouteComponent } from "vue-router";

type Routes = {
  component: RouteComponent;
  icon: string;
  name: string;
  path: string;
};

export const ROUTES: Routes[] = [
  {
    name: "Home",
    path: "/",
    component: () => import("../components/views/Home/HomeComponent.vue"),
    icon: "mdi-home",
  },
  {
    name: "Experience",
    path: "/experience",
    component: () => import("../components/views/Experience/ExperienceComponent.vue"),
    icon: "mdi-timeline",
  },
  {
    name: "Skills",
    path: "/skills",
    component: () => import("../components/views/Skills/SkillsComponent.vue"),
    icon: "mdi-xml",
  },
  {
    name: "Contact",
    path: "/contact",
    component: () => import("../components/views/Contact/ContactComponent.vue"),
    icon: "mdi-email",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES,
});

export default router;
