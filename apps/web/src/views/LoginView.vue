<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useSeo } from '../composables/useSeo';

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

const email = ref('');
const password = ref('');
const localError = ref<string | null>(null);

useSeo(
  () => 'Connexion catalog-ai | optimisation e-commerce IA',
  () => 'Connecte-toi à catalog-ai pour optimiser tes fiches produit e-commerce avec l’IA.',
);

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
  <div class="mx-auto max-w-lg space-y-10 py-4 md:py-8">
    <header class="space-y-3 text-center md:text-left">
      <p class="oc-label">Espace membre</p>
      <h1 class="font-display text-display-sm font-semibold text-wood-900 md:text-display">
        Connexion
      </h1>
      <p class="max-w-md text-base leading-relaxed text-wood-600 md:text-lg">
        Accède à tes catalogues et poursuis tes optimisations là où tu les as laissées.
      </p>
    </header>

    <div class="oc-card-solid border-l-4 border-l-clay-500 p-8 md:p-10">
      <form class="space-y-6" @submit.prevent="submit">
        <p
          v-if="localError"
          class="rounded-xl border border-red-200/80 bg-red-50/90 px-4 py-3 text-sm text-red-800"
        >
          {{ localError }}
        </p>
        <div>
          <label class="text-sm font-medium text-wood-800">Email</label>
          <input v-model="email" type="email" required autocomplete="email" class="oc-input" />
        </div>
        <div>
          <label class="text-sm font-medium text-wood-800">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
            class="oc-input"
          />
        </div>
        <button type="submit" class="oc-btn-primary w-full" :disabled="auth.loading">
          {{ auth.loading ? 'Connexion…' : 'Se connecter' }}
        </button>
      </form>
    </div>

    <p class="text-center text-sm text-wood-600 md:text-base">
      Pas encore de compte ?
      <RouterLink to="/register" class="oc-link">Créer un compte</RouterLink>
    </p>
  </div>
</template>
