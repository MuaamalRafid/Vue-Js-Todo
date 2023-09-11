import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/todos",
    name: "TodosPage",
    component: () => import("@/views/TodosPage"),
    meta: {
      title: "TodoList",
    },
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import("@/views/ProfilePage"),
    meta: {
      title: "Profile",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
