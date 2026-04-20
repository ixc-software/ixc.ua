/** Smooth-scroll to an element by id; retries until it exists (e.g. after route change). */
export function scrollToElementById(id: string): void {
  if (!id) return;

  const run = (): boolean => {
    const el = document.getElementById(id);
    if (!el) return false;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  };

  if (run()) return;

  requestAnimationFrame(() => {
    if (run()) return;
    window.setTimeout(() => {
      if (run()) return;
      window.setTimeout(() => {
        if (run()) return;
        window.setTimeout(run, 200);
      }, 120);
    }, 40);
  });
}

export function hashToId(hash: string): string {
  if (!hash) return '';
  return hash.startsWith('#') ? hash.slice(1) : hash;
}
