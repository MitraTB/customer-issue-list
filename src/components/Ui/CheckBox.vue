<template>
  <div class="flex items-center mb-4">
    <label
      for="default-checkbox"
      class="ml-2 text-sm font-medium text-gray-900 mr-2"
      >Solve</label
    >
    <input
      id="default-checkbox"
      type="checkbox"
      :checked="value"
      @change="markIssue"
      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
  </div>
</template>
<script>
export default {
  emits: ["markIssue"],
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const markIssue = () => {
      context.emit("markIssue");
    };
    return {
      markIssue,
    };
  },
};
</script>
