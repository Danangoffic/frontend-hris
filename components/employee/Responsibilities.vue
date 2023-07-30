<template>
  <section v-if="responsibilities.length > 0">
    <label for="" class="text-grey"> Responsibilities </label>
    <div class="flex flex-col gap-4 mt-[10px]">
      <div
        v-for="responsibility in responsibilities"
        :key="responsibility.id"
        class="flex items-start md:items-center gap-[6px]"
      >
        <img src="/assets/svgs/ic-check-circle.svg" alt="" />
        <span class="text-sm text-dark">
          {{ responsibility.name }}
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["responsibilities"],
};
</script>
