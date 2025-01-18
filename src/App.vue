
<template>
    <div>
 <Navbar/>

<loading/>
<error/>

 <router-view></router-view>

 <Footer/>
    </div>
</template>

<script setup>
import Navbar from './views/Navbar.vue';
import Footer from './views/Footer.vue';
import loading from './components/loading.vue';
import error from './components/error.vue';

</script>

<style scoped>

</style>
