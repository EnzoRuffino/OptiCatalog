<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useSeo } from '../composables/useSeo';

const auth = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const localError = ref<string | null>(null);

useSeo(
  () => 'Inscription catalog-ai | SaaS optimisation catalogue',
  () => 'Crée un compte catalog-ai et commence à importer et optimiser ton catalogue produit.',
);

async function submit() {
  localError.value = null;
  try {
    await auth.register(email.value, password.value);
    await router.push('/dashboard');
  } catch {
    localError.value = auth.error;
  }
}
</script>

<template>
  <div class="mx-auto max-w-lg space-y-10 py-4 md:py-8">
    <header class="space-y-3 text-center md:text-left">
      <p class="oc-label">Bienvenue</p>
      <h1 class="font-display text-display-sm font-semibold text-wood-900 md:text-display">
        Inscription
      </h1>
      <p class="max-w-md text-base leading-relaxed text-wood-600 md:text-lg">
        Crée ton espace pour importer des produits et lancer des optimisations IA sur mesure.
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
          <label class="text-sm font-medium text-wood-800">Mot de passe (8 caractères min.)</label>
          <input
            v-model="password"
            type="password"
            required
            minlength="8"
            autocomplete="new-password"
            class="oc-input"
          />
        </div>
        <button type="submit" class="oc-btn-primary w-full" :disabled="auth.loading">
          {{ auth.loading ? 'Création…' : "S'inscrire" }}
        </button>
      </form>
    </div>

    <p class="text-center text-sm text-wood-600 md:text-base">
      Déjà inscrit ?
      <RouterLink to="/login" class="oc-link">Se connecter</RouterLink>
    </p>
  </div>
</template>
