import { createApp } from "vue";
import App from "./App.vue";
import { initializeVueInstance } from "./utils/initializeVueInstance";

const vueInstance = createApp(App);

initializeVueInstance(vueInstance);

vueInstance.mount("#app");
