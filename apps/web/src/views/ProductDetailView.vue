<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { api } from '../api/client';

type Generation = {
  id: string;
  optimizedTitle: string;
  optimizedDescription: string;
  seoKeywords: string;
  seoScore: number;
  createdAt: string;
};

type ProductDetail = {
  id: string;
  originalTitle: string;
  originalDescription: string;
  price: number;
  generation: Generation | null;
};

const route = useRoute();
const projectId = route.params.projectId as string;
const productId = route.params.productId as string;

const product = ref<ProductDetail | null>(null);
const loading = ref(true);
const optimizing = ref(false);
const error = ref<string | null>(null);

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const { data } = await api.get<ProductDetail>(
      `/projects/${projectId}/products/${productId}`,
    );
    product.value = data;
  } catch {
    error.value = 'Produit introuvable.';
  } finally {
    loading.value = false;
  }
}

async function optimize() {
  optimizing.value = true;
  error.value = null;
  try {
    const { data } = await api.post<ProductDetail>(
      `/projects/${projectId}/products/${productId}/optimize`,
    );
    product.value = data;
  } catch {
    error.value = "L'optimisation a échoué.";
  } finally {
    optimizing.value = false;
  }
}

onMounted(load);
</script>

<template>
  <div class="space-y-8">
    <RouterLink
      :to="`/projects/${projectId}`"
      class="text-sm font-medium text-brand-600 hover:text-brand-700"
    >
      ← Retour au catalogue
    </RouterLink>

    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
    <p v-if="loading" class="text-sm text-slate-500">Chargement…</p>

    <template v-else-if="product">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 class="text-2xl font-semibold text-slate-900">{{ product.originalTitle }}</h1>
        <button
          type="button"
          class="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          :disabled="optimizing"
          @click="optimize"
        >
          {{ optimizing ? 'Optimisation…' : 'Lancer l’optimisation IA' }}
        </button>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <section class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-amber-700">Avant</h2>
          <p class="mt-2 text-lg font-medium text-slate-900">{{ product.originalTitle }}</p>
          <p class="mt-3 whitespace-pre-wrap text-sm text-slate-600">{{ product.originalDescription }}</p>
          <p class="mt-4 text-sm text-slate-500">Prix : {{ product.price.toFixed(2) }} €</p>
        </section>

        <section class="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-emerald-800">Après (IA)</h2>
          <template v-if="product.generation">
            <p class="mt-2 text-lg font-medium text-slate-900">{{ product.generation.optimizedTitle }}</p>
            <p class="mt-3 whitespace-pre-wrap text-sm text-slate-700">
              {{ product.generation.optimizedDescription }}
            </p>
            <p class="mt-4 text-sm text-slate-600">
              Mots-clés : {{ product.generation.seoKeywords }}
            </p>
            <p class="mt-2 text-sm font-medium text-emerald-800">
              Score SEO : {{ product.generation.seoScore }} / 100
            </p>
          </template>
          <p v-else class="mt-4 text-sm text-slate-600">
            Pas encore de version optimisée — clique sur le bouton ci-dessus.
          </p>
        </section>
      </div>
    </template>
  </div>
</template>
