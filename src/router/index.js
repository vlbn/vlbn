import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

// linkActiveClass: "underline";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
