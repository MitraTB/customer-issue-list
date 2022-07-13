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
import IssueForm from "./IssueForm.vue";
export default {
  components: {
    IssueCard,
    IssueForm,
  },
  setup() {
    const store = useStore();
    const issues = computed(() => store.state.issues);
    console.log('issues',issues);
    store.dispatch('getAllIssues')
    return {
      issues,
    };
  },
};
</script>
