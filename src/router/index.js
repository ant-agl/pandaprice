import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
    },
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register/",
    name: "register",
    meta: {
      layout: "auth",
    },
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/forgot/",
    name: "forgot",
    meta: {
      layout: "auth",
    },
    component: () => import("@/views/ForgotView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
