// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Meteo from "@/views/meteo.vue";
import LegalNotices from "@/views/LegalNotices.vue";

const routes = [
  { path: "/", name: "home", component: Meteo },
  { path: "/mentions-legales", name: "mentions-legales", component: LegalNotices },

  // 👇 compat so /ville/bordeaux still shows Meteo
  { path: "/ville/:code", name: "ville-compat", component: Meteo },

  // optional: catch-all to home
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export default createRouter({ history: createWebHistory(), routes });
