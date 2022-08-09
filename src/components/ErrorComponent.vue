<template>
  <div class="p-8 bg-red-300 h-screen flex items-center justify-center">
    <div class="flex items-center flex-col">
      <p class="text-red-800 font-bold text-center mb-4">
        Oops, there was an unexpected error. <br />Try refreshing your browser
        and ensure you have internet connection.
      </p>
      <button
        @click.prevent="$emit('close-panel')"
        class="rounded-md border border-solid border-teal-400 p-2"
      >
        Close panel
      </button>
      <button
        @click.prevent="$emit('retry')"
        class="rounded-md border border-solid border-teal-400 p-2"
      >
        Try again
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-modal", "retry"],
};
</script>
