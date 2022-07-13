<template>
  <div>
    <div v-for="issue in issues" :key="issue.id">
      <IssueCard :issue="issue" />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import IssueCard from "./IssueCard.vue";
export default {
  components: {
    IssueCard,
  },
  setup() {
    const store = useStore();
    const issues = computed(() => store.state.issues);
    store.dispatch("getAllIssues");
    return {
      issues,
    };
  },
};
</script>
