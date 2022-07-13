<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl text-red-600">Alert</h3>
            <IconClose @closeModal="closeModal" />
          </div>
          <div class="my-4">Are you sure you want to delete?</div>
          <button
            @click="closeAlert"
            class="px-6 py-2 text-red-800 border border-red-600 rounded"
          >
            Cancel
          </button>
          <button
            @click="confirmDelete"
            class="px-6 py-2 ml-2 text-blue-100 bg-red-600 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconClose from "./icons/IconClose.vue";
export default {
  emits: ["closeAlert", "confirmDelete"],
  props: {
    data: Object,
    name: String,
  },
  setup(props, context) {
    function closeAlert() {
      context.emit("closeAlert");
    }
    function confirmDelete() {
      context.emit("confirmDelete");
    }
    return { closeAlert, confirmDelete };
  },
  components: { IconClose },
};
</script>
