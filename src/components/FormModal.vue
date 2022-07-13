<template>
  <div class="container mx-auto">
    <div class="flex justify-center">s
      <div
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">{{ name }}</h3>
            <IconClose @closeModal="closeModal" />
          </div>
          <div class="mt-4">
            <IssueForm @close-modal="closeModal" :action="action" :id="id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import IssueForm from "./IssueForm.vue";
import IconClose from "./icons/IconClose.vue";
export default {
  emits: ["cancleModal"],
  props: {
    action: String,
    id: Number,
  },
  setup(props, context) {
    const name = computed(() => {
      if (props.action === "edit") return "Edit Issue";
      return "Add new isuue";
    });
    function closeModal() {
      context.emit("cancleModal");
    }
    return { closeModal, name };
  },
  components: { IssueForm, IconClose },
};
</script>
