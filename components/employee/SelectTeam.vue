<template>
  <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
    <input
      type="radio"
      name="productGrowth"
      id="productGrowth"
      @click="continueBtnClick"
      class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none"
    />
    <img src="/assets/svgs/ric-box.svg" alt="" />
    <div class="mt-6 mb-1 font-semibold text-center text-dark">{{team.name}}</div>
    <p class="text-center text-grey">{{ team.employee_count }} People</p>
  </div>
</template>
<script>
export default {
  props: ["team"],

}
</script>
