<template>
  <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
    <img :src="employee.photo" loading="lazy" width="70" alt="photo" />
    <div class="mt-6 mb-1 font-semibold text-center text-dark">{{ employee.name }}</div>
    <p class="text-center text-grey">{{ employee.role.name }}</p>
    <div
      v-if="employee.verified_at != null"
      class="mt-[30px] text-success flex items-center gap-[6px]"
    >
      <img src="/assets//svgs/ic-check-circle.svg" alt="" />
      Verified
    </div>
    <a v-else href="#verify" class="text-blue-700 mt-[30px] underline relative z-20">
      Verify Now
    </a>
  </div>
</template>
<script>
export default {
  props: ["employee"],
};
</script>
