<template>
    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"  @click="handleOutsideClick">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full ">
        <h2 class="text-2xl font-semibold mb-6">Add Student</h2>
        
        <form @submit.prevent="submitStudent">
          <!-- Admission Year -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Admission Year</label>
          <input v-model="studentData.admissionYear" type="number" required class="input-field" placeholder="Admission Year" />
  
          <!-- Gender -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <select v-model="studentData.gender" required class="input-field">
            <option disabled value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
  
          <!-- Position -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Position</label>
          <input v-model="studentData.position" type="text" class="input-field" placeholder="Position" />
  
          <!-- Stream -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Stream</label>
          <input v-model="studentData.stream" type="text" readonly class="input-field" />
  
          <!-- First Name -->
          <label class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input v-model="studentData.firstName" type="text" required class="input-field" placeholder="First Name" />
  
          <!-- Last Name -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input v-model="studentData.lastName" type="text" required class="input-field" placeholder="Last Name" />
  
          <!-- Email -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input v-model="studentData.email" type="email" required class="input-field" placeholder="Email" />
  
          <!-- Role (read-only) -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <input v-model="studentData.role" type="text" readonly class="input-field text-gray-500" />
  
          <!-- Submit Button -->
          <div class="flex justify-end mt-6">
            <button @click="closeModal" type="button" class="btn-secondary">Cancel</button>
            <button type="submit" class="btn-primary ml-2">Add Student</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import axios from 'axios';
  
  const props = defineProps({
    showModal: Boolean,
    closeOnOutsideClick: Boolean,
  });
  
  const emit = defineEmits(['close']);
  const authStore = useAuthStore();
  
  const studentData = ref({
    admissionYear: '',
    gender: '',
    position: '',
    stream: generateStream(),
    firstName: '',
    lastName: '',
    email: '',
    role: 'ROLE_STUDENT',
  });
  
  function closeModal() {
    emit('close');
  }
  
  function generateStream() {
    const streams = ["WEST", "EAST", "NORTH", "SOUTH"];
    return streams[Math.floor(Math.random() * streams.length)];
  }
  

  
  // Set Authorization header with token
  const setAuthHeader = () => {
    const token = authStore.token;
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };
  
  // Submit student data to the backend
  async function submitStudent() {
    try {
      setAuthHeader(); // Ensure the header is set before making the request
  
      // Send the data to the backend
      const response = await axios.post('/students/add', studentData.value);
  
      if (response.status !== 200) {
        throw new Error('Failed to add student');
      }
  
      // Reset form and close modal on successful submission
      resetForm();
      closeModal();
      alert('Student added successfully');
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the student');
    }

  }
  
  
  function resetForm() {
    studentData.value = {
      admissionYear: '',
      gender: '',
      position: '',
      stream: generateStream(),
      firstName: '',
      lastName: '',
      email: '',
      role: 'ROLE_STUDENT',
    };
  }


  const handleOutsideClick = (event) => {
  if (props.closeOnOutsideClick && event.target === event.currentTarget) {
    closeModal();
  }
};
  </script>
  
  <style scoped>
  .input-field {
    width: 100%;
    padding: 8px;
    margin-bottom: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-primary {
    background-color: #4f46e5;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-secondary {
    background-color: #e5e7eb;
    color: #374151;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  