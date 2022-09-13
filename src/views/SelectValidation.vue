<template>
  <div class="flex-initial justify-center flex-col items-center">
    <Form
      class="px-4 mt-2 w-1/4 mx-auto"
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
      v-slot="{ errors, setFieldValue }"
    >
      <select-field
        :selectFielsIsValid="selectFielsIsValid"
        @selected="($e) => setSelectFieldValue($e, setFieldValue)"
        @deselected="($e) => setSelectFieldValue($e, setFieldValue)"
      >
        <template #validation-field="{ selectedValue }">
          <Field name="select" type="hidden" :value="selectedValue" />
        </template>
      </select-field>
      <Field
        name="password"
        type="password"
        :class="[
          'input-field',
          errors && errors['password']
            ? 'border-red-700'
            : 'border-blue-600 focus:border-indigo-700',
        ]"
      />
      <button
        class="border bg-blue-600 hover:bg-transparent hover:text-black text-white border-blue-600 px-5 py-2 rounded-lg mt-5 duration-150"
      >
        Send
      </button>
    </Form>
  </div>
</template>

<script>
import SelectField from "@/components/SelectField.vue";
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  name: "HomeView",
  components: {
    SelectField,
    Form,
    Field,
  },
  data() {
    const schema = yup.object({
      password: yup.string().required(),
      select: yup.string().required(),
    });
    return {
      schema,
      selectFielsIsValid: true,
    };
  },
  methods: {
    onSubmit(values) {
      // Submit values to API...
      alert(JSON.stringify(values, null, 2));
    },
    onInvalidSubmit({ values, errors }) {
      if (errors.select) {
        this.selectFielsIsValid = false;
      }
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
    },
    setSelectFieldValue(value, fn) {
      fn("select", value);

      if (!value) {
        this.selectFielsIsValid = false;
        return;
      }

      if (value) {
        this.selectFielsIsValid = true;
      }
    },
  },
};
</script>

<style>
.input-field {
  @apply inline-flex px-[14px] w-full border rounded mt-2 min-h-[40px] outline-none;
}
</style>
