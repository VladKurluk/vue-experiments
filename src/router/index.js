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
  },
  {
    path: "/layout/auth",
    name: "Home",
    component: LayoutExample,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
