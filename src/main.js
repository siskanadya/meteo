import { createApp } from "vue";
import App from "./App.vue";

// ✅ Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

import router from "./router"; // ✅ on importe le router

createApp(App).use(router).mount("#app");