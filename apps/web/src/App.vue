<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from './stores/auth';

const auth = useAuthStore();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <RouterLink to="/dashboard" class="text-lg font-semibold text-brand-700">
          OptiCatalog
        </RouterLink>
        <nav class="flex items-center gap-4 text-sm font-medium text-slate-600">
          <template v-if="auth.isAuthenticated">
            <span class="hidden sm:inline text-slate-500">{{ auth.user?.email }}</span>
            <RouterLink to="/dashboard" class="hover:text-brand-600">Projets</RouterLink>
            <button
              type="button"
              class="rounded-md border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50"
              @click="auth.logout(); $router.push('/login')"
            >
              Déconnexion
            </button>
          </template>
          <template v-else>
            <RouterLink to="/login" class="hover:text-brand-600">Connexion</RouterLink>
            <RouterLink
              to="/register"
              class="rounded-md bg-brand-600 px-3 py-1.5 text-white hover:bg-brand-700"
            >
              Inscription
            </RouterLink>
          </template>
        </nav>
      </div>
    </header>
    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>
