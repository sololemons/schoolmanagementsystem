<template>
<div class="bg-slate-100">

    <div class="bg-slate-300 text-center justify-center">
        <h1 class="text-4xl text-green-400 font-extrabold ">{{ name }} <span class="">Grades</span></h1>
    </div>
    <div>
        <table class="flex items-center">
<thead>
    <tr>
    <td>Admission Number</td>
    <td colspan="6">SUBJECTS</td>
    </tr>
  
</thead>

    <tr>
        <td>1234</td>
        <td>Kiswahili</td>
        <td>English</td>
    </tr>

         
        </table>
    </div>
</div>
  


</template>
<script setup>
import { useAuthStore } from '@/stores/auth';
const authStore= useAuthStore()

const name= authStore.getfirstName;
console.log(name);
</script>