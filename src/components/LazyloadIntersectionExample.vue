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
import { defineAsyncComponent } from "vue";
// We need to make it an async component so it is lazy loaded
const VeryLargeComponent = defineAsyncComponent(() =>
  import("./VeryLargeComponent")
);
export default {
  emits: ["close-panel"],
  data() {
    return {
      status: "Not rendered",
      loadVeryLargeComponent: false,
    };
  },
  components: {
    VeryLargeComponent,
  },
  methods: {
    resetRender() {
      this.status = "Not rendered";
      this.loadVeryLargeComponent = false;
    },
  },
  mounted() {
    // IntersectionObserver options
    const options = {
      root: this.$el,
    };
    // Render the VeryLargeComponent when the container intersects
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadVeryLargeComponent = true;
          this.status = "Rendered";
        }
      });
    };
    const observer = new IntersectionObserver(intersectionCallback, options);
    // Assign observer on the $options object so we can access
    // it in the onUnmounted hook
    this.$options.observer = observer;
    // Start observing the container
    const $el = this.$refs.veryLargeComponentContainer;
    observer.observe($el);
  },
  // Cleanup
  unmounted() {
    this.$options.observer.disconnect();
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
