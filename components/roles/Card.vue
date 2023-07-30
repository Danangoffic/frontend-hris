<template>
  <div class="items-center card !flex-row gap-4">
    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
    <img src="/assets/svgs/ric-flag.svg" alt="" />
    <div>
      <div class="mb-1 font-semibold text-dark">{{ role.name }}</div>
      <p class="text-grey">{{ role.employee_count }} people assigned</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["role"],
};
</script>
