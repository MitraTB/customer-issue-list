<template>
  <form @submit="addIssue">
    <label>tilte</label>
    <input v-model="state.title" />
    <lable>description</lable>
    <input v-model="state.description" />
    <button class="px-6 py-2 ml-2 text-blue-100 bg-red-600 rounded">
      Save
    </button>
    <button
      @click="closeModal"
      class="px-6 py-2 text-red-800 border border-red-600 rounded"
    >
      Cancel
    </button>
  </form>
</template>
<script>
import { reactive } from "vue";
import store from "../store";

export default {
  emits: ["closeModal"],
  props: {
    data: Object,
  },
  setup(props, context) {
    console.log("00000", props.data);
    const state = reactive({
      title: "",
      description: "",
    });
    const closeModal = () => {
      context.emit("closeModal");
    };
    const addIssue = () => {
      store.dispatch("addIssue", state);
    };
    return {
      state,
      addIssue,
      closeModal,
    };
  },
};
</script>
