import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterOptions,
} from "vue-router";
import Article from "../components/pages/Home.vue";
import Auth from "../components/pages/Auth.vue";
import Editor from "../components/pages/Editor.vue";
import Home from "../components/pages/Home.vue";
import Profile from "../components/pages/Profile.vue";
import Settings from "../components/pages/Settings.vue";

const BASE_PATH = "/#/";

const ROUTES: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/login", component: Auth },
  { path: "/register", component: Auth },
  { path: "/settings", component: Settings },
  { path: "/editor/:articleSlug", component: Editor },
  { path: "/article/:articleSlug", component: Article },
  { path: "/profile/:userName", component: Profile },
  { path: "/profile/:userName/favorites", component: Profile },
];

const defaultRouterOptions: RouterOptions = {
  history: createWebHistory(BASE_PATH),
  routes: ROUTES,
};

export const createVueRouter = (options?: Partial<RouterOptions>) =>
  createRouter({
    ...defaultRouterOptions,
    ...options,
  });
