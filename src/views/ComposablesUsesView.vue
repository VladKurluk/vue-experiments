<script setup>
import OptionsComponent from "@/components/OptionsComponent.vue";
import { useMouse } from "@/composables/mouse";
import { useScreenSize } from "@/composables/definitionScreen";

const { x, y } = useMouse();
const { windowWidth } = useScreenSize("params");
</script>

<template>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <p>Screen size is at: {{ windowWidth.px }} {{ windowWidth.screenType }}</p>
  <hr />
  <OptionsComponent />
</template>
