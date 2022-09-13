<template>
  <div class="pt-10 text-xl">
    <p>
      Validate form with
      <a
        href="https://vee-validate.logaretm.com/v4/"
        target="_blank"
        class="underline decoration-2"
      >
        VeeValidate
      </a>
    </p>
    <p>
      For select element used
      <a
        href="https://github.com/vueform/multiselect#readme"
        target="_blank"
        class="underline decoration-2"
      >
        Vue 3 Multiselect
      </a>
      component
    </p>
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/select-validation">Select</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
