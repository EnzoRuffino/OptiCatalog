<script setup lang="ts">
import type { Product as CatalogProduct } from '@opticatalog/types';
import { computed, onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { api } from '../api/client';

type ProductRow = CatalogProduct & {
  generation?: {
    id: string;
    optimizedTitle: string;
    seoScore: number;
  } | null;
};

const route = useRoute();
const projectId = computed(() => route.params.projectId as string);

const projectName = ref('');
const products = ref<ProductRow[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const form = ref({
  originalTitle: '',
  originalDescription: '',
  price: 0,
});

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const [projRes, prodRes] = await Promise.all([
      api.get(`/projects/${projectId.value}`),
      api.get<ProductRow[]>(`/projects/${projectId.value}/products`),
    ]);
    projectName.value = (projRes.data as { name: string }).name;
    products.value = prodRes.data;
  } catch {
    error.value = 'Projet introuvable ou accès refusé.';
  } finally {
    loading.value = false;
  }
}

async function addProduct() {
  if (!form.value.originalTitle.trim()) return;
  error.value = null;
  try {
    await api.post(`/projects/${projectId.value}/products`, {
      originalTitle: form.value.originalTitle,
      originalDescription: form.value.originalDescription,
      price: Number(form.value.price),
    });
    form.value = { originalTitle: '', originalDescription: '', price: 0 };
    await load();
  } catch {
    error.value = "Impossible d'ajouter le produit.";
  }
}

onMounted(load);
</script>

<template>
  <div class="space-y-8">
    <div>
      <RouterLink to="/dashboard" class="text-sm font-medium text-brand-600 hover:text-brand-700">
        ← Retour aux projets
      </RouterLink>
      <h1 class="mt-4 text-2xl font-semibold text-slate-900">
        {{ projectName || 'Chargement…' }}
      </h1>
      <p class="mt-1 text-sm text-slate-600">Liste des produits de ce catalogue.</p>
    </div>

    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>

    <section class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500">Ajouter un produit</h2>
      <form class="mt-4 grid gap-3 sm:grid-cols-2" @submit.prevent="addProduct">
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-slate-600">Titre</label>
          <input
            v-model="form.originalTitle"
            required
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-xs font-medium text-slate-600">Description</label>
          <textarea
            v-model="form.originalDescription"
            required
            rows="3"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-600">Prix</label>
          <input
            v-model.number="form.price"
            type="number"
            min="0"
            step="0.01"
            class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div class="flex items-end">
          <button type="submit" class="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            Ajouter
          </button>
        </div>
      </form>
    </section>

    <section v-if="loading" class="text-sm text-slate-500">Chargement…</section>

    <ul v-else class="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
      <li v-for="p in products" :key="p.id" class="flex items-center justify-between gap-4 px-4 py-3">
        <div>
          <p class="font-medium text-slate-900">{{ p.originalTitle }}</p>
          <p class="text-xs text-slate-500">
            {{ p.generation ? `Optimisé · score SEO ${p.generation.seoScore}` : 'Pas encore optimisé' }}
          </p>
        </div>
        <RouterLink
          :to="`/projects/${projectId}/products/${p.id}`"
          class="shrink-0 rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Détail
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
