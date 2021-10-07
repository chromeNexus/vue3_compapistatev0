<template>
  <div
    class="BaseInput"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <label
      :for="uuid"
      v-if="label"
      class="block text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <div class="mt-1">
      <input
        v-bind="$attrs"
        :name="name"
        :value="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        :id="uuid"
        :aria-describedby="error ? `${uuid}-error` : null"
        :aria-invalid="error ? true : null"
        :type="type"
        @blur="handleBlur"
      />
    </div>
    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<script>
// import UniqueID from '../features/UniqueID'
// import { nanoid } from "nanoid";
// $8312.42 //$1267  clean out car license plate title
import { customAlphabet } from "nanoid";
import { useField } from "vee-validate";

export default {
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    successMessage: {
      type: String,
      default: "",
    },
  },
  /* added (props) below, successMessag, type, usefield <p></p> @input="handleChange"
        @blur
        <div
    class="TextInput"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }">
        */
  setup(props) {
    const nanoid = customAlphabet(
      "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789",
      10
    );
    const uuid = nanoid();
    // added const below
    const { value: inputValue, errorMessage, handleBlur, meta } = useField(
      props.name,
      undefined,
      {
        initialValue: props.value,
      }
    );
    //const uuid = UniqueID().getID()
    return {
      handleBlur,
      errorMessage,
      inputValue,
      meta,
      uuid,
    };
  },
};
</script>
