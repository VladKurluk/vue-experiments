<template>
  <div>
    <nav class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4">
      <router-link to="/layout/standard">Layout standard</router-link> |
      <router-link to="/layout/auth">Layout auth</router-link>
    </nav>
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
import LayoutComponent from "../layouts/LayoutComponent";
export default {
  components: {
    LayoutComponent,
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
