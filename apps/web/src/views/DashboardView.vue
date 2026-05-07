<script setup lang="ts">
import type { Project } from '@opticatalog/types';
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { api } from '../api/client';
import { useSeo } from '../composables/useSeo';

type Usage = {
  monthKey: string;
  plan: 'STARTER' | 'PRO' | 'SCALE';
  limit: number;
  used: number;
  queued: number;
  remaining: number;
  estimatedCostCents: number;
};

const projects = ref<Project[]>([]);
const name = ref('');
const loading = ref(true);
const creating = ref(false);
const error = ref<string | null>(null);
const usage = ref<Usage | null>(null);

const estimatedCostEuros = computed(() =>
  ((usage.value?.estimatedCostCents ?? 0) / 100).toFixed(2),
);

useSeo(
  () => 'Dashboard catalog-ai | projets e-commerce',
  () => 'Gère tes projets catalog-ai, suis ton usage IA et démarre tes optimisations SEO produit.',
);

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const [{ data: projectData }, { data: usageData }] = await Promise.all([
      api.get<Project[]>('/projects'),
      api.get<Usage>('/billing/usage'),
    ]);
    projects.value = projectData.map((p) => ({
      ...p,
      createdAt: p.createdAt as unknown as Date,
    }));
    usage.value = usageData;
  } catch {
    error.value = 'Impossible de charger les projets.';
  } finally {
    loading.value = false;
  }
}

async function createProject() {
  if (!name.value.trim()) return;
  creating.value = true;
  error.value = null;
  try {
    await api.post('/projects', { name: name.value.trim() });
    name.value = '';
    await load();
  } catch {
    error.value = 'Création du projet impossible.';
  } finally {
    creating.value = false;
  }
}

onMounted(load);
</script>

<template>
  <div class="space-y-12 md:space-y-16">
    <header class="max-w-2xl space-y-4">
      <p class="oc-label">Tableau de bord</p>
      <h1 class="font-display text-display-sm font-semibold text-wood-900 md:text-display">
        Tes catalogues
      </h1>
      <p class="text-lg leading-relaxed text-wood-600">
        Un projet regroupe un catalogue de produits à enrichir et optimiser pour le référencement.
      </p>
    </header>

    <section v-if="usage" class="oc-card-solid p-8 md:p-10">
      <h2 class="oc-label">Usage IA — {{ usage.monthKey }}</h2>
      <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-2xl border border-wood-150 bg-white/60 px-5 py-4">
          <p class="text-xs font-medium text-wood-500">Plan</p>
          <p class="mt-1 font-display text-xl font-semibold text-wood-900">{{ usage.plan }}</p>
        </div>
        <div class="rounded-2xl border border-wood-150 bg-white/60 px-5 py-4">
          <p class="text-xs font-medium text-wood-500">Optimisations</p>
          <p class="mt-1 font-display text-xl font-semibold text-wood-900">
            {{ usage.used }} / {{ usage.limit }}
          </p>
        </div>
        <div class="rounded-2xl border border-wood-150 bg-white/60 px-5 py-4">
          <p class="text-xs font-medium text-wood-500">En file d’attente</p>
          <p class="mt-1 font-display text-xl font-semibold text-wood-900">{{ usage.queued }}</p>
        </div>
        <div class="rounded-2xl border border-wood-150 bg-white/60 px-5 py-4">
          <p class="text-xs font-medium text-wood-500">Coût estimé</p>
          <p class="mt-1 font-display text-xl font-semibold text-wood-900">
            {{ estimatedCostEuros }}&nbsp;€
          </p>
        </div>
      </div>
    </section>

    <section class="oc-card-solid p-8 md:p-10">
      <h2 class="oc-label">Nouveau projet</h2>
      <p class="mt-3 max-w-xl text-wood-600">Donne un nom clair à ton catalogue pour t’y retrouver.</p>
      <form class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch" @submit.prevent="createProject">
        <input
          v-model="name"
          type="text"
          placeholder="Ex. Collection été 2026"
          class="oc-input !mt-0 sm:flex-1"
        />
        <button type="submit" class="oc-btn-primary shrink-0 sm:w-auto" :disabled="creating">
          {{ creating ? 'Création…' : 'Créer le projet' }}
        </button>
      </form>
    </section>

    <p v-if="error" class="rounded-xl border border-red-200/80 bg-red-50/90 px-4 py-3 text-sm text-red-800">
      {{ error }}
    </p>

    <section v-if="loading" class="py-12 text-center text-wood-500">Chargement de tes projets…</section>

    <ul v-else class="grid gap-6 sm:grid-cols-2">
      <li v-for="p in projects" :key="p.id">
        <RouterLink
          :to="`/projects/${p.id}`"
          class="group oc-card-solid flex h-full flex-col p-8 transition hover:border-clay-300/50 hover:shadow-lift"
        >
          <span
            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-wood-100 text-lg text-clay-600 transition group-hover:bg-clay-100 group-hover:text-clay-700"
            aria-hidden="true"
          >
            ◈
          </span>
          <h3 class="font-display text-xl font-semibold text-wood-900">{{ p.name }}</h3>
          <p class="mt-3 text-sm text-wood-500">
            Créé le {{ new Date(p.createdAt as unknown as string).toLocaleString() }}
          </p>
          <span class="oc-link mt-6 inline-block text-sm">Ouvrir le catalogue →</span>
        </RouterLink>
      </li>
    </ul>

    <p
      v-if="!loading && projects.length === 0"
      class="rounded-2xl border border-dashed border-wood-300 bg-wood-50/50 px-8 py-14 text-center text-wood-600"
    >
      Aucun projet pour l’instant — crée ton premier catalogue ci-dessus.
    </p>
  </div>
</template>
