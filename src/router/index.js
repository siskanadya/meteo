import { createRouter, createWebHistory } from "vue-router";
import Ville from "@/views/Ville.vue";
import Home from "@/views/meteo.vue";
import About from "@/views/About.vue";
import LegalNotices from "@/views/LegalNotices.vue";

const routes = [
  { path: "/", redirect: "/ville/bordeaux" },
  { path: "/ville/:code", name: "ville", component: Ville },
  { path: "/mentions-legales", name: "mentions-legales", component: LegalNotices },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
