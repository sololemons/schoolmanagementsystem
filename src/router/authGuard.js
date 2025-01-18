import { useAuthStore } from '@/stores/auth';

export const requireAuth = (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    // Redirect unauthenticated users to login
    return next({ path: '/Login' });
  }

  const requiredRole = to.meta.role;
  const userRole = authStore.role; // Assuming `role` is stored in the Pinia auth store

  if (requiredRole && userRole !== requiredRole) {
    // Redirect unauthorized users
    return next({ path: '/401' });
  }

  next(); // Allow access
};
export default requireAuth