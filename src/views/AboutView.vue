<template>
  <div class="about">
    <h1>This is an about page</h1>
    <LazyloadIntersectionExample />
  </div>
</template>

<script>
import LazyloadIntersectionExample from "@/components/LazyloadIntersectionExample.vue";

export default {
  components: {
    LazyloadIntersectionExample,
  },
};
</script>
