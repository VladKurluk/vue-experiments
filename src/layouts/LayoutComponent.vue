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
import StandardLayout from "./components/StandardLayout";
import AuthLayout from "./components/AuthLayout";
const layoutComponents = {
  standard: StandardLayout,
  auth: AuthLayout,
};
export default {
  computed: {
    currentLayoutComponent() {
      const layout =
        this.$router.currentRoute.value?.meta?.layout || "standard";
      return layoutComponents[layout];
    },
  },
};
</script>
