import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import UsersGetAll from "../components/Users/UsersGetAll.vue";
import UsersGetId from "../components/Users/UsersGetId.vue";
import UsersPost from "../components/Users/UsersPost.vue";
import UsersPut from "../components/Users/UsersPut.vue";
import UsersDelete from "../components/Users/UsersDelete.vue"; 

const routes = [
    { path: "/", name: "Home", component: Home, },
    { path: "/usersgetall", name: "UsersGetAll", component: UsersGetAll, },
    { path: "/usersgetid", name: "UsersGetId", component: UsersGetId, },
    { path: "/userspost", name: "UsersPost", component: UsersPost, },
    { path: "/usersput", name: "UsersPut", component: UsersPut, },
    { path: "/usersdelete", name: "UsersDelete", component: UsersDelete, },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;