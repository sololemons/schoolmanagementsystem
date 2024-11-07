<template>
    <div>
      <!-- Main Content -->
      <section class="bg-white dark:bg-gray-900 pt-10 pb-14 pr-5">
        <div class="grid max-w-screen-xl px-3 py-8 mx-5 my-1 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <!-- Left Column for Image Slideshow -->
          <div class="lg:col-span-5 col-span-12"> <!-- Use col-span-12 for small screens -->
            <div class="slideshow relative overflow-hidden">
              <div
                v-for="(slide, index) in slides"
                :key="index"
                class="slide absolute inset-0 transition-opacity duration-700"
                :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }"
              >
                <img :src="slide" class="w-full h-full object-cover rounded-lg shadow-md" alt="Slide Image" />
              </div>
  
              <!-- Controls -->
              <div class="controls absolute inset-0 flex justify-between items-center p-4">
                <button
                  @click="prevSlide"
                  class="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none"
                >
                  ‹
                </button>
                <button
                  @click="nextSlide"
                  class="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
  
          <!-- Right Column for Text Content -->
          <div class="mr-auto place-self-center lg:col-span-7 col-span-12 pl-8"> <!-- Use col-span-12 for small screens -->
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              WELCOME TO PRECIOUS GIRLS HIGH SCHOOL
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Where Education Meets Excellence. Join us in fostering a brighter future for your children through quality education and holistic development.
            </p>
            <router-link to="/" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Enroll Now
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // Import your images for the slideshow
  import slide1 from '@/assets/slide1.png';
  import slide2 from '@/assets/slide2.png';
  import slide3 from '@/assets/slide3.jpg';
  // You can add more slides if needed
  const slides = ref([slide1, slide2 ,slide3]);
  const currentSlide = ref(0);
  
  // Function to go to the next slide
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  };
  
  // Function to go to the previous slide
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
  };
  
  // Set up interval for automatic sliding
  let interval;
  onMounted(() => {
    interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });
  onUnmounted(() => {
    clearInterval(interval);
  });
  </script>
  
  <style scoped>
  .slide {
    position: absolute;
    inset: 0;
    transition: opacity 1s ease-in-out;
  }
  
  .opacity-100 {
    opacity: 1;
  }
  
  .opacity-0 {
    opacity: 0;
  }
  
  .slideshow {
    width: 100%;
    height: 50vh; /* Make height responsive */
    position: relative;
    border-radius: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .slideshow {
      height: 50vh; /* Adjust height for smaller screens */
    }
  }
  </style>
  