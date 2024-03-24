<template>
  <div>
    <h1>User Post</h1>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <h2>User Details</h2>
      <p>ID: <input type="text" v-model="userDetails.id"></p>
      <p>Username: <input type="text" v-model="userDetails.username"></p>
      <p>Password: <input type="text" v-model="userDetails.password"></p>
      <p>Created At: <input type="text" v-model="userDetails.createdAt"></p>
      <button @click="postUser">Post User</button>
      <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const userDetails = ref({
  id: '',
  username: '',
  password: '',
  createdAt: '',
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const postUser = async () => {
  loading.value = true;
  try {
    const response = await axios.post('https://65ff6604df565f1a61450cf8.mockapi.io/api/users', userDetails.value);
    successMessage.value = 'User created successfully!';
    errorMessage.value = '';
    console.log('User posted:', response.data);
  } catch (error) {
    successMessage.value = '';
    errorMessage.value = 'Error posting user!';
    console.error('Error posting user:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
