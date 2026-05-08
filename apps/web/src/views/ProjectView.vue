<script setup lang="ts">
import type { CollectionPage, Product as CatalogProduct } from '@opticatalog/types';
import axios from 'axios';
import { computed, onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { api } from '../api/client';
import { useSeo } from '../composables/useSeo';

type ProductCsvColumnMapping = {
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
  imageAlt?: string;
  attributes?: string;
};

type CsvPreviewResponse = {
  delimiter: ',' | ';';
  columns: { key: string; label: string }[];
  sampleRows: Record<string, string>[];
  suggestedMapping: Partial<ProductCsvColumnMapping>;
};

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

/** Titre page : évite « Chargement… » figé quand le chargement a échoué. */
const projectPageTitle = computed(() => {
  if (loading.value) return 'Chargement…';
  return projectName.value.trim() || 'Projet';
});

const form = ref({
  originalTitle: '',
  originalDescription: '',
  price: 0,
});

const collectionForm = ref({
  label: '',
  originalDescription: '',
});

const csvImportMode = ref<'quick' | 'custom'>('quick');
const csvFile = ref<File | null>(null);
const csvPreview = ref<CsvPreviewResponse | null>(null);
const csvPreviewLoading = ref(false);
const mapTitle = ref('');
const mapDescription = ref('');
const mapPrice = ref('');
const mapImageUrl = ref('');
const mapImageAlt = ref('');
const mapAttributes = ref('');

useSeo(
  () => `${projectPageTitle.value === 'Chargement…' ? 'Projet' : projectPageTitle.value} | catalog-ai`,
  () =>
    `Import CSV, optimisation IA et export SEO pour le projet ${projectName.value.trim() || 'catalog-ai'}.`,
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
  } catch (e: unknown) {
    const detail = extractApiError(e);
    error.value =
      detail ||
      'Impossible de charger le projet. Vérifie la connexion, que `npm run dev:api` tourne, ou reconnecte-toi.';
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

function extractApiError(e: unknown): string {
  const ax = e as {
    response?: { status?: number; data?: { message?: string | string[] } };
    message?: string;
    code?: string;
  };
  const msg = ax.response?.data?.message;
  if (Array.isArray(msg)) return msg.join(', ');
  if (typeof msg === 'string' && msg.trim()) return msg.trim();

  const status = ax.response?.status;
  if (status === 401) {
    return 'Non autorisé : reconnecte-toi (session expirée ou token invalide).';
  }
  if (status === 403) return 'Accès refusé à cette ressource.';
  if (status === 404) return 'Projet ou ressource introuvable.';
  if (typeof status === 'number') return `Erreur serveur (HTTP ${status}).`;

  if (ax.code === 'ERR_NETWORK' || ax.message === 'Network Error') {
    return 'Impossible de joindre l’API (port 3000). Lance `npm run dev:api` ou vérifie le proxy Vite.';
  }
  return '';
}

async function messageFromBlobBody(data: Blob): Promise<string | null> {
  try {
    const text = await data.text();
    const j = JSON.parse(text) as { message?: string | string[] };
    const m = j.message;
    if (Array.isArray(m)) return m.join(', ');
    if (typeof m === 'string' && m.trim()) return m.trim();
  } catch {
    /* ignore */
  }
  return null;
}

function applySuggestedMapping(s: Partial<ProductCsvColumnMapping>) {
  mapTitle.value = s.title ?? '';
  mapDescription.value = s.description ?? '';
  mapPrice.value = s.price ?? '';
  mapImageUrl.value = s.imageUrl ?? '';
  mapImageAlt.value = s.imageAlt ?? '';
  mapAttributes.value = s.attributes ?? '';
}

function resetCsvMapping() {
  applySuggestedMapping({});
}

async function runCsvPreview() {
  if (!csvFile.value) return;
  csvPreviewLoading.value = true;
  error.value = null;
  try {
    const fd = new FormData();
    fd.append('file', csvFile.value);
    const res = await api.post<CsvPreviewResponse>(
      `/projects/${projectId.value}/uploads/csv/preview`,
      fd,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    csvPreview.value = res.data;
    applySuggestedMapping(res.data.suggestedMapping ?? {});
  } catch (e: unknown) {
    const detail = extractApiError(e);
    error.value =
      detail || "Impossible d'analyser le CSV. Vérifie le fichier ou réessaie.";
    csvPreview.value = null;
    resetCsvMapping();
  } finally {
    csvPreviewLoading.value = false;
  }
}

async function onCsvChange(event: Event) {
  const target = event.target as HTMLInputElement;
  csvFile.value = target.files?.[0] ?? null;
  csvPreview.value = null;
  resetCsvMapping();
  if (csvImportMode.value === 'custom' && csvFile.value) {
    await runCsvPreview();
  }
}

watch(csvImportMode, async (mode) => {
  if (mode === 'custom' && csvFile.value) {
    await runCsvPreview();
  }
  if (mode === 'quick') {
    csvPreview.value = null;
    resetCsvMapping();
  }
});

async function downloadImportTemplate() {
  error.value = null;
  try {
    const res = await api.get(`/projects/${projectId.value}/uploads/csv/template`, {
      responseType: 'blob',
    });
    const url = URL.createObjectURL(res.data as Blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'opticatalog-products-import.csv';
    a.click();
    URL.revokeObjectURL(url);
  } catch {
    error.value = 'Téléchargement du modèle impossible.';
  }
}

async function uploadCsv() {
  if (!csvFile.value) return;
  if (csvImportMode.value === 'custom') {
    if (!mapTitle.value.trim() || !mapDescription.value.trim() || !mapPrice.value.trim()) {
      error.value = 'Choisis les colonnes titre, description et prix.';
      return;
    }
  }
  uploading.value = true;
  error.value = null;
  try {
    const formData = new FormData();
    formData.append('file', csvFile.value);
    if (csvImportMode.value === 'custom') {
      const mapping: ProductCsvColumnMapping = {
        title: mapTitle.value.trim(),
        description: mapDescription.value.trim(),
        price: mapPrice.value.trim(),
      };
      const imgUrl = mapImageUrl.value.trim();
      const imgAlt = mapImageAlt.value.trim();
      const attrs = mapAttributes.value.trim();
      if (imgUrl) mapping.imageUrl = imgUrl;
      if (imgAlt) mapping.imageAlt = imgAlt;
      if (attrs) mapping.attributes = attrs;
      formData.append('mapping', JSON.stringify(mapping));
    }
    await api.post(`/projects/${projectId.value}/uploads/csv`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    csvFile.value = null;
    csvPreview.value = null;
    resetCsvMapping();
    await load();
  } catch (e: unknown) {
    const detail = extractApiError(e);
    error.value =
      detail ||
      "Import CSV impossible. Mode rapide : colonnes title/description/price. Sinon utilise le mode colonnes libres.";
  } finally {
    uploading.value = false;
  }
}

async function exportCsv() {
  error.value = null;
  try {
    const res = await api.get(`/projects/${projectId.value}/products/export/csv`, {
      responseType: 'blob',
    });
    const blob = res.data as Blob;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `catalog-${projectId.value}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  } catch (e: unknown) {
    let msg = extractApiError(e);
    if (!msg && axios.isAxiosError(e) && e.response?.data instanceof Blob) {
      msg = (await messageFromBlobBody(e.response.data)) ?? '';
    }
    error.value = msg || 'Export CSV impossible.';
  }
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
          {{ projectPageTitle }}
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
        Mode rapide avec le modèle OptiCatalog, ou colonnes libres après analyse du fichier et choix du mapping.
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <button type="button" class="oc-btn-secondary !py-2 !text-sm" @click="downloadImportTemplate">
          Télécharger le modèle CSV
        </button>
      </div>

      <fieldset class="mt-8 space-y-3">
        <legend class="text-sm font-medium text-wood-800">Mode d’import</legend>
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <label
            class="flex cursor-pointer items-center gap-2 rounded-xl border border-wood-200/90 bg-white/80 px-4 py-3 text-sm text-wood-700 shadow-sm transition hover:border-clay-300/80"
          >
            <input v-model="csvImportMode" type="radio" value="quick" class="accent-clay-600" />
            <span><strong class="text-wood-900">Rapide</strong> — fichier déjà au format OptiCatalog</span>
          </label>
          <label
            class="flex cursor-pointer items-center gap-2 rounded-xl border border-wood-200/90 bg-white/80 px-4 py-3 text-sm text-wood-700 shadow-sm transition hover:border-clay-300/80"
          >
            <input v-model="csvImportMode" type="radio" value="custom" class="accent-clay-600" />
            <span><strong class="text-wood-900">Colonnes libres</strong> — aperçu puis association des colonnes</span>
          </label>
        </div>
      </fieldset>

      <div class="mt-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
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
            :disabled="
              !csvFile ||
              uploading ||
              csvPreviewLoading ||
              (csvImportMode === 'custom' && !csvPreview?.columns?.length)
            "
            @click="uploadCsv"
          >
            {{ uploading ? 'Import…' : 'Importer' }}
          </button>
          <button type="button" class="oc-btn-secondary" @click="exportCsv">Exporter (optimisé)</button>
          <button
            v-if="csvImportMode === 'custom' && csvFile"
            type="button"
            class="oc-btn-secondary"
            :disabled="csvPreviewLoading"
            @click="runCsvPreview"
          >
            {{ csvPreviewLoading ? 'Analyse…' : 'Ré-analyser' }}
          </button>
        </div>
      </div>

      <div
        v-if="csvImportMode === 'custom' && csvPreview && csvPreview.columns.length"
        class="mt-8 space-y-6 rounded-2xl border border-wood-200/90 bg-wood-25/60 p-6"
      >
        <div>
          <p class="text-sm font-medium text-wood-800">Associer les colonnes</p>
          <p class="mt-1 text-xs text-wood-500">
            Les valeurs affichées sont les identifiants techniques ; choisis la colonne qui correspond à chaque champ.
          </p>
          <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label class="text-xs font-medium text-wood-700">Titre</label>
              <select v-model="mapTitle" class="oc-input mt-1 w-full text-sm">
                <option value="">—</option>
                <option v-for="c in csvPreview.columns" :key="`t-${c.key}`" :value="c.key">
                  {{ c.label }} ({{ c.key }})
                </option>
              </select>
            </div>
            <div>
              <label class="text-xs font-medium text-wood-700">Description</label>
              <select v-model="mapDescription" class="oc-input mt-1 w-full text-sm">
                <option value="">—</option>
                <option v-for="c in csvPreview.columns" :key="`d-${c.key}`" :value="c.key">
                  {{ c.label }} ({{ c.key }})
                </option>
              </select>
            </div>
            <div>
              <label class="text-xs font-medium text-wood-700">Prix</label>
              <select v-model="mapPrice" class="oc-input mt-1 w-full text-sm">
                <option value="">—</option>
                <option v-for="c in csvPreview.columns" :key="`p-${c.key}`" :value="c.key">
                  {{ c.label }} ({{ c.key }})
                </option>
              </select>
            </div>
            <div>
              <label class="text-xs font-medium text-wood-700">Image URL (optionnel)</label>
              <select v-model="mapImageUrl" class="oc-input mt-1 w-full text-sm">
                <option value="">—</option>
                <option v-for="c in csvPreview.columns" :key="`iu-${c.key}`" :value="c.key">
                  {{ c.label }} ({{ c.key }})
                </option>
              </select>
            </div>
            <div>
              <label class="text-xs font-medium text-wood-700">Texte alt image (optionnel)</label>
              <select v-model="mapImageAlt" class="oc-input mt-1 w-full text-sm">
                <option value="">—</option>
                <option v-for="c in csvPreview.columns" :key="`ia-${c.key}`" :value="c.key">
                  {{ c.label }} ({{ c.key }})
                </option>
              </select>
            </div>
            <div>
              <label class="text-xs font-medium text-wood-700">Attributes JSON (optionnel)</label>
              <select v-model="mapAttributes" class="oc-input mt-1 w-full text-sm">
                <option value="">—</option>
                <option v-for="c in csvPreview.columns" :key="`at-${c.key}`" :value="c.key">
                  {{ c.label }} ({{ c.key }})
                </option>
              </select>
            </div>
          </div>
        </div>

        <div v-if="csvPreview.sampleRows.length" class="overflow-x-auto">
          <p class="mb-2 text-xs font-medium text-wood-600">Aperçu ({{ csvPreview.sampleRows.length }} lignes)</p>
          <table class="min-w-full divide-y divide-wood-200 text-left text-xs text-wood-800">
            <thead class="bg-white/90">
              <tr>
                <th
                  v-for="col in csvPreview.columns"
                  :key="col.key"
                  class="whitespace-nowrap px-3 py-2 font-medium"
                >
                  {{ col.label }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-wood-100">
              <tr v-for="(row, ri) in csvPreview.sampleRows" :key="ri">
                <td v-for="col in csvPreview.columns" :key="col.key" class="max-w-[12rem] truncate px-3 py-2">
                  {{ row[col.key] ?? '' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p class="mt-6 text-xs leading-relaxed text-wood-500">
        <template v-if="csvImportMode === 'quick'">
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
          ; optionnellement imageUrl, imageAlt, attributes (JSON objet).
        </template>
        <template v-else>
          Après analyse, associe au minimum titre, description et prix. La suggestion pré-remplit les listes quand les
          en-têtes sont reconnaissables (nom, prix, etc.).
        </template>
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
