<template>
  <div :class="$style.listLayout">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style module>
.listLayout {
  padding: 20px;

  & > * {
    min-height: 150px;
  }
}
</style>
