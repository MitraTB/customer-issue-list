<template>
  <div class="container mx-auto">
    <button
      @click="isOpen = true"
      class="px-6 py-2 text-white bg-red-600 rounded shadow mx-2 mt-5"
      type="button"
    >
      Add New Issue
    </button>
    <IssueList class="mx-2"/>
  </div>
  <FormModal
    v-show="isOpen"
    @cancleModal="isOpen = false"
    :name="'Add New Issue'"
  />
  <div v-show="isOpen">hello</div>
</template>
<script>
import { ref } from "vue";
import IssueList from "./components/IssueList.vue";
import FormModal from "./components/FormModal.vue";
export default {
  components: {
    IssueList,
    FormModal,
  },
  setup() {
    let isOpen = ref(false);
    return { isOpen };
  },
};
</script>
