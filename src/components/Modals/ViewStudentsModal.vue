<template>
    <div class="min-h-screen bg-gray-100 p-5">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-2xl font-semibold mb-5">Students</h1>
  
        <!-- Filter Section -->
        <div class="mb-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Search by Admission ID -->
          <input
            v-model="filters.AdmissionId"
            type="text"
            placeholder="Search by Admission ID"
            class="p-2 border rounded input"
          />
  
          <!-- Search by Admission Year -->
          <input
            v-model="filters.AdmissionYear"
            type="text"
            placeholder="Search by Admission Year"
            class="p-2 border rounded "
          />
  
          <!-- Filter by Stream -->
          <select v-model="filters.Stream" class="p-2 border rounded ">
            <option value="">All Streams</option>
            <option value="WEST">WEST</option>
            <option value="EAST">EAST</option>
            <option value="NORTH">NORTH</option>
            <option value="SOUTH">SOUTH</option>
          </select>
        </div>
  
        <!-- Student Cards -->
        <div v-if="filteredStudents.length > 0" class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <div
            v-for="student in filteredStudents"
            :key="student.AdmissionId"
            class="bg-emerald-100  py-6 px-10 rounded-lg shadow hover:bg-green-500"
          >
            <h3 class="font-bold">{{ student.firstName }} {{ student.lastName }}</h3>
            <div class="font-semibold ">
            <p>Admission ID: {{ student.AdmissionId }}</p>
            <p>Admission Year: {{ student.AdmissionYear }}</p>
            <p>Stream: {{ student.Stream }}</p>
            </div>
          </div>
        </div>
  
        <p v-else class="text-gray-500 text-center">
          {{ filteredStudents.length === 0 && students.length === 0
            ? "No students found."
            : "No results after filtering." }}
        </p>
  
        <!-- Pagination -->
        <div v-if="hasMoreStudents" class="mt-4 text-center">
          <button @click="loadMoreStudents" class="bg-blue-500 text-white px-4 py-2 rounded">
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
  const students = ref([]);
  const filters = ref({
    AdmissionId: '',
    AdmissionYear: '',
    Stream: '',
  });
  const page = ref(0);
  const pageSize = 10;
  const hasMoreStudents = ref(true);
  
  // Computed Property
  const filteredStudents = computed(() => {
    const hasFilters =
      filters.value.AdmissionId ||
      filters.value.AdmissionYear ||
      filters.value.Stream;
  
    if (!hasFilters) {
      return students.value.slice(0, 5); // Show first 5 students if no filters
    }
  
    return students.value.filter((student) => {
      const matchesAdmissionId = filters.value.AdmissionId
        ? String(student.AdmissionId).includes(filters.value.AdmissionId)
        : true;
      const matchesAdmissionYear = filters.value.AdmissionYear
        ? String(student.AdmissionYear).includes(filters.value.AdmissionYear)
        : true;
      const matchesStream = filters.value.Stream
        ? student.Stream === filters.value.Stream
        : true;
  
      return matchesAdmissionId && matchesAdmissionYear && matchesStream;
    });
  });
  
  // Fetch Students
  const fetchStudents = async () => {
    try {
      const response = await axios.get('/students/students', {
        params: {
          page: page.value,
          pageSize: pageSize,
        },
      });
  
      const fetchedStudents = response.data.content || response.data.students; // Adjust for backend structure
  
      if (fetchedStudents && fetchedStudents.length > 0) {
        if (page.value === 0) {
          students.value = fetchedStudents;
        } else {
          students.value = [...students.value, ...fetchedStudents];
        }
        hasMoreStudents.value = fetchedStudents.length === pageSize;
      } else {
        hasMoreStudents.value = false;
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  
  // Pagination
  const loadMoreStudents = () => {
    page.value++;
    fetchStudents();
  };
  
  // Watch Filters
  const debouncedFetch = debounce(fetchStudents, 300);
  watch(
    filters,
    () => {
      page.value = 0; // Reset page for new filters
      debouncedFetch();
    },
    { deep: true }
  );
  
  // Initial Fetch
  fetchStudents();
  </script>
    