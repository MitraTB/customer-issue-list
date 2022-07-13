<template>
  <div class="container mx-auto">
    <button
      @click="isOpen = true"
      class="px-6 py-2 text-white bg-blue-600 rounded shadow"
      type="button"
    >
      Open Model
    </button>
    <IssueList />
  </div>
  <AddIssue v-show="isOpen" @hello="isOpen = false"/>
  <div v-show="isOpen">hello</div>
</template>
<script>
import { ref } from 'vue';
import IssueList from "./components/IssueList.vue";
import AddIssue from "./components/AddIssue.vue";
export default {
  components: {
    IssueList,
    AddIssue,
  },
   setup() {
    let isOpen = ref(false);
    return { isOpen };
  },
};
</script>
