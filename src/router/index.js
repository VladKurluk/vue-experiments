import { createRouter, createWebHistory } from "vue-router";
import { checkPermission } from "@/components/common/permission/checkPermission";

const Home = () => import("../views/HomeView.vue");
const Forbidden = () => import("@/views/ForbiddenView.vue");
const Admin = () => import("@/views/AdminView.vue");
const Moderator = () => import("@/views/ModeratorView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/forbidden",
    name: "Forbidden",
    component: Forbidden,
  },
  {
    path: "/moderator",
    name: "Moderator",
    component: Moderator,
    meta: {
      permission: {
        roles: ["moderator", "admin"],
        config: {
          noAccessRedirect: "/",
          debug: true,
        },
      },
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      permission: {
        roles: ["admin"],
        config: {
          type: "one-of",
          debug: true,
        },
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // If there are no permissions to check then proceed
  if (!to.meta.permission) return next();
  const { roles = [], config = {} } = to.meta.permission;
  // If there are no roles then proceed
  if (!roles.length) return next();
  // Check if user should have access to the next page
  const hasAccess = checkPermission(roles, config);
  // Access granted
  if (hasAccess) {
    return next();
  }
  // No access!
  next(to.meta.permission?.noAccessRedirect || "/forbidden");
});

export default router;
