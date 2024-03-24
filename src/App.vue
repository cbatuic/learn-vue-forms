<script setup>
import Menubar from "primevue/menubar";
import { useRouter } from 'vue-router';
import router from "./router";
import { ref } from "vue";

const items = [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          command: () => {
            router.push('/');
          }
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-list",
          route: "/users",
          command: () => {
            router.push('/users');
          }
        },
        {
          label: "Categories",
          icon: "pi pi-fw pi-list",
          route: "/categories",
          command: () => {
            router.push('/categories');
          }
        },
        {
          label: "Expenses",
          icon: "pi pi-fw pi-list",
          route: "/expenses",
          command: () => {
            router.push('/expenses');
          }
        }
      ];
</script>

<template>
    <div>  
      <ul>
        <li><a href="/">Home</a></li>
        <li>Users</li>
        <ul>
          <li><a href="/usersgetall">Get All Users</a></li>
          <li><a href="/usersgetid">Get Users</a></li>
          <li><a href="/userspost">Post User</a></li>
          <li><a href="/usersput">Put User</a></li>
          <li><a href="/usersdelete">Delete User</a></li>
        </ul>
      </ul>
      <router-view></router-view>
    </div>

</template>

<style scoped>

</style>