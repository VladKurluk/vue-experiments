<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>Library develops without router</p>
    <p>
      Include before your lib script Vue library as &lsaquo;script
      src="https://unpkg.com/vue@3"&rsaquo;&lsaquo;/script&rsaquo;
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
