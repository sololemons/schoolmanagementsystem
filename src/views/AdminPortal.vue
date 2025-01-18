<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl -mt-28">
      
      <!-- Add Student Card -->
      <div
        class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:bg-indigo-100 cursor-pointer"
        @click="openModal('student')"
      >
        <div class="text-indigo-500 text-4xl mb-2">+</div>
        <div class="text-gray-700 font-semibold">Add Student</div>
      </div>

      <!-- Add Staff Card -->
      <div
        class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:bg-indigo-100 cursor-pointer"
        @click="openModal('staff')"
      >
        <div class="text-indigo-500 text-4xl mb-2">+</div>
        <div class="text-gray-700 font-semibold">Add Staff</div>
      </div>

      <!-- Update Notice Board Card -->
      <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:bg-indigo-100 cursor-pointer">
        <div class="text-indigo-500 text-4xl mb-2">📌</div>
        <div class="text-gray-700 font-semibold">Update Notice Board</div>
      </div>

      <!-- View Students Card -->
      <router-link
      to="/viewStudents"
      class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:bg-indigo-100 cursor-pointer"
    >
      <div class="text-indigo-500 text-4xl mb-2">👥</div>
      <div class="text-gray-700 font-semibold">View Students</div>
    </router-link>
<!-- View Staff Card -->
<router-link
  to="/viewStaff"
  class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:bg-indigo-100 cursor-pointer"
>
  <div class="text-indigo-500 text-4xl mb-2">👥</div>
  <div class="text-gray-700 font-semibold">View Staff</div>
</router-link>

      <!-- Set Timetables Card -->
      <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:bg-indigo-100 cursor-pointer">
        <div class="text-indigo-500 text-4xl mb-2">📝</div>
        <div class="text-gray-700 font-semibold">Set Timetables and Schedules</div>
      </div>

      <!-- View Timetables Card -->
      <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:bg-indigo-100 cursor-pointer">
        <div class="text-indigo-500 text-4xl mb-2">📅</div>
        <div class="text-gray-700 font-semibold">View Timetables</div>
      </div>

      <!-- View Departments Card -->
      <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col hover:bg-indigo-100 cursor-pointer">
        <div class="text-indigo-500 text-4xl mb-2">🏬</div>
        <div class="text-gray-700 font-semibold">View Departments</div>
      </div>
    </div>

    <!-- Add Student Modal -->
    <StudentModal
      :showModal="showStudentModal"
      :closeOnOutsideClick="true"
      @close="closeModal('student')"
    />

    <!-- Add Staff Modal -->
    <StaffModal
      :showModal="showStaffModal"
      :closeOnOutsideClick="true"
      @close="closeModal('staff')"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StudentModal from '@/components/Modals/StudentModal.vue';
import StaffModal from '@/components/Modals/StaffModal.vue';

// Reactive states for modals
const showStudentModal = ref(false);
const showStaffModal = ref(false);

// Function to open a specific modal
const openModal = (type) => {
  if (type === 'student') {
    showStudentModal.value = true;
  } else if (type === 'staff') {
    showStaffModal.value = true;
  }
};

// Function to close a specific modal
const closeModal = (type) => {
  if (type === 'student') {
    showStudentModal.value = false;
  } else if (type === 'staff') {
    showStaffModal.value = false;
  }
};
</script>
