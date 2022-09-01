import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "portafolio",
    component: () => import("@/views/PortaFolio.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/NoEncontrado.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
