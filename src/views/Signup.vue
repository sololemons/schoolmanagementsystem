<template>
  <div class="flex items-center justify-center bg-gray-100 py-6">
    <div class="bg-white rounded-lg shadow-lg p-8 md:p-16 w-full max-w-md">
      <h1 class="text-teal-600 font-bold text-2xl text-center mb-7 mt-8">SIGN UP</h1>

      <!-- Avatar Images -->
      <div class="flex justify-center mb-6">
        <img
          src="@/assets/logo.jpeg"
          alt="Company Logo"
          class="w-24 h-24 rounded-full object-cover shadow-md"
        />
      </div>
      <div class="flex justify-center mb-6">
        <img
          src="@/assets/avatar.png"
          alt="User Avatar"
          class="w-24 h-24 rounded-full object-cover shadow-md"
        />
      </div>

      <form class="space-y-6" @submit.prevent="handleSignup">
        <!-- First Name Field -->
        <input
          v-model="firstName"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
        />

        <!-- Last Name Field -->
        <input
          v-model="lastName"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
        />

        <!-- Email Field -->
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
        />

        <!-- Password Field -->
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          class="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
        />

        <!-- Signup Button -->
        <button
          type="submit"
          class="w-full py-3 rounded-md bg-teal-500 text-white font-semibold hover:bg-teal-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const authStore = useAuthStore()

const handleSignup = async () => {
  try {
    await authStore.register({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    })

    router.push('/Login')
  } catch (error) {
    console.error('Signup failed:', error)
  }
}

</script>

<style scoped>
/* Additional custom styles can be added here */
</style>
