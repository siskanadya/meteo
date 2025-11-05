import { createRouter, createWebHistory } from "vue-router";
import Ville from "@/views/Ville.vue";

const routes = [
  { path: "/", redirect: "/ville/bordeaux" },
  { path: "/ville/:code", name: "ville", component: Ville },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
