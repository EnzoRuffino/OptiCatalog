<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

const email = ref('');
const password = ref('');
const localError = ref<string | null>(null);

async function submit() {
  localError.value = null;
  try {
    await auth.login(email.value, password.value);
    const redirect = (route.query.redirect as string) || '/dashboard';
    await router.push(redirect);
  } catch {
    localError.value = auth.error;
  }
}
</script>

<template>
  <div class="mx-auto max-w-md space-y-6">
    <div>
      <h1 class="text-2xl font-semibold text-slate-900">Connexion</h1>
      <p class="mt-1 text-sm text-slate-600">Accède à tes catalogues et produits.</p>
    </div>
    <form class="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm" @submit.prevent="submit">
      <p v-if="localError" class="text-sm text-red-600">{{ localError }}</p>
      <div>
        <label class="block text-sm font-medium text-slate-700">Email</label>
        <input
          v-model="email"
          type="email"
          required
          autocomplete="email"
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          required
          autocomplete="current-password"
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
      </div>
      <button
        type="submit"
        class="w-full rounded-md bg-brand-600 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
        :disabled="auth.loading"
      >
        {{ auth.loading ? 'Connexion…' : 'Se connecter' }}
      </button>
    </form>
    <p class="text-center text-sm text-slate-600">
      Pas encore de compte ?
      <RouterLink to="/register" class="font-medium text-brand-600 hover:text-brand-700">
        Créer un compte
      </RouterLink>
    </p>
  </div>
</template>
