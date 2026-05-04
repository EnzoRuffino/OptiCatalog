<script setup lang="ts">
import type { Project } from '@opticatalog/types';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { api } from '../api/client';

const projects = ref<Project[]>([]);
const name = ref('');
const loading = ref(true);
const creating = ref(false);
const error = ref<string | null>(null);

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const { data } = await api.get<Project[]>('/projects');
    projects.value = data.map((p) => ({
      ...p,
      createdAt: p.createdAt as unknown as Date,
    }));
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
  <div class="space-y-8">
    <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-slate-900">Tes catalogues</h1>
        <p class="text-sm text-slate-600">Un projet = un catalogue de produits à optimiser.</p>
      </div>
    </div>

    <section class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500">Nouveau projet</h2>
      <form class="mt-4 flex flex-col gap-3 sm:flex-row" @submit.prevent="createProject">
        <input
          v-model="name"
          type="text"
          placeholder="Ex. Collection été 2026"
          class="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
        <button
          type="submit"
          class="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          :disabled="creating"
        >
          {{ creating ? 'Création…' : 'Créer' }}
        </button>
      </form>
    </section>

    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>

    <section v-if="loading" class="text-sm text-slate-500">Chargement…</section>

    <ul v-else class="grid gap-4 sm:grid-cols-2">
      <li v-for="p in projects" :key="p.id">
        <RouterLink
          :to="`/projects/${p.id}`"
          class="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md"
        >
          <h3 class="font-semibold text-slate-900">{{ p.name }}</h3>
          <p class="mt-1 text-xs text-slate-500">
            Créé le {{ new Date(p.createdAt as unknown as string).toLocaleString() }}
          </p>
        </RouterLink>
      </li>
    </ul>

    <p v-if="!loading && projects.length === 0" class="text-sm text-slate-500">
      Aucun projet encore — crée ton premier catalogue ci-dessus.
    </p>
  </div>
</template>
