<template>
  <div class="mt-5">
    <div class="rounded-lg w-full pb-4 min-h-40 bg-slate-50 shadow-lg">
      <div
        class="rounded-t-lg w-full bg-red-300 h-12 flex justify-between px-4 items-center shadow-lg"
      >
        {{ issue.title }}
      </div>
      <div class="my-2 p-2 flex justify-between">
        <div>{{ issue.description }}</div>
        <div class="flex">
          <IconPencil class="mr-5" @click="isOpen = true" /><IconDelete
            @click="deleteIssue(issue.id)"
          />
        </div>
      </div>
    </div>
  </div>
  <AddIssue
    v-show="isOpen"
    :data="{ title: issue.title, description: issue.description }"
  />
</template>
<script>
import IconPencil from "./icons/IconPencil.vue";
import IconDelete from "./icons/IconDelete.vue";
import store from "../store";
import AddIssue from "./AddIssue.vue";
import { ref } from "vue";
export default {
  props: {
    issue: Object,
  },
  setup() {
    const isOpen = ref(false);
    // const editIssue = (el) => store.dispatch("editIssue", el);
    const deleteIssue = (id) => {
      store.dispatch("deleteIssue", id);
    };
    return {
      deleteIssue,
      isOpen,
    };
  },
  components: { IconPencil, IconDelete, AddIssue },
};
</script>
