<template>
  <div>
    <h1>User Delete</h1>

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
      <button @click="deleteUser">Delete User</button>
      <p v-if="loading">Loading...</p>
      <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const userId = ref('');
const userDetails = ref(null);
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const getUserDetails = async () => {
  try {
    const response = await axios.get(`https://65ff6604df565f1a61450cf8.mockapi.io/api/users/${userId.value}`);
    userDetails.value = response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
}

const deleteUser = async () => {
  loading.value = true;
  try {
    const response = await axios.delete(`https://65ff6604df565f1a61450cf8.mockapi.io/api/users/${userId.value}`);
    successMessage.value = 'User deleted successfully!';
    errorMessage.value = '';
    console.log('User deleted:', response.data);
  } catch (error) {
    successMessage.value = '';
    errorMessage.value = 'Error deleting user!';
    console.error('Error deleting user:', error);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
