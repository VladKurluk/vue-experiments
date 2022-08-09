<template>
  <div class="p-8 overflow-y-auto" :class="$style.container">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold">Scroll to the bottom!</h2>
      <div class="sticky" :class="$style.status">
        {{ status }}
      </div>
    </div>
    <button @click.prevent="$emit('close-panel')">Close panel</button>
    <button class="ml-4" @click.prevent="resetRender">Reset render</button>
    <div class="h-full"></div>
    <div ref="veryLargeComponentContainer">
      <!-- Lazy loaded -->
      <VeryLargeComponent v-if="loadVeryLargeComponent" />
    </div>
  </div>
</template>

<script>
import { ref, watch, defineAsyncComponent } from "vue";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";
const VeryLargeComponent = defineAsyncComponent(() =>
  import("./VeryLargeComponent")
);
export default {
  emits: ["close-panel"],
  setup() {
    const status = ref("Not rendered");
    const loadVeryLargeComponent = ref(false);
    const containerRef = ref(null);
    const { isIntersecting } = useIntersectionObserver(containerRef);
    // Load the VeryLargeComponent when isIntersecting is true
    watch(isIntersecting, (isIntersecting) => {
      if (!isIntersecting) return;
      status.value = "Rendered";
      loadVeryLargeComponent.value = true;
    });
    const resetRender = () => {
      status.value = "Not rendered";
      loadVeryLargeComponent.value = false;
    };
    return {
      veryLargeComponentContainer: containerRef,
      status,
      loadVeryLargeComponent,
      resetRender,
    };
  },
  components: {
    VeryLargeComponent,
  },
};
</script>

<style module>
.container {
  height: 150vh;
  max-height: 100vh;
  overflow: auto;
}
.status {
  position: fixed;
  top: 2.5rem;
  right: 3rem;
}
</style>
