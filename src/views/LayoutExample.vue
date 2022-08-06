<template>
  <div>
    <div class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4">
      <button @click.prevent="setLayout(LAYOUTS.standard)">
        Layout standard
      </button>
      <button @click.prevent="setLayout(LAYOUTS.auth)">Layout auth</button>
    </div>
    <layout-component class="mx-auto max-w-7xl">
      <template #header>
        <p>Header</p>
      </template>
      <template #content>
        <p>Content</p>
      </template>
      <template #aside>
        <p>Aside</p>
      </template>
      <template #footer>
        <p>Footer</p>
      </template>
    </layout-component>
  </div>
</template>

<script>
import LayoutComponent from "@/layouts/LayoutComponent";
import { useLayout } from "@/layouts/composables/useLayout";

export default {
  components: {
    LayoutComponent,
  },
  setup() {
    const { setLayout, LAYOUTS } = useLayout();
    return {
      setLayout,
      LAYOUTS,
    };
  },
};
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
