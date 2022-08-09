import { ref, unref, onMounted, onUnmounted } from "vue";

export const useIntersectionObserver = (elRef, options = {}, onEntry) => {
  let observer = null;
  let isIntersecting = ref(false);

  onMounted(() => {
    const $el = unref(elRef);
    if (!($el instanceof HTMLElement))
      throw new Error("useIntersectionObserver: elRef is not an HTMLElement");

    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        isIntersecting.value = entry.isIntersecting;
        if (typeof onEntry === "function") onEntry(entry);
      });
    };

    observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe($el);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return {
    isIntersecting,
    observer,
  };
};
