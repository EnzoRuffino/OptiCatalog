import { onMounted, watch } from 'vue';

export function useSeo(
  title: () => string,
  description: () => string,
) {
  const apply = () => {
    document.title = title();
    const current = document.querySelector('meta[name="description"]');
    const meta = current ?? document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', description());
    if (!current) {
      document.head.appendChild(meta);
    }
  };

  onMounted(apply);
  watch([title, description], apply);
}
