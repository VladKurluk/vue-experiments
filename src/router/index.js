import { createRouter, createWebHistory } from "vue-router";
import ProductLayoutExample from "@/views/product/ProductLayoutExample";

const routes = [
  {
    path: "/",
    name: "ProductLayoutExample",
    component: ProductLayoutExample,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
