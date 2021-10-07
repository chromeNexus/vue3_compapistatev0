<template>
  <div>
    <dynamic-form
      :form="form"
      @submitted="formSubmitted"
      @error="processErrrors"
    />
    <button submit="true" :form="form.id">
      Submit
    </button>
  </div>
</template>

<script>
import { FormField, FormValidation, pattern, email } from '@asigloo/vue-dynamic-forms';
export default {
  setup() {
  const form = ref({
    id: "form",
    fields: {
      name: TextField({
        label: "Name",
      }),
      name: TextField({
        label: "Company",
      }),
      name: TextField({
        label: "Address1",
      }),
      name: TextField({
        label: "Address2",
      }),
      name: TextField({
        label: "City",
      }),
      name: TextField({
        label: "State",
      }),
      email: EmailField({
        label: "email",
      }),
      password: PasswordField({
        label: 'Password',
        autocomplete: 'current-password',
        validations: [new FormValidation(
                pattern(
                  '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[#$^+=!*()@%&]).{8,10}$',
                ),
                'Password must contain at least 1 Uppercase, 1 Lowercase, 1 number, 1 special character and min 8 characters max 10',
              ),],
      }),
    }
  });

  return { form }
}

}

</script>
