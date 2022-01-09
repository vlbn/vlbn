import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "portfolio",
    component: () => import("@/views/Portfolio.vue"),
  },
  {
    path: "/control",
    name: "control",
    component: () => import("@/views/Control.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "hmmm",
    component: () => import("@/views/Hmmm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
