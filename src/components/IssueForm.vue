<template>
  <div class="flex justify-center flex-col">
    <div class="mb-3 w-80">
      <label
        for="exampleFormControlInput1"
        class="form-label inline-block mb-2 text-gray-700"
        >Name</label
      >
      <input
        type="text"
        v-model="state.fullName"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Enter your name"
      />
    </div>
    <div class="mb-3 w-80">
      <label
        for="exampleFormControlInput1"
        class="form-label inline-block mb-2 text-gray-700"
        >Email</label
      >
      <input
        type="email"
        v-model="state.email"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Enter your email"
      />
    </div>
    <div class="mb-3 w-80">
      <label
        for="exampleFormControlInput1"
        class="form-label inline-block mb-2 text-gray-700"
        >Title</label
      >
      <input
        type="text"
        v-model="state.title"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Enter your issue title"
      />
    </div>
    <div class="mb-3 w-80">
      <label
        for="exampleFormControlInput1"
        class="form-label inline-block mb-2 text-gray-700"
        >Description</label
      >
      <textarea
        type="text"
        v-model="state.description"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Enter your issue Description"
      />
    </div>
  </div>
  <button
    @click="closeModal"
    class="px-6 py-2 text-red-800 border border-red-600 rounded"
  >
    Cancel
  </button>
  <button
    @click="addIssue"
    class="px-6 py-2 ml-2 text-blue-100 bg-red-600 rounded"
  >
    Save
  </button>
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
    const state = reactive({
      title: "",
      description: "",
      fullName:'',
      email:''
    });
    const closeModal = () => {
      context.emit("closeModal");
    };
    const addIssue = () => {
      store.dispatch("addIssue", state);
      context.emit("closeModal");
      store.dispatch('getAllIssues');
      state.title = '';
      state.description = '';
      state.fullName='';
    };
    return {
      state,
      addIssue,
      closeModal,
    };
  },
};
</script>
