import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import StudentPortal from '@/views/StudentPortal.vue'
import { requireAuth } from '@/router/authGuard'
import AdminPortal from '@/views/AdminPortal.vue'
import NotAuthorized from '@/components/NotAuthorized.vue'
import ViewStudentsModal from '@/components/Modals/ViewStudentsModal.vue'
import ViewSatffModal from '@/components/Modals/ViewSatffModal.vue'
import Grades from '@/components/StudentComponents/Grades.vue'

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
    component: StudentPortal,
    meta: { role: 'ROLE_STUDENT' },
    beforeEnter: requireAuth

   },

   {
    path: "/AdminPortal",
    name:  "AdminPortal",
    component: AdminPortal,
    meta: {  role: 'ROLE_ADMIN'},
    beforeEnter: requireAuth,
   },
   {
path: "/viewStudents",
name: "ViewStudents",
component:ViewStudentsModal,

   },
   {
      path:"/viewStaff",
      name:"viewStaff",
      component:ViewSatffModal
   },
   {
      path:"/Grades",
      name: "Grades",
      component:Grades
   },
   {
path: "/401",
name: "NotAuthorized",
component: NotAuthorized

   }



  ]
})

export default router