import { defineStore } from 'pinia';
import type { AuthResponse, User } from '@opticatalog/types';
import { ref, computed } from 'vue';
import { api, getAuthToken, setAuthToken } from '../api/client';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(getAuthToken());
  const loading = ref(false);
  const error = ref<string | null>(null);

  const isAuthenticated = computed(() => !!token.value);

  async function hydrate() {
    if (!token.value) return;
    loading.value = true;
    error.value = null;
    try {
      const { data } = await api.get<User | null>('/auth/me');
      user.value = data;
    } catch {
      logout();
    } finally {
      loading.value = false;
    }
  }

  function applyAuthResponse(res: AuthResponse) {
    setAuthToken(res.accessToken);
    token.value = res.accessToken;
    user.value = res.user;
  }

  async function login(email: string, password: string) {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await api.post<AuthResponse>('/auth/login', { email, password });
      applyAuthResponse(data);
    } catch (e: unknown) {
      error.value = 'Connexion impossible. Vérifie tes identifiants.';
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function register(email: string, password: string) {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await api.post<AuthResponse>('/auth/register', { email, password });
      applyAuthResponse(data);
    } catch (e: unknown) {
      error.value = "Inscription impossible (email déjà utilisé ?).";
      throw e;
    } finally {
      loading.value = false;
    }
  }

  function logout() {
    setAuthToken(null);
    token.value = null;
    user.value = null;
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    hydrate,
    login,
    register,
    logout,
  };
});
