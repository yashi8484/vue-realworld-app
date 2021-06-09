import { App } from "@vue/runtime-core";
import { createVueRouter } from "./createVueRouter";

export const initializeVueInstance = (vueInstance: App) => {
  const router = createVueRouter();
  vueInstance.use(router);
};
