<template>
  <div class="mt-5">
    <div
      class="rounded w-full pb-4 min-h-48 bg-slate-50 shadow-lg border-2 border-red-100"
    >
      <div
        class="w-full h-12 flex justify-between px-4 items-center border-b border-red-100"
      >
        <div class="flex items-center">
          <CustomeLabel>title: </CustomeLabel>
          <p class="ml-2">{{ issue.title }}</p>
        </div>
        <div class="flex">
          <IconPencil class="mr-5 cursor-pointer" @click="isOpen = true" />
          <IconDelete class="cursor-pointer" @click="openAlert = true" />
        </div>
      </div>
      <div class="p-4">
        <div class="flex items-center">
          <CustomeLabel>Customer Name: </CustomeLabel>
          <p class="ml-2 text-slate-600 text-sm">{{ issue.fullName }}</p>
        </div>
        <div class="flex items-center">
          <CustomeLabel>Customer Email: </CustomeLabel>
          <p class="ml-2 text-slate-600 text-sm">{{ issue.email }}</p>
        </div>
        <div class="flex mt-3">
          <CustomeLabel class="pt-1">Description: </CustomeLabel>
          <p class="ml-2">{{ issue.description }}</p>
        </div>
      </div>
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
  <SuccessToast v-if="state.successDelete" />
</template>
<script>
import IconPencil from "./icons/IconPencil.vue";
import IconDelete from "./icons/IconDelete.vue";
import store from "../store";
import FormModal from "./FormModal.vue";
import AlertModal from "./AlertModal.vue";
import SuccessToast from "./SuccessToast.vue";
import CustomeLabel from "./Ui/CustomeLabel.vue";
import { ref, reactive } from "vue";
export default {
  props: {
    issue: Object,
  },
  setup(props) {
    const isOpen = ref(false);
    const openAlert = ref(false);
    const state = reactive({ successDelete: false });
    // const editIssue = (el) => store.dispatch("editIssue", el);
    const deleteIssue = () => {
      console.log("kdadakjgdkagkjdgagdak");
      store.dispatch("deleteIssue", props.issue.id);
      state.successDelete = true;
      console.log("after", state.successDelete);
    };
    return {
      deleteIssue,
      isOpen,
      openAlert,
      state,
    };
  },
  components: {
    IconPencil,
    IconDelete,
    FormModal,
    AlertModal,
    SuccessToast,
    CustomeLabel,
  },
};
</script>
