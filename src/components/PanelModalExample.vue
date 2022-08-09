<!-- eslint-disable no-unused-vars -->
<template>
  <button
    @click.prevent="onPanelOpen"
    class="rounded-md border border-solid border-teal-400 p-2"
  >
    Open panel
  </button>
  <PanelModal :open="isPanelOpen">
    <LazyPanelContent
      v-if="loadPanelContent"
      @close-panel="onPanelClose"
      @retry="onRetry"
    />
  </PanelModal>
</template>

<script>
import { defineAsyncComponent } from "vue";
import PanelModal from "./PanelModal.vue";
import LoadingComponent from "./LoadingComponent.vue";
import ErrorComponent from "./ErrorComponent.vue";
/*
Simple version of defineAsyncComponent that accepts a function
returning a promise
@example
const LazyModalContent = defineAsyncComponent(
() => import('./PanelModalContent')
)
*/

/*
Advanced version with loading and error components
*/
const LazyPanelContentLoader = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    // Immitate API request delay
    setTimeout(() => {
      resolve(import("./PanelModalContent"));
      // Reject emulate error fetching component
      //   reject();
    }, 3000);
  });

// Vue 3 functional components
// For Vue 2, you can define these in separate files as SFCs
const LazyPanelContent = defineAsyncComponent({
  // A function that returns a promise which finally resolves with a component
  loader: LazyPanelContentLoader,
  // A component that is displayed until loader is resolved or rejected
  loadingComponent: LoadingComponent,
  // An error component which is shown after a timeout or if loader errors out
  errorComponent: ErrorComponent,
  // Delay before showing the loading component
  delay: 200,
  // Timeout after which an errorComponent will be shown
  timeout: 15000,
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // retry on fetch errors, 3 max attempts
      retry();
    } else {
      // Note that retry/fail are like resolve/reject of a promise:
      // one of them must be called for the error handling to continue.
      fail();
    }
  },
});

export default {
  components: {
    PanelModal,
    LazyPanelContent,
  },
  data() {
    return {
      isPanelOpen: false,
      loadPanelContent: false,
    };
  },
  methods: {
    onPanelOpen() {
      this.isPanelOpen = true;
      this.loadPanelContent = true;
    },
    onPanelClose() {
      this.isPanelOpen = false;
    },
    async onRetry() {
      this.loadPanelContent = false;
      await this.$nextTick();
      this.loadPanelContent = true;
    },
  },
};
</script>
