import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "portafolio",
    component: () => import("@/views/PortaFolio.vue"),
    meta: { transition: "fade" },
  },
  {
    path: "/sweet",
    name: "sweet",
    component: () => import("@/views/SweeT.vue"),
    meta: { transition: "fade" },
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/NoEncontrado.vue"),
    meta: { transition: "moda" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
