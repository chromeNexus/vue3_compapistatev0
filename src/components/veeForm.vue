<template>
  <form @submit.prevent="sendForm" class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="pt-8">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Create Order
        </h3>
        <p class="mt-1 text-sm text-gray-500">Add shipping info below</p>

        <fieldset>
          <legend class="block text-sm font-medium text-gray-700">
            Ship To:
          </legend>
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.name"
                name="shipToName"
                label="Name"
                type="text"
                error="This input has an error!"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput v-model="shipTo.company" label="Company" type="text" />
            </div>
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.address1"
                name="shipToAddress1"
                label="Address 1"
                type="text"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.address2"
                name="shipToAddress2"
                label="Address 2"
                type="text"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.city"
                name="shipToCity"
                label="City"
                type="text"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.state"
                name="shipToState"
                label="State"
                type="text"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseSelect
                :options="countries"
                v-model="shipTo.country"
                label="Select a Country"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.postalCode"
                name="shipToPostalCode"
                label="Postal Code"
                type="text"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.email"
                name="shipToEmail"
                label="Email"
                type="email"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.phone"
                name="shipToPhone"
                label="phone"
                type="tel"
              />
            </div>
          </div>
        </fieldset>

        <div class="space-y-8 divide-y divide-gray-200">
          <fieldset>
            <legend class="block text-sm font-medium text-gray-700">
              Ship From:
            </legend>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <BaseSelect
                  :options="warehouses"
                  v-model="shipFrom.warehouseId"
                  label="Ship From"
                />
              </div>
            </div>
          </fieldset>

          <div class="space-y-8 divide-y divide-gray-200">
            <fieldset>
              <legend>Package Type:</legend>
              <div class="sm:col-span-3">
                <BaseSelect
                  :options="packageTypes"
                  v-model="packageOptions.carrierPackage"
                  label="Select Package"
                />
              </div>
            </fieldset>
          </div>

          <div class="space-y-8 divide-y divide-gray-200">
            <fieldset>
              <legend>Package Weight:</legend>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <BaseInput
                    name="packageWtOunces"
                    v-model="packageOptions.wtOunce"
                    label="Weight Ounces"
                    type="number"
                  />
                </div>
                <div class="sm:col-span-3">
                  <BaseInput
                    name="packWtPounds"
                    v-model="packageOptions.wtPound"
                    label="Weight Pounds"
                    type="number"
                  />
                </div>
              </div>
            </fieldset>

            <div
              v-if="packageOptions.carrierPackage == 'Parcel'"
              class="space-y-8 divide-y divide-gray-200"
            >
              <fieldset>
                <legend>Package Dimensions:</legend>
                <div
                  class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                >
                  <div class="sm:col-span-2">
                    <BaseInput
                      name="packWtLength"
                      v-model="packageOptions.length"
                      label="Length"
                      type="number"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <BaseInput
                      name="packWtWidth"
                      v-model="packageOptions.width"
                      label="Width"
                      type="number"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <BaseInput
                      name="packWtHeight"
                      v-model="packageOptions.height"
                      label="Height"
                      type="number"
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="pt-8">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Notifications
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </div>
        </div>
        <div class="pt-5">
          <div class="flex justify-end">
            <button
              type="button"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Rates
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive, toRefs } from "vue";
// import { useAxios } from "@vueuse/integrations";
// import { axios } from "axios";
import { useForm } from "vee-validate"; // useField
// import { Form, Field } from "vee-validate";
// import * as yup from "yup";

export default {
  /* components: {
    Form,
    Field,
  }, */
  setup() {
    // const isRequired = (value) => (value ? true : "This field is required");
    // const { value, errorMessage } = useField("field", isRequired);
    const { handleSubmit } = useForm();

    const form = reactive({
      shipTo: {
        name: "",
        company: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        email: "",
        phone: "",
      },
      shipFrom: {
        warehouseId: "",
      },
      packageOptions: {
        wtOunce: "",
        wtPound: "",
        length: "",
        width: "",
        height: "",
        insurance: "",
        carrierPackage: "",
      },
      warehouses: [
        // computed response
        "se-1234",
        "se-3456",
      ],
      countries: ["US", "CA", "MX"],
      packageTypes: [
        "Parcel",
        "SmallFlatRateBox",
        "MediumFlatRateBox",
        "LargeFlatRateBox",
      ],
    });
    // https://www.tutorialspoint.com/es6/es6_functions.htm
    // lambda functions
    /* const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    }); */
    let sendForm = handleSubmit((values) => {
      console.log(JSON.stringify(values, null, 2));
    });
    // axios.get("http://localhost:3000/customers").then(function (response) {
    // console.log("Response", response);
    // });
    //console.log("submitted", form)
    // let sendForm(form) {
    // axios.get("http://localhost:3000/customers", this.form)
    // .then(function (response) {
    // console.log('Response', response)
    //  }))

    /*  axios.get("http://localhost:3000/customers", this.form
      )
      .then(function (response) {
      console.log('Response', response)
    })}*/
    return {
      ...toRefs(form),
      sendForm,
      // value,
      //  errorMessage,
    };
  },
};
</script>
