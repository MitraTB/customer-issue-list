<template>
  <div class="mt-5">
    <div
      class="rounded w-full pb-4 min-h-48 bg-slate-50 shadow-lg border-2 border-slate-300"
    >
      <div
        class="w-full h-12 flex justify-between px-4 items-center border-b border-slate-200"
      >
        <div class="flex items-center">
          <CustomeLabel>title: </CustomeLabel>
          <p class="ml-2">{{ issue.title }}</p>
        </div>
        <div class="flex">
          <CheckBox class="mr-4" :value="issue.solved" @markIssue="markIssue" />
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
    action="edit"
    :id="issue.id"
  />
  <AlertModal
    v-if="openAlert"
    @confirmDelete="deleteIssue"
    @closeAlert="openAlert = false"
  />
  <SuccessToast v-if="state.successDelete" />
</template>
<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import IconPencil from "./icons/IconPencil.vue";
import IconDelete from "./icons/IconDelete.vue";
import FormModal from "./FormModal.vue";
import AlertModal from "./AlertModal.vue";
import SuccessToast from "./SuccessToast.vue";
import CustomeLabel from "./Ui/CustomeLabel.vue";
import CheckBox from "./Ui/CheckBox.vue";

export default {
  props: {
    issue: Object,
  },
  setup(props) {
    const store = useStore();
    const isOpen = ref(false);
    const openAlert = ref(false);
    const state = reactive({ successDelete: false });
    const deleteIssue = () => {
      store.dispatch("deleteIssue", props.issue.id);
      state.successDelete = true;
    };
    const markIssue = () => {
      const newData = { ...props.issue };
      newData.solved = !newData.solved;
      store.dispatch("editIssue", newData);
    };
    return {
      deleteIssue,
      isOpen,
      openAlert,
      state,
      markIssue,
    };
  },
  components: {
    IconPencil,
    IconDelete,
    FormModal,
    AlertModal,
    SuccessToast,
    CustomeLabel,
    CheckBox,
  },
};
</script>
