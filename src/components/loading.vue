<!-- src/components/LoadingSpinner.vue -->
<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  
  const authStore = useAuthStore();
  const show = computed(() => authStore.loading);
  </script>
  
  <style>
  /* You can customize spinner styling here */
  </style>
  