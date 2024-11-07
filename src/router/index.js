import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import StudentPortal from '@/views/StudentPortal.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    {
        path:"/",
      name: "Home",
    component: Home


    },
   {
path: "/Login",
name: "Login",
component: Login

   },

   {

    path: "/Signup",
    name :"Signup",
    component: Signup
   },
   {
    path: "/StudentPortal",
    name: "StudentPortal",
    component: StudentPortal

   }

  ]
})

export default router