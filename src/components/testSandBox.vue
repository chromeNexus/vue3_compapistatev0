<template>
  <form @submit.prevent="sendForm" class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="pt-8">
        <!-- <div> -->
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Create Order
        </h3>
        <p class="mt-1 text-sm text-gray-500">Add shipping info below</p>
        <!-- <div> -->
        <fieldset>
          <legend class="block text-sm font-medium text-gray-700">
            Ship To:
          </legend>
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.name"
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
                label="Address 1"
                type="text"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput
                v-model="shipTo.address2"
                label="Address 2"
                type="text"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput v-model="shipTo.city" label="City" type="text" />
            </div>
            <div class="sm:col-span-3">
              <BaseInput v-model="shipTo.state" label="State" type="text" />
            </div>
            <div class="sm:col-span-3">
              <BaseSelect
                :options="countries"
                v-model="shipTo.country"
                label="Select a Country"
              />
            </div>
            <div class="sm:col-span-3">
              <BaseInput v-model="shipTo.postal" label="Postal" type="text" />
            </div>
            <div class="sm:col-span-3">
              <BaseInput v-model="shipTo.email" label="Email" type="email" />
            </div>
            <div class="sm:col-span-3">
              <BaseInput v-model="shipTo.phone" label="phone" type="tel" />
            </div>
          </div>
        </fieldset>
        <!--  </div> -->
        <!-- </div> -->

        <div class="space-y-8 divide-y divide-gray-200">
          <!-- <div class="pt-8"> -->
          <!-- <div> -->
          <fieldset>
            <legend class="block text-sm font-medium text-gray-700">
              Ship From:
            </legend>
            <div class="sm:col-span-3">
              <BaseSelect
                :options="warehouses"
                v-model="shipFrom.warehouseId"
                label="Ship From"
              />
            </div>
          </fieldset>
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <fieldset>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <legend>Package Weight:</legend>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <BaseInput
                    v-model="packageOptions.wtOunce"
                    label="Weight Ounces"
                    type="number"
                  />
                </div>
                <div class="sm:col-span-3">
                  <BaseInput
                    v-model="packageOptions.wtPound"
                    label="Weight Pounds"
                    type="number"
                  />
                </div>
              </div>
            </fieldset>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <fieldset>
                <div
                  class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                >
                  <legend>Package Dimensions:</legend>
                </div>
                <div
                  class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                >
                  <div class="sm:col-span-2">
                    <BaseInput
                      v-model="packageOptions.length"
                      label="Length"
                      type="number"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <BaseInput
                      v-model="packageOptions.width"
                      label="Width"
                      type="number"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <BaseInput
                      v-model="packageOptions.height"
                      label="Height"
                      type="number"
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <!--  <div class="pt-8">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Notifications
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
        </div>
      </div> -->
        <!--  <div class="pt-5">
        <div class="flex justify-end">
          <button
            type="button"
            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div> -->
      </div>
    </div>
  </form>
</template>

<script>
import { reactive, toRefs } from "vue";
//import axios from 'axios'
export default {
  setup() {
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
      },
      warehouses: [
        // computed response
        "se-1234",
        "se-3456",
      ],
      countries: ["US", "CA", "MX"],
    });
    return {
      ...toRefs(form),
    };
  },
};
</script>
