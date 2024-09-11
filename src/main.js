import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "../css/style.min.css";
import "../css/responsive.css";
import router from "./router/navigation";


const app = createApp(App);
app.use(router);
app.mount("#app");
