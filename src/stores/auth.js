import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('token'), // Set initial state based on local storage
    token: localStorage.getItem('token') || '',
    user: {},  // This will store user info like role, etc.
    status: '',
    loading: false,
    errorMessage: '',
    role: '',  // Add a role state to store the role
    firstName:'',
  }),

  actions: {
    setLoading(value) {
      this.loading = value;
    },
    setErrorMessage(message) {
      this.errorMessage = message;
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    },

    async login(credentials) {
      this.setLoading(true);
      this.status = 'loading';
      try {
        const response = await axios.post('/auth/authenticate', credentials);
        const { token, role,firstName } = response.data; 

        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        this.token = token;
        this.role = role;  // Store the role in the state
        this.firstName = firstName;
       
        this.user = response.data.user;
        this.isAuthenticated = true;
        this.status = 'success';
      } catch (error) {
        this.status = 'error';
        if (error.response && error.response.status === 401) {
          this.setErrorMessage('Invalid username or password');
        } else {
          this.setErrorMessage('Login failed');
        }
        console.error('Login failed:', error.response?.data || error.message);
        localStorage.removeItem('token');
      } finally {
        this.setLoading(false);
      }
    },

    async register(user) {
      this.status = 'loading';
      this.setLoading(true);
      try {
        const response = await axios.post('/auth/register', user);
        const token = response.data.token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        this.token = token;
        this.user = response.data.user;
        this.isAuthenticated = false;
        this.status = 'success';
      } catch (error) {
        this.status = 'error';
        this.setErrorMessage('Registering failed');
        localStorage.removeItem('token');
        console.error('Registration failed:', error);
        throw error;
      } finally {
        this.setLoading(false);
      }
    },

    logout() {
      this.isAuthenticated = false;
      this.token = '';
      this.user = {};
      this.role = '';  // Clear role on logout
      this.firstName='';
      this.status = '';
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    },
  },

  getters: {
    authStatus: (state) => state.status,
    getRole: (state) => state.role,  // Getter to access the role
    getfirstName: (state) => state.firstName,
  },
});

export default useAuthStore;
