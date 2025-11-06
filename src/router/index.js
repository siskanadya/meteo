import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Meteo.vue";
import About from "../views/About.vue";
import LegalNotices from "../views/LegalNotices.vue";

const routes = [
  { path: "/", name: "accueil", component: Home },
  { path: "/about", name: "about", component: About },
  {
    path: "/mentions-legales",
    name: "mentions-legales",
    component: LegalNotices,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
