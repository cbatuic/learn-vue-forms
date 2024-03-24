<template>
  <div>
    <h1>Users Get All</h1>
    <h2>Users Table</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Password</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.createdAt }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://65ff6604df565f1a61450cf8.mockapi.io/api/users');
    users.value = response.data || [];
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

onMounted(fetchUsers);
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>