import { createRouter, createWebHistory } from 'vue-router';
import { getAuthToken } from '../api/client';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { guestOnly: true },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: { guestOnly: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/projects/:projectId',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/projects/:projectId/products/:productId',
      name: 'product-detail',
      component: () => import('../views/ProductDetailView.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();
  const hasToken = !!getAuthToken();

  if (to.meta.requiresAuth && !hasToken) {
    return { name: 'login', query: { redirect: to.fullPath } };
  }

  if (to.meta.guestOnly && hasToken) {
    return { name: 'dashboard' };
  }

  if (to.meta.requiresAuth && hasToken && !auth.user) {
    await auth.hydrate();
  }

  return true;
});

export default router;
