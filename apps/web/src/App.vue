<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from './stores/auth';

const auth = useAuthStore();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="sticky top-0 z-20 border-b border-wood-200/80 bg-wood-25/75 backdrop-blur-md supports-[backdrop-filter]:bg-wood-25/65"
    >
      <div class="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-5 md:px-10">
        <RouterLink
          to="/dashboard"
          class="group flex items-baseline gap-2 font-display text-xl font-semibold tracking-tight text-wood-900 md:text-[1.35rem]"
        >
          <span
            class="inline-block h-2 w-2 rounded-full bg-clay-500 shadow-[0_0_0_3px_rgba(156,93,69,0.2)] transition group-hover:bg-clay-600"
            aria-hidden="true"
          />
          OptiCatalog
        </RouterLink>
        <nav class="flex flex-wrap items-center justify-end gap-2 text-sm font-medium text-wood-600 md:gap-3">
          <template v-if="auth.isAuthenticated">
            <span class="hidden max-w-[14rem] truncate rounded-full border border-wood-200/80 bg-white/50 px-3 py-1.5 text-xs text-wood-500 md:inline">
              {{ auth.user?.email }}
            </span>
            <RouterLink
              to="/dashboard"
              class="rounded-full px-3 py-2 text-wood-700 transition hover:bg-wood-100/80 hover:text-wood-900"
            >
              Projets
            </RouterLink>
            <button
              type="button"
              class="rounded-full border border-wood-200 bg-white/60 px-4 py-2 text-wood-800 transition hover:border-wood-300 hover:bg-white"
              @click="auth.logout(); $router.push('/login')"
            >
              Déconnexion
            </button>
          </template>
          <template v-else>
            <RouterLink
              to="/login"
              class="rounded-full px-3 py-2 text-wood-700 transition hover:bg-wood-100/80 hover:text-wood-900"
            >
              Connexion
            </RouterLink>
            <RouterLink to="/register" class="oc-btn-primary !py-2 !px-4 text-xs md:text-sm">
              Inscription
            </RouterLink>
          </template>
        </nav>
      </div>
    </header>
    <main class="mx-auto w-full max-w-content flex-1 px-6 py-12 md:px-10 md:py-16">
      <RouterView />
    </main>
    <footer class="mt-auto border-t border-wood-200/60 bg-wood-25/40 py-10 text-center">
      <p class="text-xs text-wood-500">Catalogues e-commerce · optimisation IA · contenu SEO</p>
    </footer>
  </div>
</template>
