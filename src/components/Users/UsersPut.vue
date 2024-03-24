<template>
  <div>
    <h1>User Put</h1>

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
      <p>ID: <input type="text" v-model="userDetails.id" disabled></p>
      <p>Username: <input type="text" v-model="userDetails.username"></p>
      <p>Password: <input type="text" v-model="userDetails.password"></p>
      <p>Created At: <input type="text" v-model="userDetails.createdAt" disabled></p>
      <button @click="updateUser" :disabled="loading">Update User</button>
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

const updateUser = async () => {
  loading.value = true;
  try {
    const response = await axios.put(`https://65ff6604df565f1a61450cf8.mockapi.io/api/users/${userId.value}`, userDetails.value);
    console.log('User updated:', response.data);
    successMessage.value = 'User updated successfully!';
    errorMessage.value = '';
  } catch (error) {
    console.error('Error updating user:', error);
    successMessage.value = '';
    errorMessage.value = 'Error updating user!';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
