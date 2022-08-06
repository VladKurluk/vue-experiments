<template>
  <!-- Render appropriate layout component -->
  <component :is="currentLayoutComponent">
    <!-- Pass through all the slots -->
    <template
      v-for="slotName in Object.keys($slots)"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" v-bind="slotProps" />
    </template>
  </component>
</template>

<script>
import { layoutComputed, LAYOUTS } from "./services/pageLayoutService.js";
import StandardLayout from "./components/StandardLayout";
import AuthLayout from "./components/AuthLayout";

const layoutComponents = {
  [LAYOUTS.standard]: StandardLayout,
  [LAYOUTS.auth]: AuthLayout,
};

export default {
  computed: {
    ...layoutComputed,
    currentLayoutComponent() {
      return layoutComponents[this.layout];
    },
  },
};
</script>
