import { createRouter, createWebHistory } from "vue-router";
import LayoutExample from "../views/LayoutExample.vue";

const routes = [
  {
    path: "/",
    name: "LayoutExample",
    component: LayoutExample,
  },
  {
    path: "/layout/standard",
    name: "LayoutStandard",
    component: LayoutExample,
    meta: {
      layout: "standard",
    },
  },
  {
    path: "/layout/auth",
    name: "Home",
    component: LayoutExample,
    meta: {
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
