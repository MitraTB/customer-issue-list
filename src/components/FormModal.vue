<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">{{name}}</h3>
            <IconClose @closeModal="closeModal" />
          </div>
          <div class="mt-4">
            <IssueForm @close-modal="closeModal" :data="data"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import IssueForm from "./IssueForm.vue";
import store from "../store";
import IconClose from "./icons/IconClose.vue";
export default {
  emits: ["cancleModal"],
   props: {
    data: Object,
    name:String,
  },
  setup(props, context) {
    const state = reactive({
      title: "",
      description: "",
    });
    function closeModal() {
      context.emit("cancleModal");
    }
    const addIssue = () => {
      store.dispatch("addIssue", state);
    };
    return { addIssue, state, closeModal };
  },
  components: { IssueForm, IconClose },
};
</script>
