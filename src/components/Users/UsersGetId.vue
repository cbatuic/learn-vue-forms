<template>
  <div>
    <h1>User Get Id</h1>

    <div>
      Enter ID: <input type="text" v-model="userId">
    </div>
    <br>
    <div>
      <button @click="getUserDetails">Get User Details</button>
    </div>
    <br>
    <div v-if="userDetails">
      <h2>User Details</h2>
      <p>ID: {{ userDetails.id }}</p>
      <p>Username: {{ userDetails.username }}</p>
      <p>Password: {{ userDetails.password }}</p>
      <p>Created At: {{ userDetails.createdAt }}</p>
    </div>    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const userId = ref('');
const userDetails = ref(null);

const getUserDetails = async () => {
  try {
    const response = await axios.get(`https://65ff6604df565f1a61450cf8.mockapi.io/api/users/${userId.value}`);
    userDetails.value = response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
