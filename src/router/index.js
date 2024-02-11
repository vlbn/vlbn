import { createRouter, createWebHistory } from "vue-router";

import LostAndFound from "@/views/LostAndFound.vue";

const routes = [
  {
    path: "/",
    name: "portafolio",
    component: () => import("@/views/PortaFolio.vue"),
    meta: { transition: "fade" },
  },
  {
    path: "/:catchAll(.*)",
    name: "where do we go now?",
    component: LostAndFound,
    meta: { transition: "moda" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
