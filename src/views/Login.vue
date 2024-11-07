<template>
    <div class=" flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 py-5">Log in to your account</h2>
          <div class="flex justify-center mb-6">
            <img
              src="@/assets/logo.jpeg" 
              alt="Company Logo"
              class="w-24 h-24 rounded-full object-cover shadow-md"
            />
          </div>
          <!-- Avatar Image -->
      <div class="flex justify-center mb-6">
        <img
          src="@/assets/avatar.png" 
          alt="User Avatar"
          class="w-24 h-24 rounded-full object-cover shadow-md"
        />
      </div>
        
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div class="mt-4">
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md  sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
  
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600  border-gray-300 rounded" />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>
            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 "
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  // You can add any necessary form submission logic here
  </script>
  