<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 class="text-red-600 text-4xl font-bold mb-4">Access Denied</h1>
        <p class="text-gray-700 mb-6">You do not have permission to access this page.</p>
        <button 
          @click="goBack" 
          class="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600">
          Go Back
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goBack = () => {
    router.push({ name: 'Home' }); // Redirects to the Home page, replace 'Home' with your homepage route
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  