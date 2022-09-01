<template>
  <div>
    <Multiselect
      v-model="value"
      :class="[selectFielsIsValid ? 'multiselect-blue' : 'multiselect-invalid']"
      :options="options"
      @select="$emit('selected', value)"
      @deselect="removeSelectedOption"
      @clear="removeSelectedOption"
    />
    <slot name="validation-field" />
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    Multiselect,
  },
  emits: ["selected", "deselected"],
  props: {
    selectFielsIsValid: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      value: null,
      options: ["Batman", "Robin", "Joker"],
    };
  },
  methods: {
    removeSelectedOption() {
      this.$nextTick(() => {
        this.$emit("deselected", this.value);
      });
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.multiselect-blue {
  --ms-border-color: #2563eb;
}

.multiselect-invalid {
  --ms-border-color: red;
}
</style>
