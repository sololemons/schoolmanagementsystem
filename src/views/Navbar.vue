
<template>
    <body class="bg-slate-200">
      <!-- Navbar -->
      <nav class="bg-slate-200 shadow-md py-14 -mb-24">
        <div class="max-w-7xl mx-auto px-5 sm:px-5 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
               
                
                <div class="flex justify-center mb-6">
                    <img
                      src="@/assets/logo.jpeg" 
                      alt="Company Logo"
                      class="w-24 h-24 rounded-full object-cover shadow-md"
                    />
                  </div>
              <!-- Logo -->
              <div class="flex-shrink-0 flex items-center">
               
                <a href="/" class="text-2xl font-bold text-indigo-600">School Mannagement System</a>
              </div>
             
           
              
              <!-- Links -->
              <div class="hidden sm:-my-px sm:ml-6 sm:flex space-x-8">
                <a href="#" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>

      

    
                <!-- Dropdown Menu -->
                <div class="relative group">
                  <button class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                    Portals
                    <svg class="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.292 7.292a1 1 0 011.416 0L10 10.586l3.292-3.294a1 1 0 111.416 1.416l-4 4a1 1 0 01-1.416 0l-4-4a1 1 0 010-1.416z" clip-rule="evenodd"/>
                    </svg>
                  </button>
                  <!-- Dropdown Content -->
                  <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md w-48 z-20">
                    <router-link to="/StudentPortal" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white"> 👥Student Portal</router-link>
                    <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">👥Staff Portal</a>
                    <router-link to="/AdminPortal" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white"> 👥Admin Portal</router-link>
              
                  </div>
                </div>

                <div class="relative group">
                    <button class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                      Academics
                      <svg class="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.292 7.292a1 1 0 011.416 0L10 10.586l3.292-3.294a1 1 0 111.416 1.416l-4 4a1 1 0 01-1.416 0l-4-4a1 1 0 010-1.416z" clip-rule="evenodd"/>
                      </svg>
                    </button>
                   
                    <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md w-48 z-20">
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">E-learning Hub</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">Elibrary</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">Departments</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">Courses offered</a>
                      <a href="#"  class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">Application Form</a>
        
                    </div>
                </div>
                <div class="relative group">
                    <button class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                      About
                      <svg class="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.292 7.292a1 1 0 011.416 0L10 10.586l3.292-3.294a1 1 0 111.416 1.416l-4 4a1 1 0 01-1.416 0l-4-4a1 1 0 010-1.416z" clip-rule="evenodd"/>
                      </svg>
                    </button>
                   
                    <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md w-48 z-20">
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">Location</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">Achievements</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">Contacts</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white">Mission,Visions and Values</a>
        
                    </div>
                  </div>
      
    
                  
              </div>
            </div>
    
                 <!-- Authentication Buttons -->
          <div class="hidden sm:flex sm:items-center ">
            <!-- Show Login and Signup buttons if user is not authenticated -->
            <div  class="space-x-4" v-if="!isAuthenticated">
              <router-link to="/Login" class="text-white bg-indigo-600 hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </router-link>
              <router-link to="/Signup" class="text-white bg-indigo-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                Sign Up
              </router-link>
            </div>
            <!-- Show Logout button if user is authenticated -->
            <div v-else>
              <button @click="logout" class="text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      </nav>
    
      <!-- Content -->
      <div class="max-w-7xl mx-auto px py-12">

      </div>
    </body>
 
    
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth'; // Assume auth store is set up in Pinia or Vuex
import { useRouter }  from 'vue-router'

const authStore = useAuthStore();
const router = useRouter();

// Computed property to check authentication status
const isAuthenticated = computed(() => authStore.isAuthenticated);

// Method to log out
function logout() {
  authStore.logout(); 
  router.push('/')
  // Implement the logout action in your auth store
}

</script>

<style>

</style>