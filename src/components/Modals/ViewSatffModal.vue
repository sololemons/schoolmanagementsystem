<template>
    <div class="min-h-screen bg-gray-100 p-5">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-2xl font-semibold mb-5">Staff Members</h1>
  
        <!-- Filter Section -->
        <div class="mb-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Search by Staff ID -->
          <input
            v-model="filters.staffID"
            type="text"
            placeholder="Search by Staff ID"
            class="p-2 border rounded input"
          />
  
          <!-- Search by Year of Joining -->
          <input
            v-model="filters.admissionYear"
            type="text"
            placeholder="Search by Year of Joining"
            class="p-2 border rounded"
          />
  
          <!-- Filter by Department -->
          <select v-model="filters.department" class="p-2 border rounded">
            <option value="">All Departments</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Administration">Administration</option>
          </select>
        </div>
  
        <!-- Staff Cards -->
        <div v-if="filteredStaff.length > 0" class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="staff in filteredStaff"
            :key="staff.staffID"
            class="bg-blue-100 py-6 px-10 rounded-lg shadow hover:bg-blue-500"
          >
            <h3 class="font-bold">{{ staff.firstName }} {{ staff.lastName }}</h3>
            <div class="font-semibold">
              <p>Staff ID: {{ staff.staffID }}</p>
              <p>Year of Joining: {{ staff.admissionYear }}</p>
              <p>Department: {{ staff.department }}</p>
            </div>
          </div>
        </div>
  
        <p v-else class="text-gray-500 text-center">
          {{ filteredStaff.length === 0 && staff.length === 0
            ? "No staff members found."
            : "No results after filtering." }}
        </p>
  
        <!-- Pagination -->
        <div v-if="hasMoreStaff" class="mt-4 text-center">
          <button @click="loadMoreStaff" class="bg-blue-500 text-white px-4 py-2 rounded">
            Load More
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  import axios from 'axios';
  import { debounce } from 'lodash';
  
  // State
  const staff = ref([]);
  const filters = ref({
    staffID: '',
    admissionYear: '',
    department: '',
  });
  const page = ref(0);
  const pageSize = 10;
  const hasMoreStaff = ref(true);
  
  // Computed Property
  const filteredStaff = computed(() => {
    const hasFilters =
      filters.value.staffID || 
      filters.value.admissionYear || 
      filters.value.department;
  
    if (!hasFilters) {
      return staff.value.slice(0, 5); // Show first 5 staff members if no filters
    }
  
    return staff.value.filter((member) => {
      const matchesStaffId = filters.value.staffID
        ? String(member.staffID).includes(filters.value.staffID)
        : true;
      const matchesYearOfJoining = filters.value.admissionYear
        ? String(member.admissionYear).includes(filters.value.admissionYear)
        : true;
      const matchesDepartment = filters.value.department
        ? member.department === filters.value.department
        : true;
  
      return matchesStaffId && matchesYearOfJoining && matchesDepartment;
    });
  });
  
  // Fetch Staff
  const fetchStaff = async () => {
    try {
      const response = await axios.get('/staff/staff', {
        params: {
          page: page.value,
          pageSize: pageSize,
        },
      });
  
      const fetchedStaff = response.data.content || response.data.staff; // Adjust for backend structure
  
      if (fetchedStaff && fetchedStaff.length > 0) {
        if (page.value === 0) {
          staff.value = fetchedStaff;
        } else {
          staff.value = [...staff.value, ...fetchedStaff];
        }
        hasMoreStaff.value = fetchedStaff.length === pageSize;
      } else {
        hasMoreStaff.value = false;
      }
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };
  
  // Pagination
  const loadMoreStaff = () => {
    page.value++;
    fetchStaff();
  };
  
  // Watch Filters
  const debouncedFetch = debounce(fetchStaff, 300);
  watch(
    filters,
    () => {
      page.value = 0; // Reset page for new filters
      debouncedFetch();
    },
    { deep: true }
  );
  
  // Initial Fetch
  fetchStaff();
  </script>
  