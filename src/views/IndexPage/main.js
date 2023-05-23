import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

// 阻止默认事件
document.addEventListener(
  "touchstart",
  (e) => {
    e.preventDefault();
  },
  {
    passive: false,
  }
);
const app = createApp(App);
app.use(router).mount("#app");
