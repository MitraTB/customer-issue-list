<template>
  <div class="mt-5">
    <div class="rounded-lg w-full pb-4 min-h-40 bg-slate-50 shadow-lg">
      <div
        class="rounded-t-lg w-full bg-red-300 h-12 flex justify-between px-4 items-center shadow-lg"
      >
        {{ state.title }}
      </div>
      <div class="my-2 p-2 flex justify-between">
        <div>{{ state.description }}</div>
        <div class="flex"><IconPencil class="mr-5" /><IconDelete /></div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import IconPencil from "./icons/IconPencil.vue";
import IconDelete from "./icons/IconDelete.vue";
export default {
  setup() {
    const state = reactive({
      title: "hello",
      description: "dkdhadkaj iqeqwe eiqwoeque qioeqoueq o o    oeyoe   q ieu   iue eq puqiurqw i oiqeoqye qw oiequ qwoiuqewq oiuoiqwue ioeuq eq eqeyqequie haqwrqwrwqhrq  qyqwyieyqieuywq ieeqoeuq hueqqiewqye uyqyequ eqeuiyuwqyewq equiyqueq ewqiuyqe wqewqiywqeywq ewqiuyqweu wqewqyiuwyewq ewquqye qeyqwe dayduyiyas uiqyweyiu qeuyeq weqy eyqiuwqy iuyqw eqwuieyqiu uiyequewq  uiqweyqywq dadak udayeq  uwqyqeeywq uqwyrwury uqywiqry wq uqyrwqurqrqy uyrruqyiqwy uryquiryqwwqiu irqiurywqiyr ",
    });
    return {
      state,
    };
  },
  components: { IconPencil, IconDelete },
};
</script>
