<template>
  <div class="home flex-initial justify-center flex-col items-center">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <PanelModalExample />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PanelModalExample from "@/components/PanelModalExample.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    PanelModalExample,
  },
};
</script>
