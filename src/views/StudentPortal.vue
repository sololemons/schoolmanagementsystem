<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-10">
        <div class="flex items-center justify-center h-16 bg-blue-700">
          <h1 class="text-2xl font-bold text-white">Dashboard</h1>
        </div>
        <nav class="mt-8">
          <ul class="space-y-3">
            <li>
                <router-link
                  to="Assignments"
                  class="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                >       
         <div class="px-2"><img  src="@/assets/profile-user.png" class="size-24"/><span class="text-sm font-extrabold">Profile</span> </div>
                </router-link>
              </li>
            
            <li>
              <router-link
                to="/Finances"
                class="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
              >       
       <div class="px-2">   <img  src="@/assets/fees.png" class="size-24"/><span class="text-sm font-extrabold">Finances & FEES</span> </div>
              </router-link>
            </li>

            <li>
                <router-link
                  to="/Assignments"
                  class="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                >       
         <div class="px-2">   <img  src="@/assets/homework.png" class="size-24"/><span class="text-sm font-extrabold">Assignments</span> </div>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/NoticeBoard"
                  class="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                >       
         <div class="px-2">   <img  src="@/assets/News.png" class="size-24"/><span class="text-sm font-extrabold">Notice Board</span> </div>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/Grades"
                  class="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                >       
         <div class="px-2">   <img  src="@/assets/Grading.png" class="size-24"/><span class="text-sm font-extrabold">Grades</span> </div>
                </router-link>
              </li>

              <li>
                <router-link
                  to="/Resources"
                  class="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                >       
         <div class="px-2">   <img  src="@/assets/Resources.png" class="size-24"/><span class="text-sm font-extrabold">Resources</span> </div>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/Settings"
                  class="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                >       
         <div class="px-2">   <img  src="@/assets/Settings.png" class="size-24"/><span class="text-sm font-extrabold">Settings</span> </div>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/"
                  class="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                >       
         <div class="px-2">   <img  src="@/assets/logout.png" class="size-24"/><span class="text-sm font-extrabold">Log Out</span> </div>
                </router-link>
              </li>

          </ul>
        </nav>

      </aside>
  
      <!-- Main Content -->
      <div class="flex-1 ml-64 p-6 overflow-auto">
        <h2 class="text-2xl font-semibold text-gray-700">Welcome to Your Dashboard</h2>
        <p class="mt-4 text-gray-500">This is where your main content will go.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  // Import icons (you can use Heroicons or any other icon library)

  </script>
  
  <style scoped>
  /* Scrollbar customization for better UX */
  .aside {
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: thin;
  }
  .aside::-webkit-scrollbar {
    width: 6px;
  }
  .aside::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 3px;
  }
  .aside::-webkit-scrollbar-track {
    background-color: #f7fafc;
  }
  </style>
  