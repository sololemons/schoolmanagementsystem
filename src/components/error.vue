<!-- src/components/ErrorMessage.vue -->
<template>
    <div v-if="message" class="fixed top-0 left-0 right-0 bg-red-500 text-white text-center py-3 z-50">
      {{ message }}
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  
  const authStore = useAuthStore();
  const message = computed(() => authStore.errorMessage);
  </script>
  