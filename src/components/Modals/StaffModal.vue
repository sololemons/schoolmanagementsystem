<template>
    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"  @click="handleOutsideClick">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full ">
        <h2 class="text-2xl font-semibold mb-6">Add Staff</h2>
        
        <form @submit.prevent="submitStaff">
          <!-- Admission Year -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Admission Year</label>
          <input v-model="staffData.admissionYear" type="number" required class="input-field" placeholder="Admission Year" />
  
          <!-- Gender -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <select v-model="staffData.gender" required class="input-field">
            <option disabled value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
  
          <!-- Position -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Position</label>
          <input v-model="staffData.position" type="text" class="input-field" placeholder="Position" />
        
          <!-- Phone Number -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input v-model="staffData.phoneNumber" type="text" required class="input-field" placeholder="First Name" />
         
          <!-- First Name -->
          <label class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input v-model="staffData.firstName" type="text" required class="input-field" placeholder="First Name" />
  
          <!-- Last Name -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input v-model="staffData.lastName" type="text" required class="input-field" placeholder="Last Name" />
  
          <!-- Email -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input v-model="staffData.email" type="email" required class="input-field" placeholder="Email" />

          <!-- Department -->
      <label class="block text-gray-700 text-sm font-bold mb-2">Department</label>
      <select v-model="staffData.department" required class="input-field">
        <option disabled value="">Select Department</option>
        <option value="Science">Science</option>
        <option value="Maths">Maths</option>
        <option value="Arts">Arts</option>
        <option value="Technicals">Technicals</option>
        <option value="English">English</option>
        <option value="Kiswahili">Kiswahili</option>
        <option value="Foreign Languages">Foreign Languages</option>
      </select>
  
          <!-- Role (read-only) -->
          <label class="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <input v-model="staffData.role" type="text" readonly class="input-field text-gray-500" />
  
          <!-- Submit Button -->
          <div class="flex justify-end mt-6">
            <button @click="closeModal" type="button" class="btn-secondary">Cancel</button>
            <button type="submit" class="btn-primary ml-2">Add Staff</button>
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
  
  const staffData = ref({
    admissionYear: '',
    gender: '',
    position: '',
   phoneNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    department:'',
    role: 'ROLE_STAFF',
  });
  
  function closeModal() {
    emit('close');
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
  async function submitStaff() {
    try {
      setAuthHeader(); // Ensure the header is set before making the request
  
      // Send the data to the backend
      const response = await axios.post('/staff/add', staffData.value);
  
      if (response.status !== 200) {
        throw new Error('Failed to add staff');
      }
  
      // Reset form and close modal on successful submission
      resetForm();
      closeModal();
      alert('Staff added successfully');
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the staff');
    }

  }
  
  
  function resetForm() {
    staffData.value = {
      admissionYear: '',
      gender: '',
      position: '',
      phoneNumber:'',
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      role: 'ROLE_STAFF',
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
  