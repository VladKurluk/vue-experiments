<template>
  <div class="home flex-initial justify-center flex-col items-center">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Form
      class="px-4 mt-2 w-52"
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
      v-slot="{ setFieldValue }"
    >
      <select-field
        :selectFielsIsValid="selectFielsIsValid"
        @selected="($e) => setSelectFieldValue($e, setFieldValue)"
        @deselected="($e) => setSelectFieldValue($e, setFieldValue)"
      >
        <template>
          <Field name="select" type="hidden" />
        </template>
      </select-field>
      <Field
        name="password"
        type="password"
        class="border border-blue-600 mt-2"
      />

      <button class="border border-blue-600 px-5 py-2 rounded-lg mt-5">
        Send
      </button>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SelectField from "@/components/SelectField.vue";

import { Form, Field } from "vee-validate";

import * as yup from "yup";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
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
      // console.log(results); // a detailed map of field names and their validation results
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
