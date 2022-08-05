<template>
  <div>
    Hello from Options Api component inside Composition component
    <p>{{ counter }} <button @click="incr">Increment</button></p>
  </div>
</template>
<script>
export default {
  name: "OptionsComponent",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incr() {
      this.counter++;
    },
  },
};
</script>
