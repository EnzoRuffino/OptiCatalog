<script setup lang="ts">
import type { CollectionPage, Product as CatalogProduct } from '@opticatalog/types';
import { computed, onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { api } from '../api/client';
import { useSeo } from '../composables/useSeo';

type ProductRow = CatalogProduct & {
  generation?: {
    id: string;
    optimizedTitle: string;
    seoScore: number;
  } | null;
};

type CollectionRow = CollectionPage & {
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
const collections = ref<CollectionRow[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const uploading = ref(false);

const form = ref({
  originalTitle: '',
  originalDescription: '',
  price: 0,
});

const collectionForm = ref({
  label: '',
  originalDescription: '',
});

const csvFile = ref<File | null>(null);

useSeo(
  () => `${projectName.value || 'Projet'} | catalog-ai`,
  () => `Import CSV, optimisation IA et export SEO pour le projet ${projectName.value || 'catalog-ai'}.`,
);

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const [projRes, prodRes, collRes] = await Promise.all([
      api.get(`/projects/${projectId.value}`),
      api.get<ProductRow[]>(`/projects/${projectId.value}/products`),
      api.get<CollectionRow[]>(`/projects/${projectId.value}/collections`),
    ]);
    projectName.value = (projRes.data as { name: string }).name;
    products.value = prodRes.data;
    collections.value = collRes.data;
  } catch {
    error.value = 'Projet introuvable ou accès refusé.';
  } finally {
    loading.value = false;
  }
}

async function addCollectionPage() {
  if (!collectionForm.value.label.trim()) return;
  error.value = null;
  try {
    await api.post(`/projects/${projectId.value}/collections`, {
      label: collectionForm.value.label,
      originalDescription: collectionForm.value.originalDescription,
    });
    collectionForm.value = { label: '', originalDescription: '' };
    await load();
  } catch {
    error.value = "Impossible d'ajouter la page collection.";
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

function onCsvChange(event: Event) {
  const target = event.target as HTMLInputElement;
  csvFile.value = target.files?.[0] ?? null;
}

async function uploadCsv() {
  if (!csvFile.value) return;
  uploading.value = true;
  error.value = null;
  try {
    const formData = new FormData();
    formData.append('file', csvFile.value);
    await api.post(`/projects/${projectId.value}/uploads/csv`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    csvFile.value = null;
    await load();
  } catch {
    error.value = "Import CSV impossible. Vérifie les colonnes title/description/price.";
  } finally {
    uploading.value = false;
  }
}

function exportCsv() {
  window.open(`/api/projects/${projectId.value}/products/export/csv`, '_blank');
}

onMounted(load);
</script>

<template>
  <div class="space-y-12 md:space-y-14">
    <div class="space-y-6">
      <RouterLink
        to="/dashboard"
        class="inline-flex items-center gap-2 text-sm font-medium text-clay-700 transition hover:text-clay-900"
      >
        <span aria-hidden="true">←</span>
        Retour aux projets
      </RouterLink>
      <header class="max-w-3xl space-y-3">
        <p class="oc-label">Catalogue · SEO e-commerce</p>
        <h1 class="font-display text-display-sm font-semibold text-wood-900 md:text-display">
          {{ projectName || 'Chargement…' }}
        </h1>
        <p class="text-lg text-wood-600">
          Fiches produit, pages catégorie / collection, import CSV et export.
        </p>
      </header>
    </div>

    <p
      v-if="error"
      class="rounded-xl border border-red-200/80 bg-red-50/90 px-4 py-3 text-sm text-red-800"
    >
      {{ error }}
    </p>

    <section class="oc-card-solid p-8 md:p-10">
      <h2 class="oc-label">Import & export CSV</h2>
      <p class="mt-3 max-w-2xl text-wood-600">
        Importe un fichier structuré ou récupère l’ensemble des produits avec les champs optimisés.
      </p>
      <div class="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        <label
          class="flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-wood-300 bg-wood-50/80 px-6 py-8 text-center text-sm text-wood-600 transition hover:border-clay-400/60 hover:bg-white/80 lg:min-w-[14rem] lg:flex-1"
        >
          <input type="file" accept=".csv,text/csv" class="sr-only" @change="onCsvChange" />
          <span v-if="csvFile" class="font-medium text-wood-800">{{ csvFile.name }}</span>
          <span v-else>Choisir un fichier .csv</span>
        </label>
        <div class="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <button
            type="button"
            class="oc-btn-primary"
            :disabled="!csvFile || uploading"
            @click="uploadCsv"
          >
            {{ uploading ? 'Import…' : 'Importer' }}
          </button>
          <button type="button" class="oc-btn-secondary" @click="exportCsv">Exporter (optimisé)</button>
        </div>
      </div>
      <p class="mt-6 text-xs leading-relaxed text-wood-500">
        Colonnes attendues :
        <code class="rounded bg-wood-100 px-1.5 py-0.5 text-wood-700">title</code>
        ou
        <code class="rounded bg-wood-100 px-1.5 py-0.5 text-wood-700">originalTitle</code>
        ,
        <code class="rounded bg-wood-100 px-1.5 py-0.5 text-wood-700">description</code>
        ou
        <code class="rounded bg-wood-100 px-1.5 py-0.5 text-wood-700">originalDescription</code>
        ,
        <code class="rounded bg-wood-100 px-1.5 py-0.5 text-wood-700">price</code>
        .
      </p>
    </section>

    <section class="oc-card-solid p-8 md:p-10">
      <h2 class="oc-label">Pages catégorie / collection (PLP)</h2>
      <p class="mt-3 max-w-2xl text-wood-600">
        Optimise les textes de liste (titre, intro, signaux SEO) en complément des fiches produit.
      </p>
      <form class="mt-8 grid gap-6 sm:grid-cols-2" @submit.prevent="addCollectionPage">
        <div class="sm:col-span-2">
          <label class="text-sm font-medium text-wood-800">Nom de la catégorie ou collection</label>
          <input v-model="collectionForm.label" required class="oc-input" placeholder="Ex. Chaussures running" />
        </div>
        <div class="sm:col-span-2">
          <label class="text-sm font-medium text-wood-800">Contexte (optionnel)</label>
          <textarea
            v-model="collectionForm.originalDescription"
            rows="3"
            class="oc-input"
            placeholder="Public, saison, filtres, promesse…"
          />
        </div>
        <div class="flex items-end">
          <button type="submit" class="oc-btn-secondary w-full sm:w-auto">Ajouter la page</button>
        </div>
      </form>
    </section>

    <section v-if="collections.length" class="space-y-4">
      <h2 class="oc-label px-1">Collections du projet</h2>
      <ul
        class="divide-y divide-wood-200/80 overflow-hidden rounded-3xl border border-wood-200/90 bg-white/85 shadow-soft"
      >
        <li
          v-for="c in collections"
          :key="c.id"
          class="flex flex-col gap-4 px-6 py-5 transition hover:bg-wood-25/80 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div class="min-w-0 flex-1">
            <p class="font-medium text-wood-900">{{ c.label }}</p>
            <p class="mt-1 text-sm text-wood-500">
              {{
                c.generation
                  ? `Optimisé · score SEO ${c.generation.seoScore}`
                  : 'Pas encore optimisé'
              }}
            </p>
          </div>
          <RouterLink
            :to="`/projects/${projectId}/collections/${c.id}`"
            class="oc-btn-secondary shrink-0 !py-2.5 text-center sm:!px-6"
          >
            Page collection
          </RouterLink>
        </li>
      </ul>
    </section>

    <section class="oc-card-solid p-8 md:p-10">
      <h2 class="oc-label">Ajouter un produit</h2>
      <form class="mt-8 grid gap-6 sm:grid-cols-2" @submit.prevent="addProduct">
        <div class="sm:col-span-2">
          <label class="text-sm font-medium text-wood-800">Titre</label>
          <input v-model="form.originalTitle" required class="oc-input" />
        </div>
        <div class="sm:col-span-2">
          <label class="text-sm font-medium text-wood-800">Description</label>
          <textarea v-model="form.originalDescription" required rows="4" class="oc-input" />
        </div>
        <div>
          <label class="text-sm font-medium text-wood-800">Prix</label>
          <input
            v-model.number="form.price"
            type="number"
            min="0"
            step="0.01"
            class="oc-input"
          />
        </div>
        <div class="flex items-end">
          <button type="submit" class="oc-btn-primary w-full sm:w-auto">Ajouter</button>
        </div>
      </form>
    </section>

    <section v-if="loading" class="py-12 text-center text-wood-500">Chargement des produits…</section>

    <ul
      v-else
      class="divide-y divide-wood-200/80 overflow-hidden rounded-3xl border border-wood-200/90 bg-white/85 shadow-soft"
    >
      <li
        v-for="p in products"
        :key="p.id"
        class="flex flex-col gap-4 px-6 py-5 transition hover:bg-wood-25/80 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <div class="min-w-0 flex-1">
          <p class="font-medium text-wood-900">{{ p.originalTitle }}</p>
          <p class="mt-1 text-sm text-wood-500">
            {{
              p.generation
                ? `Optimisé · score SEO ${p.generation.seoScore}`
                : 'Pas encore optimisé'
            }}
          </p>
        </div>
        <RouterLink
          :to="`/projects/${projectId}/products/${p.id}`"
          class="oc-btn-secondary shrink-0 !py-2.5 text-center sm:!px-6"
        >
          Fiche produit
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
