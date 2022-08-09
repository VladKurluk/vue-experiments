import { createRouter, createWebHistory } from "vue-router";
import LayoutExample from "../views/LayoutExample.vue";
import ProductLayoutExample from "@/views/product/ProductLayoutExample";

const routes = [
  {
    path: "/",
    name: "LayoutExample",
    component: LayoutExample,
  },
  {
    path: "/products",
    name: "ProductLayoutExample",
    component: ProductLayoutExample,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
