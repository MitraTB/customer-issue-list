<template>
  <div class="mt-5">
    <div
      class="rounded w-full pb-4 min-h-48 bg-slate-50 shadow-lg border-2 border-slate-300"
    >
      <div class="w-full h-12 flex justify-between px-4 items-center">
        <div>{{ issue.title }}</div>
        <div class="flex">
          <IconPencil class="mr-5 cursor-pointer" @click="isOpen = true" />
          <IconDelete class="cursor-pointer" @click="openAlert = true" />
        </div>
      </div>
      <div class="px-2">{{ issue.description }}</div>
    </div>
  </div>
  <FormModal
    v-if="isOpen"
    @cancleModal="isOpen = false"
    :name="'Edit Isuue'"
    :data="{ title: issue.title, description: issue.description }"
  />
  <AlertModal
    v-if="openAlert"
    @confirmDelete="deleteIssue"
    @closeAlert="openAlert = false"
  />
</template>
<script>
import IconPencil from "./icons/IconPencil.vue";
import IconDelete from "./icons/IconDelete.vue";
import store from "../store";
import FormModal from "./FormModal.vue";
import AlertModal from "./AlertModal.vue";
import { ref } from "vue";
export default {
  props: {
    issue: Object,
  },
  setup(props) {
    const isOpen = ref(false);
    const openAlert = ref(false);
    // const editIssue = (el) => store.dispatch("editIssue", el);
    const deleteIssue = () => {
      console.log('kdadakjgdkagkjdgagdak');
      store.dispatch("deleteIssue", props.issue.id);
    };
    return {
      deleteIssue,
      isOpen,
      openAlert,
    };
  },
  components: { IconPencil, IconDelete, FormModal, AlertModal },
};
</script>
