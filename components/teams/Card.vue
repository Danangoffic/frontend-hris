<template>
  <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
    <img loading="lazy" :src="team.icon" alt="" />
    <div class="mt-6 mb-1 font-semibold text-center text-dark">{{ team.name }}</div>
    <p class="text-center text-grey">{{ team.employees_count }} People</p>
  </div>
</template>

<script>
export default {
  props: ["team"],
};
</script>
