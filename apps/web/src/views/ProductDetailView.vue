<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { api } from '../api/client';
import { useSeo } from '../composables/useSeo';

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

type JobResponse = {
  jobId: string;
  status: 'PENDING' | 'PROCESSING' | 'DONE' | 'FAILED';
  message: string;
};

type JobStatusResponse = {
  id: string;
  status: 'PENDING' | 'PROCESSING' | 'DONE' | 'FAILED';
  progress: number;
  errorMessage: string | null;
};

const route = useRoute();
const projectId = route.params.projectId as string;
const productId = route.params.productId as string;

const product = ref<ProductDetail | null>(null);
const loading = ref(true);
const optimizing = ref(false);
const error = ref<string | null>(null);
const job = ref<JobStatusResponse | null>(null);

useSeo(
  () => `${product.value?.originalTitle ?? 'Produit'} | optimisation SEO IA`,
  () => `Compare la fiche produit avant/après optimisation IA et récupère un score SEO pour ton catalogue.`,
);

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

async function pollJob(jobId: string) {
  const maxTries = 30;
  for (let i = 0; i < maxTries; i++) {
    const { data } = await api.get<JobStatusResponse>(`/projects/${projectId}/jobs/${jobId}`);
    job.value = data;
    if (data.status === 'DONE') {
      await load();
      return;
    }
    if (data.status === 'FAILED') {
      throw new Error(data.errorMessage ?? 'Le job a échoué.');
    }
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
  throw new Error('Le job est toujours en cours, réessaie dans quelques secondes.');
}

async function optimize() {
  optimizing.value = true;
  error.value = null;
  try {
    const { data } = await api.post<JobResponse>(
      `/projects/${projectId}/products/${productId}/optimize`,
    );
    await pollJob(data.jobId);
  } catch (e: unknown) {
    if (typeof e === 'object' && e && 'response' in e) {
      const resp = (e as { response?: { data?: { message?: string } } }).response;
      error.value = resp?.data?.message ?? "L'optimisation a échoué.";
    } else {
      error.value = (e as Error).message;
    }
  } finally {
    optimizing.value = false;
  }
}

const progressLabel = computed(() => {
  if (!job.value) return null;
  return `Traitement : ${job.value.status} · ${job.value.progress}%`;
});

onMounted(load);
</script>

<template>
  <div class="space-y-10 md:space-y-12">
    <RouterLink
      :to="`/projects/${projectId}`"
      class="inline-flex items-center gap-2 text-sm font-medium text-clay-700 transition hover:text-clay-900"
    >
      <span aria-hidden="true">←</span>
      Retour au catalogue
    </RouterLink>

    <p
      v-if="error"
      class="rounded-xl border border-red-200/80 bg-red-50/90 px-4 py-3 text-sm text-red-800"
    >
      {{ error }}
    </p>
    <p
      v-if="progressLabel"
      class="rounded-2xl border border-wood-200 bg-wood-50/80 px-4 py-3 text-sm text-wood-700"
    >
      {{ progressLabel }}
    </p>
    <p v-if="loading" class="py-8 text-wood-500">Chargement de la fiche…</p>

    <template v-else-if="product">
      <header class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl space-y-2">
          <p class="oc-label">Fiche produit</p>
          <h1 class="font-display text-display-sm font-semibold text-wood-900 md:text-[2.25rem]">
            {{ product.originalTitle }}
          </h1>
        </div>
        <button type="button" class="oc-btn-primary shrink-0" :disabled="optimizing" @click="optimize">
          {{ optimizing ? 'Optimisation…' : 'Lancer l’optimisation IA' }}
        </button>
      </header>

      <div class="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <section class="oc-card-solid p-8 md:p-10">
          <h2 class="oc-label text-clay-600">Avant</h2>
          <p class="mt-4 font-display text-xl font-medium text-wood-900">{{ product.originalTitle }}</p>
          <p class="mt-4 whitespace-pre-wrap leading-relaxed text-wood-700">
            {{ product.originalDescription }}
          </p>
          <p class="mt-6 border-t border-wood-200 pt-6 text-sm font-medium text-wood-600">
            Prix : {{ product.price.toFixed(2) }} €
          </p>
        </section>

        <section
          class="rounded-3xl border border-moss-200/90 bg-moss-50/70 p-8 shadow-soft md:p-10"
        >
          <h2 class="oc-label text-moss-600">Après · IA</h2>
          <template v-if="product.generation">
            <p class="mt-4 font-display text-xl font-medium text-wood-900">
              {{ product.generation.optimizedTitle }}
            </p>
            <p class="mt-4 whitespace-pre-wrap leading-relaxed text-wood-800">
              {{ product.generation.optimizedDescription }}
            </p>
            <p class="mt-6 text-sm text-wood-700">
              <span class="font-medium text-wood-800">Mots-clés :</span>
              {{ product.generation.seoKeywords }}
            </p>
            <p class="mt-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-moss-600 shadow-sm">
              Score SEO {{ product.generation.seoScore }} / 100
            </p>
          </template>
          <p v-else class="mt-6 leading-relaxed text-wood-600">
            Pas encore de version optimisée — lance l’IA pour générer titre, description et signaux SEO.
          </p>
        </section>
      </div>
    </template>
  </div>
</template>
