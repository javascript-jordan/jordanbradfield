import {
  createRouter,
  createWebHistory,
  type RouteComponent,
  type RouteRecord,
  type RouteRecordRaw,
} from "vue-router";

type Routes = {
  component: RouteComponent;
  icon: string;
  path: string;
};

export const ROUTES: Routes[] = [
  {
    path: "/contact",
    component: () => import("../components/views/Contact/ContactComponent.vue"),
    icon: "mdi-icon",
  },
  {
    path: "/experience",
    component: () => import("../components/views/Experience/ExperienceComponent.vue"),
    icon: "mdi-icon",
  },
  {
    path: "/skills",
    component: () => import("../components/views/Skills/SkillsComponent.vue"),
    icon: "mdi-icon",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES,
});

export default router;
